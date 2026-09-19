import { cn } from "@/lib/utils";

export function ChapterBadge({
  num,
  className,
  light = false,
}: {
  num: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-[1.05rem] italic",
        light ? "bg-cream text-green-deep" : "chapter-badge",
        className
      )}
      aria-hidden="true"
    >
      {num}
    </span>
  );
}
