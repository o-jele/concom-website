import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/**
 * The logo's concentric-ring mark, redrawn as a scalable stroke graphic.
 * `variant="light"` renders paper strokes for use on green bands.
 */
export function RingMark({
  className,
  variant = "green",
  strokeWidth = 1.4,
  ...rest
}: {
  className?: string;
  variant?: "green" | "light" | "ochre";
  strokeWidth?: number;
} & SVGProps<SVGSVGElement>) {
  const stroke =
    variant === "light"
      ? "#FCFBF8"
      : variant === "ochre"
        ? "#D9922B"
        : "var(--green-bright)";
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
      {...rest}
    >
      <circle cx="100" cy="100" r="96" stroke={stroke} strokeWidth={strokeWidth} />
      <circle cx="100" cy="100" r="72" stroke={stroke} strokeWidth={strokeWidth} />
      <circle cx="100" cy="100" r="48" stroke={stroke} strokeWidth={strokeWidth} />
      <circle cx="100" cy="100" r="24" stroke={stroke} strokeWidth={strokeWidth} />
      <circle cx="100" cy="100" r="7" fill={stroke} stroke="none" />
    </svg>
  );
}
