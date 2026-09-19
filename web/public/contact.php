<?php
/**
 * ConCom PR & Publicity — contact form endpoint.
 * Receives POST from the website form, validates, and emails
 * info@concom.mw with wisdom@concom.mw in cc.
 *
 * Honeypot (field "website") silently drops bots. No reCAPTCHA
 * checkbox, per the rebuild brief.
 */

declare(strict_types=1);

header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

const TO      = 'info@concom.mw';
const CC      = 'wisdom@concom.mw';
const SUBJECT = 'Website enquiry — ConCom PR & Publicity';

$wantsJson = (isset($_SERVER['HTTP_ACCEPT']) && str_contains($_SERVER['HTTP_ACCEPT'], 'application/json'))
    || strtolower($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET';

function respond(bool $ok, string $redirect, string $error = ''): never
{
    global $wantsJson;
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code($ok ? 200 : 422);
        echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error]);
    } else {
        header('Location: ' . $redirect, true, 303);
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(false, '/contact/?error=1', 'Method not allowed');
}

// Honeypot: real visitors never fill the hidden "website" field.
if (trim((string)($_POST['website'] ?? '')) !== '') {
    // Pretend success so bots learn nothing.
    respond(true, '/contact/?sent=1');
}

$name         = trim((string)($_POST['name'] ?? ''));
$organisation = trim((string)($_POST['organisation'] ?? ''));
$email        = trim((string)($_POST['email'] ?? ''));
$phone        = trim((string)($_POST['phone'] ?? ''));
$service      = trim((string)($_POST['service'] ?? ''));
$message      = trim((string)($_POST['message'] ?? ''));

$fail = static function (string $field) use ($wantsJson): never {
    respond(false, '/contact/?error=1', 'Invalid ' . $field);
};

if ($name === '' || mb_strlen($name) > 120) $fail('name');
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 190) $fail('email');
if (mb_strlen($organisation) > 160) $fail('organisation');
if (mb_strlen($phone) > 40) $fail('phone');
if (mb_strlen($service) > 160) $fail('service');
if ($message === '' || mb_strlen($message) > 6000) $fail('message');

$lines = [
    'New enquiry from the ConCom website.',
    '',
    'Name:         ' . $name,
    'Organisation: ' . ($organisation !== '' ? $organisation : '—'),
    'Email:        ' . $email,
    'Phone:        ' . ($phone !== '' ? $phone : '—'),
    'Service:      ' . ($service !== '' ? $service : '—'),
    '',
    'Message:',
    $message,
    '',
    '— Sent from www.concom.mw/contact/',
];

$body = implode("\n", $lines);
$encodedSubject = '=?UTF-8?B?' . base64_encode(SUBJECT) . '?=';

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ConCom Website <' . TO . '>',
    'Reply-To: ' . str_replace(["\r", "\n"], '', $name) . ' <' . $email . '>',
    'Cc: ' . CC,
]);

$ok = @mail(TO, $encodedSubject, $body, $headers);

if (!$ok) {
    error_log('concom contact.php: mail() failed');
    respond(false, '/contact/?error=1', 'Mail transport failed');
}

respond(true, '/contact/?sent=1');
