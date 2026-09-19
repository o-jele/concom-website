"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { prefersReducedMotion } from "@/lib/utils";

declare global {
  interface Window {
    __concomLenis?: Lenis | null;
  }
}

export function MotionInit() {
  const pathname = usePathname();

  /* Smooth scroll + anchor routing — mounts once and survives route changes. */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ duration: 1.1, anchors: false });
    window.__concomLenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      lenis?.scrollTo(target as HTMLElement, { offset: -84, duration: 1.4 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__concomLenis = null;
    };
  }, []);

  /* Scroll-bound animation. The layout persists across client-side navigation
     while the page DOM is swapped, so this rebinds on every route change —
     otherwise new [data-reveal] content would stay at opacity 0 until refresh. */
  useEffect(() => {
    const reduced = prefersReducedMotion();

    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)")
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    const quotes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-quote-scrub]")
    );
    const lightQuote = (q: HTMLElement, progress: number) => {
      const words = q.querySelectorAll<HTMLElement>(".qw");
      const lit = Math.round(progress * words.length + 0.4);
      words.forEach((w, i) => w.classList.toggle("is-lit", i < lit));
    };
    if (reduced) quotes.forEach((q) => lightQuote(q, 1));

    const triggers: ScrollTrigger[] = [];
    const tweens: gsap.core.Tween[] = [];

    if (!reduced) {
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.18");
        tweens.push(
          gsap.fromTo(
            el,
            { yPercent: -speed * 100 },
            {
              yPercent: speed * 100,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          )
        );
      });

      quotes.forEach((q) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: q,
            start: "top 78%",
            end: "bottom 52%",
            scrub: 0.4,
            onUpdate: (self) => lightQuote(q, self.progress),
          })
        );
      });

      document
        .querySelectorAll<HTMLElement>("[data-rotate-slow]")
        .forEach((el) => {
          tweens.push(
            gsap.to(el, {
              rotation: 360,
              duration: 90,
              repeat: -1,
              ease: "none",
            })
          );
        });
    }

    ScrollTrigger.refresh();

    return () => {
      io.disconnect();
      triggers.forEach((t) => t.kill());
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, [pathname]);

  return null;
}
