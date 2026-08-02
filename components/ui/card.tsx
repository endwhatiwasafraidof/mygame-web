import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  glow?: boolean;
};

export function Card({ className, glow = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-zinc-800 bg-zinc-900 shadow-panel backdrop-blur",
        glow && "border-orange-500/30",
        className,
      )}
      {...props}
    />
  );
}
