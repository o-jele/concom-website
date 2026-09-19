import Link from "next/link";
import { nav, office, partner, site } from "@/content/site";
import { practices } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/ui/Magnetic";
import { ChapterBadge } from "@/components/ui/ChapterBadge";
import { RingMark } from "@/components/ui/RingMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-green-deep text-cream">
      {/* faint concentric motif, one instance per footer */}
      <RingMark
        variant="light"
        strokeWidth={1}
        className="absolute -right-40 -top-40 h-[560px] w-[560px] opacity-[0.07]"
        {...{ "data-parallax": "0.12" }}
      />

      <div className="wrap relative">
        {/* CTA */}
        <div className="grid gap-10 border-b border-cream/15 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div data-reveal>
            <div className="mb-6 flex items-center gap-3">
              <ChapterBadge num="06" light />
              <span className="eyebrow text-cream/60!">Talk to us</span>
            </div>
            <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl">
              Send us the brief, or the problem you{" "}
              <span className="italic">haven&rsquo;t managed to write a brief</span> for yet.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              We will come back with an approach and a cost.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <Magnetic>
              <Link href="/contact/" className="btn bg-cream text-green-deep hover:bg-ochre hover:text-green-deep">
                Start the conversation
                <Icon name="arrow-up-right" className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <a href={`mailto:${site.email}`} className="btn btn-ghost-light">
                {site.email}
              </a>
            </Magnetic>
          </div>
        </div>

        {/* link columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div data-reveal>
            <h3 className="eyebrow mb-5 text-cream/50!">Office</h3>
            <address className="not-italic leading-relaxed text-cream/80">
              {office.lines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
              <span className="mt-3 block text-cream/50">{office.poBox}</span>
            </address>
          </div>

          <div data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            <h3 className="eyebrow mb-5 text-cream/50!">Speak to</h3>
            <p className="font-display text-xl">{partner.name}</p>
            <p className="text-cream/50">{partner.role}</p>
            <div className="mt-4 space-y-2 text-cream/80">
              <a href={`tel:${partner.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 transition-colors hover:text-cream">
                <Icon name="phone" className="h-4 w-4 text-ochre" />
                {partner.phone}
              </a>
              <a href={`mailto:${partner.email}`} className="flex items-center gap-2.5 transition-colors hover:text-cream">
                <Icon name="mail" className="h-4 w-4 text-ochre" />
                {partner.email}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition-colors hover:text-cream">
                <Icon name="mail" className="h-4 w-4 text-ochre" />
                {site.email}
              </a>
            </div>
          </div>

          <div data-reveal style={{ ["--reveal-delay" as string]: "160ms" }}>
            <h3 className="eyebrow mb-5 text-cream/50!">Practices</h3>
            <ul className="space-y-2.5">
              {practices.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/services/#${p.slug}`}
                    className="text-cream/80 transition-colors hover:text-cream"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={{ ["--reveal-delay" as string]: "240ms" }}>
            <h3 className="eyebrow mb-5 text-cream/50!">Company</h3>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/80 transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/ConCom-Company-Profile.pdf"
                  download
                  className="mt-2 inline-flex items-center gap-2 font-medium text-ochre transition-colors hover:text-cream"
                >
                  <Icon name="download" className="h-4 w-4" />
                  Download company profile (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* compliance */}
        <div className="rule border-cream/15 grid gap-6 py-10 sm:grid-cols-3" data-reveal>
          {site.compliance.map((c) => (
            <div key={c.label} className="flex items-baseline justify-between gap-4 sm:block">
              <span className="text-xs uppercase tracking-[0.14em] text-cream/50">
                {c.label}
              </span>
              <span className="font-display text-2xl italic text-cream">{c.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-cream/15 py-8 text-sm text-cream/45 sm:flex-row sm:items-center">
          <p>© {year} ConCom PR &amp; Publicity. All rights reserved.</p>
          <p>Lilongwe, Malawi · www.concom.mw</p>
        </div>
      </div>
    </footer>
  );
}
