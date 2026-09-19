import Link from "next/link";
import type { CaseStudy } from "@/content/work";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function CaseCard({
  study,
  index,
  className,
  delay = 0,
}: {
  study: CaseStudy;
  index: number;
  className?: string;
  delay?: number;
}) {
  return (
    <Link
      href={`/work/${study.slug}/`}
      className={cn("case-card group", className)}
      data-reveal
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      aria-label={`Case study: ${study.client}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="pill border-cream/25! text-cream/75!">
          <span className="dot" />
          {study.sector}
        </span>
        <span className="font-display text-lg italic text-cream/45">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-auto pt-14">
        <h3 className="h-section text-[1.9rem] text-cream">{study.client}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/65">
          {study.subtitle}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cream/90 transition-colors group-hover:text-cream">
          Read the case
          <Icon
            name="arrow-right"
            className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
          />
        </span>
      </div>
    </Link>
  );
}
