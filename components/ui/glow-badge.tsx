import { cn } from "@/lib/utils";

type GlowBadgeProps = {
  children: string;
  className?: string;
};

export function GlowBadge({ children, className }: GlowBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-orange-500/20 bg-orange-500/12 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
