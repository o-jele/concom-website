import { cn } from "@/lib/utils";

/**
 * Infinite CSS marquee. Content is duplicated for the -50% loop;
 * the duplicate is aria-hidden. Pauses on hover (CSS).
 */
export function Marquee({
  children,
  className,
  duration = 46,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <div className={cn("marquee", className)}>
      <div
        className="marquee-track"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex items-center" aria-hidden="false">
          {children}
        </div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
