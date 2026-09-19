"use client";

import { useEffect, useRef, useState } from "react";
import { cn, prefersReducedMotion } from "@/lib/utils";

export type Word = { text: string; italic?: boolean };

/**
 * Splits a headline into masked words that rise in with a stagger.
 * Waits for the preloader's `concom:ready` event (or a short fallback)
 * so the reveal is visible, not swallowed by the curtain.
 */
export function SplitWords({
  words,
  as: Tag = "h1",
  className,
  delayStep = 70,
  baseDelay = 150,
  once = true,
}: {
  words: Word[];
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  delayStep?: number;
  baseDelay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setGo(true);
      return;
    }
    const timer = window.setTimeout(() => setGo(true), 2400);
    const onReady = () => {
      window.clearTimeout(timer);
      setGo(true);
    };
    window.addEventListener("concom:ready", onReady, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("concom:ready", onReady);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (go) {
      el.classList.add("is-in");
      return;
    }
    if (!once) el.classList.remove("is-in");
  }, [go, once]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn(className)}
      aria-label={words.map((w) => w.text).join(" ")}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="word-mask">
            <span
              style={{ ["--word-delay" as string]: `${baseDelay + i * delayStep}ms` }}
              className={cn(w.italic && "italic")}
            >
              {w.text}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          </span>
        </span>
      ))}
    </Tag>
  );
}
