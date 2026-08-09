import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  glow?: boolean;
};

export function Card({ className, glow = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/5 bg-zinc-900/40 backdrop-blur-md shadow-panel shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 ease-out",
        glow && "border-orange-500/20",
        className,
      )}
      {...props}
    />
  );
}
