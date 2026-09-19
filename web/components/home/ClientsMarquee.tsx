import { clients } from "@/content/site";
import { Marquee } from "@/components/ui/Marquee";

export function ClientsMarquee() {
  return (
    <section aria-label="Selected clients and partners" className="rule py-16 lg:py-20">
      <div className="wrap mb-10" data-reveal>
        <p className="eyebrow">Selected clients &amp; partners</p>
      </div>
      <div data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
        <Marquee duration={52}>
          {clients.map((c) => (
            <span key={c} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-display text-2xl font-light italic text-ink/70 transition-colors hover:text-green lg:text-3xl">
                {c}
              </span>
              <span className="h-2 w-2 rounded-full border border-ochre" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
