"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { practices } from "@/content/services";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = "Please tell us your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email ?? "")) next.email = "A valid email helps us reply.";
    if (!data.message?.trim() || data.message.trim().length < 10) next.message = "A sentence or two about the brief is enough.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setState("sending");
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("send failed");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="card-paper p-8 md:p-10" data-reveal>
        <span className="grid size-12 place-items-center rounded-full bg-green text-cream">
          <Icon name="check" className="size-5" />
        </span>
        <h2 className="h-section mt-5">Message received.</h2>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
          Thank you — we will come back with an approach and a cost. If it is urgent, call
          {" "}<a href="tel:+265999500700" className="font-medium text-green-deep underline decoration-ochre decoration-2 underline-offset-4">+265 999 500 700</a>.
        </p>
        <button onClick={() => setState("idle")} className="btn btn-outline mt-7">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="card-paper p-6 sm:p-8 md:p-10" onSubmit={onSubmit} noValidate data-reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} />
          {errors.name && <p className="field-error">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor="cf-org">Organisation</label>
          <input id="cf-org" name="organisation" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field sm:col-span-2">
          <label htmlFor="cf-service">Service required</label>
          <select id="cf-service" name="service" defaultValue="">
            <option value="" disabled>
              Choose a practice
            </option>
            {practices.map((p) => (
              <option key={p.slug} value={p.title}>
                {p.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — help us place it</option>
          </select>
        </div>
        <div className="field sm:col-span-2">
          <label htmlFor="cf-message">Message</label>
          <textarea id="cf-message" name="message" rows={5} required aria-invalid={!!errors.message} />
          {errors.message && <p className="field-error">{errors.message}</p>}
        </div>
      </div>

      {/* honeypot: humans never see or fill this */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send the brief"}
          <Icon name="arrow-right" className="size-4" />
        </button>
        <p className="text-xs leading-relaxed text-ink-soft">
          Delivered to <a href="mailto:info@concom.mw" className="font-medium text-green-deep">info@concom.mw</a>,
          cc <a href="mailto:wisdom@concom.mw" className="font-medium text-green-deep">wisdom@concom.mw</a>.
        </p>
      </div>
      {state === "error" && (
        <p className="mt-4 rounded-lg bg-error/10 px-4 py-3 text-sm font-medium text-error">
          The message could not be sent from here. Please email info@concom.mw directly or call +265 999 500 700.
        </p>
      )}
    </form>
  );
}
