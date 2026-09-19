import { site } from "@/content/site";
import { RingMark } from "@/components/ui/RingMark";

export function QuoteBand() {
  const words = site.promise.split(" ");
  return (
    <section className="relative overflow-hidden bg-green-deep py-28 text-cream lg:py-36">
      <RingMark
        variant="light"
        strokeWidth={1}
        className="absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 opacity-[0.06]"
        {...{ "data-parallax": "0.15" }}
      />
      <div className="wrap relative">
        <p className="eyebrow mb-10 text-cream/50!" data-reveal>
          The ConCom premise
        </p>
        <blockquote data-quote-scrub className="max-w-5xl">
          <p className="h-display text-[clamp(1.8rem,4.2vw,3.4rem)] leading-[1.18]">
            {words.map((w, i) => (
              <span key={i} className="qw" style={{ ["--qw-delay" as string]: `${i * 18}ms` }}>
                {w}
                {i < words.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </p>
        </blockquote>
        <div className="mt-12 flex items-center gap-4" data-reveal>
          <span className="h-px w-14 bg-ochre" />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-cream/60">
            Why we exist
          </span>
        </div>
      </div>
    </section>
  );
}
