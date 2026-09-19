"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { sectors, type Sector } from "@/content/site";
import { caseStudies } from "@/content/work";
import { CaseCard } from "@/components/work/CaseCard";
import { cn, prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(Flip);

type Filter = Sector | "All";
const filters: Filter[] = ["All", ...sectors];

export default function WorkFilter() {
  const [active, setActive] = useState<Filter>("All");
  const rootRef = useRef<HTMLDivElement>(null);
  const pendingFlip = useRef<{ state: Flip.FlipState; sector: Filter } | null>(null);

  const count =
    active === "All" ? caseStudies.length : caseStudies.filter((c) => c.sector === active).length;

  function select(sector: Filter) {
    if (sector === active || !rootRef.current) return;
    if (prefersReducedMotion()) {
      setActive(sector);
      return;
    }
    const items = rootRef.current.querySelectorAll("[data-case-item]");
    pendingFlip.current = { state: Flip.getState(items), sector };
    setActive(sector);
  }

  useLayoutEffect(() => {
    const pending = pendingFlip.current;
    if (!pending || !rootRef.current) return;
    pendingFlip.current = null;
    const items = rootRef.current.querySelectorAll("[data-case-item]");
    Flip.from(pending.state, {
      duration: 0.6,
      ease: "power3.inOut",
      absolute: true,
      nested: true,
      onEnter: (els) =>
        gsap.fromTo(els, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.45, delay: 0.15, ease: "power2.out" }),
      onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.94, duration: 0.28, ease: "power2.in" }),
    });
    return () => {
      gsap.killTweensOf(items);
    };
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5" role="group" aria-label="Filter case studies by sector">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => select(f)}
            aria-pressed={active === f}
            className={cn(
              "pill cursor-pointer transition-all duration-300",
              active === f && "pill-filled",
            )}
          >
            {f === "All" ? "All sectors" : f}
          </button>
        ))}
        <p className="ml-auto text-sm italic text-ink-soft" aria-live="polite">
          {count} {count === 1 ? "assignment" : "assignments"}
        </p>
      </div>

      <div ref={rootRef} className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
        {caseStudies.map((study, i) => (
          <div
            key={study.slug}
            data-case-item
            className={cn(active !== "All" && study.sector !== active && "hidden")}
          >
            <CaseCard study={study} index={i} className="h-full min-h-[340px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
