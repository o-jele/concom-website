import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChapterBadge } from "@/components/ui/ChapterBadge";
import { RingMark } from "@/components/ui/RingMark";
import { Magnetic } from "@/components/ui/Magnetic";
import { Icon } from "@/components/ui/Icon";
import { adjacent, caseStudies } from "@/content/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.client}`,
    description: `${study.subtitle}. ${study.brief}`,
    alternates: { canonical: `/work/${study.slug}/` },
    openGraph: {
      title: `${study.client} — ConCom PR & Publicity`,
      description: study.brief,
      url: `/work/${study.slug}/`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const { prev, next } = adjacent(study.slug);

  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-36 md:pb-20 md:pt-44">
        <RingMark
          variant="green"
          data-parallax
          className="pointer-events-none absolute -right-48 top-4 w-[36rem] opacity-[0.1] md:w-[48rem]"
        />
        <div className="wrap relative">
          <div className="flex flex-wrap items-center gap-4" data-reveal>
            <ChapterBadge num="04" />
            <Link
              href="/work/"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-green-deep"
            >
              <Icon name="arrow-left" className="size-4" />
              Our record
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3" data-reveal>
            <span className="pill">
              <span className="dot" />
              {study.sector}
            </span>
          </div>
          <h1 className="h-display mt-6 max-w-5xl">{study.client}</h1>
          <p className="mt-6 max-w-2xl font-display text-xl font-light italic leading-relaxed text-ink-soft md:text-2xl" data-reveal>
            {study.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="wrap grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {[
            { label: "Sector", value: study.sector },
            { label: "Scope", value: study.scope },
            { label: "Client", value: study.subtitle },
          ].map((m) => (
            <div key={m.label} className="bg-paper p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">{m.label}</p>
              <p className="mt-2.5 text-[15px] font-medium leading-relaxed">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="wrap grid gap-12 md:grid-cols-2 md:gap-14">
          <div data-reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ochre" />
              <p className="eyebrow">The brief</p>
            </div>
            <p className="mt-6 font-display text-2xl font-light leading-snug md:text-[1.7rem]">
              {study.brief}
            </p>
          </div>
          <div className="card-paper p-7 md:p-9" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-green" />
              <p className="eyebrow text-green-deep!">What we did</p>
            </div>
            <p className="mt-6 text-[15px] leading-[1.85] text-ink-soft md:text-base">
              {study.outcome}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="wrap grid md:grid-cols-2">
          <Link
            href={`/work/${prev.slug}/`}
            className="group flex flex-col gap-3 border-b border-line py-10 pr-4 md:border-b-0 md:border-r md:py-14"
            data-reveal
          >
            <span className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors group-hover:text-green-deep">
              <Icon name="arrow-left" className="size-4 transition-transform duration-500 group-hover:-translate-x-1.5" />
              Previous case
            </span>
            <span className="font-display text-2xl font-light transition-colors group-hover:text-green-deep md:text-3xl">
              {prev.client}
            </span>
          </Link>
          <Link
            href={`/work/${next.slug}/`}
            className="group flex flex-col items-start gap-3 py-10 md:items-end md:py-14 md:pl-4 md:text-right"
            data-reveal
          >
            <span className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors group-hover:text-green-deep">
              Next case
              <Icon name="arrow-right" className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </span>
            <span className="font-display text-2xl font-light transition-colors group-hover:text-green-deep md:text-3xl">
              {next.client}
            </span>
          </Link>
        </div>
        <div className="wrap pb-16 md:pb-24">
          <Magnetic className="inline-block">
            <Link href="/contact/" className="btn btn-primary">
              Start a project
              <Icon name="arrow-right" className="size-4" />
            </Link>
          </Magnetic>
        </div>
      </section>
    </>
  );
}
