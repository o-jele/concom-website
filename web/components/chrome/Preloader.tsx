"use client";

import { useEffect, useRef, useState } from "react";
import { RingMark } from "@/components/ui/RingMark";

const SEEN_KEY = "concom:preloaded";

/**
 * Branded curtain: the concentric rings draw in, the wordmark rises,
 * then the whole veil wipes upward. Plays once per session; after that
 * the component renders nothing and hero animations start immediately.
 */
export function Preloader() {
  const [show, setShow] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}

    const finish = () => {
      window.__concomReady = true;
      window.dispatchEvent(new Event("concom:ready"));
    };

    if (seen) {
      finish();
      setShow(false);
      return;
    }

    const el = ref.current;
    if (!el) return;
    document.documentElement.style.overflow = "hidden";

    const minWait = new Promise((r) => setTimeout(r, 1650));
    const fonts = document.fonts?.ready ?? Promise.resolve();

    let cancelled = false;
    Promise.all([minWait, fonts]).then(() => {
      if (cancelled) return;
      el.classList.add("is-done");
      document.documentElement.style.overflow = "";
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
      finish();
      setTimeout(() => !cancelled && setShow(false), 950);
    });

    return () => {
      cancelled = true;
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!show) return null;

  return (
    <div ref={ref} id="preloader" aria-hidden="true">
      <div className="flex flex-col items-center gap-6">
        <svg viewBox="0 0 200 200" fill="none" className="h-24 w-24" aria-hidden="true">
          {[96, 66, 36].map((r) => (
            <circle
              key={r}
              cx="100"
              cy="100"
              r={r}
              pathLength={1}
              className="ring-draw"
              stroke="#FCFBF8"
              strokeWidth={r === 36 ? 1.8 : 1.3}
            />
          ))}
          <circle cx="100" cy="100" r="6" fill="#D9922B" stroke="none" />
        </svg>
        <div className="preloader-word text-center">
          <p className="font-display text-3xl font-light tracking-wide text-cream">
            ConCom <span className="italic">PR &amp; Publicity</span>
          </p>
          <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cream/50">
            Lilongwe · Since 2007
          </p>
        </div>
      </div>
    </div>
  );
}
