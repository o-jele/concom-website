"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { prefersReducedMotion } from "@/lib/utils";

declare global {
  interface Window {
    __concomLenis?: Lenis | null;
  }
}

export function MotionInit() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /* ---------- scroll reveals ---------- */
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
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

    /* ---------- pull-quote word scrub ---------- */
    const quotes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-quote-scrub]")
    );
    const quoteTriggers: ScrollTrigger[] = [];

    const lightQuote = (q: HTMLElement, progress: number) => {
      const words = q.querySelectorAll<HTMLElement>(".qw");
      const lit = Math.round(progress * words.length + 0.4);
      words.forEach((w, i) => w.classList.toggle("is-lit", i < lit));
    };

    if (prefersReducedMotion()) {
      quotes.forEach((q) => lightQuote(q, 1));
    }

    const reduced = prefersReducedMotion();
    let lenis: Lenis | null = null;
    const cleanups: (() => void)[] = [];

    if (!reduced) {
      /* ---------- smooth scroll ---------- */
      lenis = new Lenis({ duration: 1.1, anchors: false });
      window.__concomLenis = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      cleanups.push(() => {
        gsap.ticker.remove(raf);
        lenis?.destroy();
        window.__concomLenis = null;
      });

      /* in-page anchors route through Lenis */
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
      cleanups.push(() => document.removeEventListener("click", onAnchorClick));

      /* ---------- parallax ring motifs ---------- */
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.18");
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
        );
      });

      /* ---------- quote scrub ---------- */
      quotes.forEach((q) => {
        quoteTriggers.push(
          ScrollTrigger.create({
            trigger: q,
            start: "top 78%",
            end: "bottom 52%",
            scrub: 0.4,
            onUpdate: (self) => lightQuote(q, self.progress),
          })
        );
      });

      /* subtle rotation on decorative ring marks */
      document
        .querySelectorAll<HTMLElement>("[data-rotate-slow]")
        .forEach((el) => {
          gsap.to(el, {
            rotation: 360,
            duration: 90,
            repeat: -1,
            ease: "none",
          });
        });
    }

    return () => {
      io.disconnect();
      quoteTriggers.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
