import Link from "next/link";
import { practices } from "@/content/services";
import { ChapterBadge } from "@/components/ui/ChapterBadge";
import { Icon } from "@/components/ui/Icon";

export function PracticesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="wrap">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div data-reveal>
            <div className="mb-6 flex items-center gap-3">
              <ChapterBadge num="02" />
              <span className="eyebrow">What we do</span>
            </div>
            <h2 className="h-section max-w-2xl text-4xl lg:text-6xl">
              Five practices. Most engagements draw on{" "}
              <span className="italic">two or three</span> of them.
            </h2>
          </div>
          <Link
            href="/services/"
            className="btn btn-outline"
            data-reveal
            style={{ ["--reveal-delay" as string]: "150ms" }}
          >
            All services
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </Link>
        </div>

        <div className="rule">
          {practices.map((p, i) => (
            <Link
              key={p.slug}
              href={`/services/#${p.slug}`}
              className="group grid gap-4 border-b border-line py-8 transition-colors duration-500 hover:bg-green-deep sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 lg:py-10"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-5 px-1 sm:w-64 sm:px-4">
                <span className="font-display text-lg italic text-ink-faint transition-colors duration-500 group-hover:text-cream/60">
                  {p.num}
                </span>
                <span className="h-8 w-px bg-line transition-colors duration-500 group-hover:bg-cream/20" />
                <h3 className="h-section text-[1.55rem] transition-colors duration-500 group-hover:text-cream">
                  {p.title}
                </h3>
              </div>
              <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-cream/70 sm:px-4">
                {p.headline}
              </p>
              <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:border-cream/40 group-hover:bg-cream/10 sm:flex">
                <Icon
                  name="arrow-up-right"
                  className="h-5 w-5 transition-all duration-500 group-hover:rotate-45 group-hover:text-cream"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
