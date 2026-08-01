"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigationItems, navbarActions } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-4 py-4 md:px-6">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/15 font-display text-lg text-orange-200 shadow-glow">
            MG
          </span>
          <div className="space-y-1">
            <p className="font-display text-base uppercase tracking-[0.28em] text-white">
              MyGame
            </p>
            <p className="text-xs text-zinc-400">Игровой портал нового поколения</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              className="rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={navbarActions[0].href} variant="ghost">
            {navbarActions[0].label}
          </Button>
          <Button href={navbarActions[1].href}>{navbarActions[1].label}</Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Открыть меню"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/80 text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/5 transition-all duration-300 lg:hidden",
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-shell flex-col gap-3 px-4 py-4 md:px-6">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-zinc-200 transition hover:border-orange-500/30 hover:text-white"
              href={item.href}
              onClick={() => setIsOpen(false)}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <Button href={navbarActions[0].href} variant="ghost">
              {navbarActions[0].label}
            </Button>
            <Button href={navbarActions[1].href}>{navbarActions[1].label}</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
