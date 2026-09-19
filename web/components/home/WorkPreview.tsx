import Link from "next/link";
import { caseStudies } from "@/content/work";
import { CaseCard } from "@/components/work/CaseCard";
import { ChapterBadge } from "@/components/ui/ChapterBadge";
import { Icon } from "@/components/ui/Icon";

export function WorkPreview() {
  const featured = [caseStudies[0], caseStudies[1], caseStudies[4]];

  return (
    <section className="py-24 lg:py-32">
      <div className="wrap">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div data-reveal>
            <div className="mb-6 flex items-center gap-3">
              <ChapterBadge num="04" />
              <span className="eyebrow">Our record</span>
            </div>
            <h2 className="h-section max-w-2xl text-4xl lg:text-6xl">
              Selected assignments.{" "}
              <span className="italic">References</span> available on request.
            </h2>
          </div>
          <Link
            href="/work/"
            className="btn btn-outline"
            data-reveal
            style={{ ["--reveal-delay" as string]: "150ms" }}
          >
            All case studies
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((study, i) => (
            <CaseCard key={study.slug} study={study} index={i} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
