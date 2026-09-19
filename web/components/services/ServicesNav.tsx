"use client";

import { useEffect, useState } from "react";
import { practices } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServicesNav() {
  const [active, setActive] = useState(practices[0].slug);

  useEffect(() => {
    const sections = practices
      .map((p) => document.getElementById(p.slug))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Practices" className="hidden lg:block">
      <ul className="sticky top-28 space-y-1.5">
        {practices.map((p) => (
          <li key={p.slug}>
            <a
              href={`#${p.slug}`}
              className={cn(
                "anchor-link flex items-center gap-3 rounded-full border border-transparent px-4 py-2.5 text-sm font-medium text-ink-soft",
                active === p.slug && "is-active"
              )}
            >
              <span className="font-display text-xs italic opacity-70">{p.num}</span>
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
