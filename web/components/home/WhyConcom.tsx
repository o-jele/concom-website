import { differentiators } from "@/content/site";
import { ChapterBadge } from "@/components/ui/ChapterBadge";
import { RingMark } from "@/components/ui/RingMark";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function WhyConcom() {
  const [featured, ...rest] = differentiators;

  return (
    <section className="relative overflow-hidden bg-paper-2 py-24 lg:py-32">
      <div className="wrap">
        <div className="mb-16 max-w-3xl" data-reveal>
          <div className="mb-6 flex items-center gap-3">
            <ChapterBadge num="03" />
            <span className="eyebrow">Why ConCom</span>
          </div>
          <h2 className="h-section text-4xl lg:text-6xl">
            Four things we can do that a{" "}
            <span className="italic">general agency</span> cannot.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* featured capability */}
          <article
            className="relative overflow-hidden rounded-2xl bg-green-deep p-9 text-cream lg:col-span-2 lg:p-12"
            data-reveal
          >
            <RingMark
              variant="light"
              strokeWidth={1}
              className="absolute -bottom-28 -right-28 h-80 w-80 opacity-[0.08]"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="pill border-cream/30! text-cream/85!">
                  <span className="dot" />
                  Featured capability
                </span>
                <span className="flex items-baseline gap-1 font-display">
                  <CountUp
                    to={20}
                    suffix="+"
                    className="text-5xl font-light italic text-ochre"
                  />
                  <span className="ml-2 text-sm text-cream/60">years of media relationships</span>
                </span>
              </div>
              <h3 className="h-section mt-10 max-w-lg text-3xl text-cream lg:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-5 max-w-2xl leading-relaxed text-cream/75">{featured.body}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">
                <Icon name="media" className="h-4 w-4 text-ochre" />
                Nzika × ReelAnalytics
              </p>
            </div>
          </article>

          {rest.map((d, i) => (
            <article
              key={d.title}
              className={cn(
                "rounded-2xl bg-paper p-9 shadow-sm ring-1 ring-line",
                i === 2 && "lg:col-span-2"
              )}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i + 1) * 100}ms` }}
            >
              <span className="font-display text-lg italic text-ochre">
                {String(i + 2).padStart(2, "0")}
              </span>
              <h3 className="h-section mt-6 text-2xl lg:text-[1.7rem]">{d.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{d.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
