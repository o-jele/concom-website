import type { Metadata } from "next";
import Link from "next/link";
import { differentiators, facts, site, whoWeAre } from "@/content/site";
import { ChapterBadge } from "@/components/ui/ChapterBadge";
import { RingMark } from "@/components/ui/RingMark";
import { SplitWords } from "@/components/ui/SplitWords";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "About — a Malawian agency working across every sector",
  description:
    "ConCom PR & Publicity is a locally owned and run corporate communications agency in Lilongwe, Malawi. Who we are, our mission and vision, and why we take the longer route on purpose.",
};

export default function AboutPage() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden pb-20 pt-44 lg:pb-28 lg:pt-56">
        <RingMark
          className="absolute -right-[10vw] -top-[6vh] h-[52vmin] w-[52vmin] opacity-[0.1]"
          {...{ "data-parallax": "0.16" }}
        />
        <div className="wrap relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-7 flex items-center gap-3" data-reveal>
              <ChapterBadge num="01" />
              <span className="eyebrow">{whoWeAre.kicker}</span>
            </div>
            <SplitWords
              as="h1"
              className="h-display text-[clamp(2.4rem,5.6vw,4.9rem)]"
              words={[
                { text: "A" },
                { text: "Malawian" },
                { text: "agency," },
                { text: "working" },
                { text: "across" },
                { text: "every" },
                { text: "sector" },
                { text: "that" },
                { text: "has" },
                { text: "to" },
                { text: "explain" },
                { text: "itself" },
                { text: "in", italic: true },
                { text: "public.", italic: true },
              ]}
              delayStep={45}
            />
          </div>
          <div className="flex flex-col justify-end gap-8">
            <p className="text-lg leading-relaxed text-ink-soft" data-reveal style={{ ["--reveal-delay" as string]: "420ms" }}>
              {whoWeAre.paragraphs[0]}
            </p>
            <p className="leading-relaxed text-ink-soft" data-reveal style={{ ["--reveal-delay" as string]: "520ms" }}>
              {whoWeAre.paragraphs[1]}
            </p>
          </div>
        </div>
      </section>

      {/* the longer route band */}
      <section className="bg-green-deep py-20 text-cream lg:py-24">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <blockquote data-reveal>
            <p className="h-display text-[clamp(1.7rem,3.6vw,2.9rem)] leading-[1.2]">
              &ldquo;We believe the main failure of most communication advisory services in
              Malawi comes from a lack of patience&hellip;{" "}
              <span className="italic text-ochre">We take the longer route on purpose.</span>&rdquo;
            </p>
          </blockquote>
          <p className="max-w-sm text-cream/70" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            {whoWeAre.paragraphs[2]}
          </p>
        </div>
      </section>

      {/* mission / vision */}
      <section className="bg-paper-2 py-24 lg:py-28">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-paper p-9 ring-1 ring-line lg:p-12" data-reveal>
            <span className="font-display text-lg italic text-ochre">Our mission</span>
            <p className="mt-5 font-display text-2xl font-light leading-snug lg:text-3xl">
              {site.mission}
            </p>
          </article>
          <article
            className="rounded-2xl bg-paper p-9 ring-1 ring-line lg:p-12"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <span className="font-display text-lg italic text-ochre">Our vision</span>
            <p className="mt-5 font-display text-2xl font-light leading-snug lg:text-3xl">
              {site.vision}
            </p>
          </article>
        </div>

        {/* fact strip */}
        <div className="wrap mt-16" data-reveal>
          <dl className="rule grid grid-cols-2 gap-x-8 gap-y-8 pt-8 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dd className="font-display text-3xl font-light italic text-green dark:text-green-bright lg:text-4xl">
                  {f.value}
                </dd>
                <dt className="mt-2 block text-[0.8rem] leading-snug text-ink-soft">{f.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-ink-soft">
            Registered at all three levels required by the laws of Malawi.
          </p>
        </div>
      </section>

      {/* differentiators */}
      <section className="py-24 lg:py-32">
        <div className="wrap">
          <div className="mb-14 max-w-3xl" data-reveal>
            <div className="mb-6 flex items-center gap-3">
              <ChapterBadge num="03" />
              <span className="eyebrow">Why ConCom</span>
            </div>
            <h2 className="h-section text-4xl lg:text-6xl">
              Four things we can do that a <span className="italic">general agency</span>{" "}
              cannot.
            </h2>
          </div>
          <div className="rule grid gap-x-12 gap-y-0 md:grid-cols-2">
            {differentiators.map((d, i) => (
              <article key={d.title} className="border-b border-line py-10" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-xl italic text-ochre">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="h-section text-2xl lg:text-3xl">{d.title}</h3>
                </div>
                <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{d.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-14" data-reveal>
            <Link href="/work/" className="btn btn-primary">
              See the record
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
