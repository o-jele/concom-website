import type { Metadata } from "next";
import { ChapterBadge } from "@/components/ui/ChapterBadge";
import { SplitWords } from "@/components/ui/SplitWords";
import { RingMark } from "@/components/ui/RingMark";
import { Icon } from "@/components/ui/Icon";
import WorkFilter from "@/components/work/WorkFilter";
import { roster } from "@/content/work";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected assignments by ConCom PR & Publicity — UNDP, the EU Delegation to Malawi, ActionAid Malawi, the Royal Norwegian Embassy, IFES, USAID, SunSeed Oil and more. References available on request.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
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
            <ChapterBadge num="04" />
            <p className="eyebrow">Our record</p>
          </div>
          <SplitWords
            as="h1"
            className="h-display mt-8 max-w-4xl"
            words={[{ text: "Selected" }, { text: "assignments.", italic: true }]}
          />
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft" data-reveal>
            References available on request.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <WorkFilter />
        </div>
      </section>

      <section className="border-t border-line bg-paper-2/60 py-20 md:py-28">
        <div className="wrap">
          <div className="flex items-center gap-4" data-reveal>
            <span className="h-px w-10 bg-ochre" />
            <p className="eyebrow">Beyond the case studies</p>
          </div>
          <h2 className="h-section mt-6 max-w-2xl" data-reveal>
            We have also worked with
          </h2>

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {roster.map((entry, i) => (
              <div
                key={entry.name}
                className="flex gap-5 border-t border-line pt-6"
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
              >
                <span className="font-display text-lg italic text-green-deep/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold">
                    {entry.name}
                    {entry.fullName && (
                      <span className="ml-2 font-display text-base font-light italic text-ink-soft">
                        {entry.fullName}
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{entry.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4" data-reveal>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
              Send us the brief, or the problem you haven&rsquo;t managed to write a brief for yet.
            </p>
            <a href="/contact/" className="btn btn-primary">
              Start a project
              <Icon name="arrow-right" className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
