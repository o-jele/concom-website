import { site } from "@/content/site";

export function MissionVision() {
  return (
    <section className="bg-paper-2 py-24 lg:py-32">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal>
            <p className="eyebrow mb-5">Mission · Vision</p>
            <h2 className="h-section text-4xl lg:text-5xl">
              Solutions that speak to the{" "}
              <span className="italic text-green dark:text-green-bright">puzzle</span>, not
              the brief.
            </h2>
          </div>
          <p
            className="max-w-xl text-lg leading-relaxed text-ink-soft lg:justify-self-end"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            A ministry, a donor delegation and an edible-oil producer are not talking to the
            same Malawi — and they should not be handed the same plan.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article
            className="rounded-2xl bg-paper p-9 shadow-sm ring-1 ring-line lg:p-12"
            data-reveal
          >
            <span className="font-display text-lg italic text-ochre">Our mission</span>
            <p className="mt-5 font-display text-2xl font-light leading-snug lg:text-[1.7rem]">
              {site.mission}
            </p>
          </article>
          <article
            className="rounded-2xl bg-paper p-9 shadow-sm ring-1 ring-line lg:p-12"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <span className="font-display text-lg italic text-ochre">Our vision</span>
            <p className="mt-5 font-display text-2xl font-light leading-snug lg:text-[1.7rem]">
              {site.vision}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
