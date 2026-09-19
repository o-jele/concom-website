import type { Metadata } from "next";
import { Suspense } from "react";
import { ChapterBadge } from "@/components/ui/ChapterBadge";
import { SplitWords } from "@/components/ui/SplitWords";
import { RingMark } from "@/components/ui/RingMark";
import { Magnetic } from "@/components/ui/Magnetic";
import { Icon } from "@/components/ui/Icon";
import ContactForm from "@/components/contact/ContactForm";
import SentBanner from "@/components/contact/SentBanner";
import { office, partner, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send ConCom PR & Publicity the brief — or the problem you haven't managed to write a brief for yet. NONM Building, Area 13, City Centre, Lilongwe. info@concom.mw · +265 999 500 700.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-36 md:pb-20 md:pt-44">
        <RingMark
          variant="green"
          data-parallax
          className="pointer-events-none absolute -right-40 top-8 w-[34rem] opacity-[0.1] md:w-[44rem]"
        />
        <div className="wrap relative">
          <div className="flex items-center gap-4" data-reveal>
            <ChapterBadge num="05" />
            <p className="eyebrow">Contact</p>
          </div>
          <SplitWords
            as="h1"
            className="h-display mt-8 max-w-4xl"
            words={[{ text: "Talk" }, { text: "to" }, { text: "us." }]}
          />
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal>
            Send us the brief, or the problem you haven&rsquo;t managed to write a brief for yet.
            We will come back with an approach and a cost.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="wrap grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
          <div className="space-y-5">
            <div className="card-paper p-7" data-reveal>
              <span className="grid size-11 place-items-center rounded-full bg-green text-cream">
                <Icon name="pin" className="size-5" />
              </span>
              <h2 className="mt-5 font-display text-xl font-light">The office</h2>
              <address className="mt-3 text-[15px] not-italic leading-relaxed text-ink-soft">
                {office.lines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
                <span className="mt-2 block text-ink">{office.poBox}</span>
              </address>
            </div>

            <div className="card-paper p-7" data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
              <span className="grid size-11 place-items-center rounded-full bg-green text-cream">
                <Icon name="phone" className="size-5" />
              </span>
              <h2 className="mt-5 font-display text-xl font-light">
                {partner.name}
                <span className="mt-1 block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {partner.role}
                </span>
              </h2>
              <div className="mt-4 space-y-2 text-[15px]">
                <a
                  href={`tel:${partner.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 font-medium text-green-deep underline decoration-ochre decoration-2 underline-offset-4"
                >
                  <Icon name="phone" className="size-4 text-green" />
                  {partner.phone}
                </a>
                <a
                  href={`mailto:${partner.email}`}
                  className="flex items-center gap-2.5 font-medium text-green-deep underline decoration-ochre decoration-2 underline-offset-4"
                >
                  <Icon name="mail" className="size-4 text-green" />
                  {partner.email}
                </a>
              </div>
            </div>

            <div className="card-paper p-7" data-reveal style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
              <span className="grid size-11 place-items-center rounded-full bg-green text-cream">
                <Icon name="mail" className="size-5" />
              </span>
              <h2 className="mt-5 font-display text-xl font-light">General enquiries</h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 flex items-center gap-2.5 text-[15px] font-medium text-green-deep underline decoration-ochre decoration-2 underline-offset-4"
              >
                <Icon name="mail" className="size-4 text-green" />
                {site.email}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Selected assignments. References available on request.
              </p>
            </div>
          </div>

          <div>
            <Suspense fallback={null}>
              <SentBanner />
            </Suspense>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <div className="map-frame overflow-hidden rounded-3xl border border-line" data-reveal>
            <iframe
              title="Map — NONM Building, Area 13, City Centre, Lilongwe"
              src="https://www.google.com/maps?q=NONM%20Building%20Area%2013%20City%20Centre%20Lilongwe%20Malawi&output=embed"
              width="100%"
              height="460"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block w-full"
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4" data-reveal>
            <p className="text-sm text-ink-soft">
              NONM Building, Room 5 — Area 13, opposite the City Centre Mosque.
            </p>
            <Magnetic>
              <a
                href="https://www.google.com/maps/search/?api=1&query=NONM+Building+Area+13+City+Centre+Lilongwe+Malawi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Get directions
                <Icon name="external" className="size-4" />
              </a>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  );
}
