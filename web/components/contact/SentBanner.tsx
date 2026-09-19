"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "@/components/ui/Icon";

export default function SentBanner() {
  const params = useSearchParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(params.get("sent") === "1");
  }, [params]);

  if (!show) return null;

  return (
    <div className="mb-8 flex flex-wrap items-center gap-4 rounded-2xl border border-green/25 bg-green/5 p-5" role="status">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-green text-cream">
        <Icon name="check" className="size-5" />
      </span>
      <p className="min-w-0 flex-1 text-[15px] leading-relaxed">
        <strong className="font-semibold text-ink">Thank you — your message has been sent.</strong>{" "}
        <span className="text-ink-soft">We will come back with an approach and a cost.</span>
      </p>
      <button
        onClick={() => setShow(false)}
        className="text-sm font-medium text-green-deep underline decoration-ochre decoration-2 underline-offset-4"
      >
        Dismiss
      </button>
    </div>
  );
}
