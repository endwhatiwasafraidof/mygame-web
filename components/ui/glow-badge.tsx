import { cn } from "@/lib/utils";

type GlowBadgeProps = {
  children: string;
  className?: string;
};

export function GlowBadge({ children, className }: GlowBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
