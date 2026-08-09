"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border text-sm font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-60 will-change-transform",
  {
    variants: {
      variant: {
        primary:
          "border-orange-500/40 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-orange-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(249,115,22,0.22),0_0_24px_-6px_rgba(249,115,22,0.55)] hover:scale-[1.04] hover:-translate-y-0.5 hover:border-orange-400 hover:from-orange-400 hover:to-orange-500 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_0_0_1px_rgba(249,115,22,0.3),0_0_40px_-8px_rgba(249,115,22,0.7)] active:scale-[0.98] active:translate-y-0 active:border-orange-600 active:from-orange-600 active:to-orange-700 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-2px_0_rgba(0,0,0,0.35),0_0_0_1px_rgba(249,115,22,0.2),0_0_20px_-4px_rgba(249,115,22,0.45)] active:duration-150",
        ghost:
          "border-white/5 bg-zinc-900/40 backdrop-blur-md px-5 py-3 text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:-translate-y-0.5 hover:scale-[1.02] hover:border-white/10 hover:bg-zinc-800/60 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_20px_-8px_rgba(255,255,255,0.15)] active:translate-y-0 active:scale-[0.985] active:bg-zinc-800/70 active:duration-150",
        outline:
          "border-orange-500/20 bg-transparent px-5 py-3 text-orange-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:scale-[1.02] hover:border-orange-500/40 hover:bg-orange-500/8 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_-8px_rgba(249,115,22,0.3)] active:translate-y-0 active:scale-[0.985] active:bg-orange-500/12 active:duration-150",
      },
      size: {
        default: "min-h-11",
        lg: "min-h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type BaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { className, variant, size, children, loading = false } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link className={classes} href={href} {...linkProps}>
        {loading ? null : children}
      </Link>
    );
  }

  const { type = "button", disabled, "aria-busy": ariaBusy, "aria-live": ariaLive, ...buttonProps } =
    props as ButtonAsButton;

  return (
    <button
      aria-busy={ariaBusy ?? (loading || undefined)}
      aria-live={ariaLive ?? (loading ? "polite" : undefined)}
      className={classes}
      disabled={disabled || loading}
      type={type}
      {...buttonProps}
    >
      {loading ? (
        <>
          <span
            aria-hidden="true"
            className="shrink-0 h-4 w-4 animate-spin rounded-full border-[2px] border-orange-100/40 border-t-orange-100"
          />
          <span className="truncate">{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
