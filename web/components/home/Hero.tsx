import Link from "next/link";
import { SplitWords } from "@/components/ui/SplitWords";
import { RingMark } from "@/components/ui/RingMark";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/ui/Magnetic";
import { facts, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* concentric-ring motif — the one large instance on the page */}
      <div className="pointer-events-none absolute -right-[12vw] top-[6vh] h-[68vmin] w-[68vmin] opacity-[0.13] dark:opacity-[0.16]">
        <RingMark data-parallax="0.2" data-rotate-slow className="h-full w-full" />
      </div>

      <div className="wrap flex flex-1 flex-col justify-center pb-16 pt-40 lg:pt-48">
        <p
          className="eyebrow mb-8 flex items-center gap-3"
          data-reveal
        >
          <span className="inline-block h-px w-10 bg-ochre" />
          Corporate communications · Lilongwe, Malawi
        </p>

        <SplitWords
          as="h1"
          className="h-display max-w-6xl text-[clamp(2.9rem,7.6vw,6.6rem)]"
          words={[
            { text: "We" },
            { text: "turn" },
            { text: "what" },
            { text: "institutions" },
            { text: "know" },
            { text: "into" },
            { text: "what" },
            { text: "people" },
            { text: "hear.", italic: true },
          ]}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p
            className="max-w-xl text-lg leading-relaxed text-ink-soft"
            data-reveal
            style={{ ["--reveal-delay" as string]: "500ms" }}
          >
            {site.intro}
          </p>
          <div
            className="flex flex-wrap gap-4"
            data-reveal
            style={{ ["--reveal-delay" as string]: "640ms" }}
          >
            <Magnetic>
              <Link href="/work/" className="btn btn-primary">
                See our work
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/contact/" className="btn btn-outline">
                Talk to us
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* fact strip */}
      <div className="wrap pb-10" data-reveal style={{ ["--reveal-delay" as string]: "760ms" }}>
        <dl className="rule grid grid-cols-2 gap-x-8 gap-y-8 pt-8 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col">
              <dd className="font-display text-3xl font-light italic text-green dark:text-green-bright lg:text-4xl">
                {f.value}
              </dd>
              <dt className="mt-2 block text-[0.8rem] leading-snug text-ink-soft">
                {f.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
