"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border-orange-500 bg-orange-500 px-6 py-3 text-orange-50 shadow-glow hover:border-orange-600 hover:bg-orange-600",
        ghost:
          "border-zinc-800 bg-zinc-900 px-5 py-3 text-zinc-100 hover:border-zinc-700 hover:bg-zinc-800/80",
        outline:
          "border-orange-500/30 bg-transparent px-5 py-3 text-orange-100 hover:border-orange-500 hover:bg-orange-500/10",
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
  const { className, variant, size, children } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
