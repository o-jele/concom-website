import type { Metadata } from "next";
import Link from "next/link";
import { practices } from "@/content/services";
import { ChapterBadge } from "@/components/ui/ChapterBadge";
import { Icon } from "@/components/ui/Icon";
import { SplitWords } from "@/components/ui/SplitWords";
import { ServicesNav } from "@/components/services/ServicesNav";
import { Magnetic } from "@/components/ui/Magnetic";

export const metadata: Metadata = {
  title: "Services — five practices, one longer route",
  description:
    "Research and insight, strategy and advisory, media relations, public relations and campaigns, and creative production and events — the five practices of ConCom PR & Publicity.",
};

export default function ServicesPage() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-44 lg:pb-24 lg:pt-56">
        <div className="wrap">
          <div className="mb-7 flex items-center gap-3" data-reveal>
            <ChapterBadge num="02" />
            <span className="eyebrow">What we do</span>
          </div>
          <SplitWords
            as="h1"
            className="h-display max-w-5xl text-[clamp(2.4rem,5.6vw,4.9rem)]"
            words={[
              { text: "Five" },
              { text: "practices." },
              { text: "Most" },
              { text: "engagements" },
              { text: "draw" },
              { text: "on" },
              { text: "two", italic: true },
              { text: "or", italic: true },
              { text: "three", italic: true },
              { text: "of" },
              { text: "them." },
            ]}
            delayStep={50}
          />
          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft"
            data-reveal
            style={{ ["--reveal-delay" as string]: "480ms" }}
          >
            Every engagement starts from what is actually true — researched in the field,
            written for the audience, and measured after it ships.
          </p>
        </div>
      </section>

      {/* chapters */}
      <section className="pb-24 lg:pb-32">
        <div className="wrap grid gap-16 lg:grid-cols-[240px_1fr]">
          <ServicesNav />

          <div>
            {practices.map((p, i) => (
              <article
                key={p.slug}
                id={p.slug}
                className="scroll-mt-28 border-t border-line py-14 first:border-t-0 first:pt-0 lg:py-16"
                data-reveal
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-lg italic text-ochre">{p.num}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-green dark:text-green-bright">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                </div>

                <h2 className="h-section mt-6 text-3xl lg:text-5xl">{p.title}</h2>
                <p className="mt-4 max-w-2xl font-display text-xl font-light italic leading-snug text-ink-soft lg:text-2xl">
                  {p.headline}
                </p>

                {p.note && (
                  <aside className="mt-8 rounded-xl border-l-2 border-ochre bg-paper-2 p-6">
                    <span className="pill pill-filled mb-3">
                      <span className="dot bg-paper!" />
                      Featured capability
                    </span>
                    <p className="text-[0.95rem] leading-relaxed text-ink-soft">{p.note}</p>
                  </aside>
                )}

                <div className="mt-10 grid gap-6 md:grid-cols-1">
                  {p.subs.map((s, j) => (
                    <div
                      key={s.title}
                      className="grid gap-3 rounded-xl p-6 ring-1 ring-line transition-shadow duration-500 hover:shadow-md md:grid-cols-[220px_1fr] md:gap-8"
                      data-reveal
                      style={{ ["--reveal-delay" as string]: `${j * 70}ms` }}
                    >
                      <h3 className="font-semibold text-green dark:text-green-bright">
                        {s.title}
                      </h3>
                      <p className="leading-relaxed text-ink-soft">{s.body}</p>
                    </div>
                  ))}
                </div>

                {i < practices.length - 1 && <span className="sr-only">Next practice</span>}
              </article>
            ))}

            <div className="mt-16 rounded-2xl bg-green-deep p-9 text-cream lg:p-12" data-reveal>
              <h2 className="h-section max-w-xl text-3xl lg:text-4xl">
                Not sure which practice your problem belongs to?{" "}
                <span className="italic">Good.</span>
              </h2>
              <p className="mt-4 max-w-xl text-cream/70">
                Send us the brief — or the problem you haven&rsquo;t managed to write a brief
                for yet. We will come back with an approach and a cost.
              </p>
              <Magnetic>
                <Link href="/contact/" className="btn mt-8 bg-cream text-green-deep hover:bg-ochre">
                  Start the conversation
                  <Icon name="arrow-up-right" className="h-4 w-4" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
