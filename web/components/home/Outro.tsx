import { site } from "@/content/site";
import { RingMark } from "@/components/ui/RingMark";

export function Outro() {
  return (
    <section className="relative overflow-hidden py-28 text-center lg:py-36">
      <RingMark
        className="absolute left-1/2 top-1/2 h-[88vmin] w-[88vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        strokeWidth={0.8}
        {...{ "data-parallax": "0.1" }}
      />
      <div className="wrap relative">
        <p className="h-display mx-auto max-w-4xl text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[1.15]" data-reveal>
          What a client <span className="italic">wants</span> and what a client{" "}
          <span className="italic">needs</span> are rarely the same brief. That gap is
          where our work starts.
        </p>
        <p
          className="eyebrow mt-10"
          data-reveal
          style={{ ["--reveal-delay" as string]: "140ms" }}
        >
          {site.name} — {site.tagline}
        </p>
      </div>
    </section>
  );
}
