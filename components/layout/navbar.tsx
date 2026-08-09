"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectLogo } from "@/components/ui/project-logo";
import { navigationItems, navbarActions } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/50 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-8 px-4 py-4 md:px-6">
        <Link
          aria-label="Перейти на главную страницу"
          className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:opacity-80"
          href="/"
        >
          <ProjectLogo priority size="navbar" />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              className="rounded-full border border-transparent px-4 py-2.5 text-base font-medium text-zinc-300 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/5 hover:text-white"
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button href={navbarActions[0].href} variant="ghost">
            {navbarActions[0].label}
          </Button>
          <Button href={navbarActions[1].href}>{navbarActions[1].label}</Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Открыть меню"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md text-zinc-100 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-zinc-800/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-zinc-950/40 backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden",
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-shell flex-col gap-4 px-4 py-6 md:px-6">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              className="rounded-2xl border border-white/10 bg-zinc-900/35 backdrop-blur-md px-4 py-3.5 text-base font-medium text-zinc-200 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-orange-500/20 hover:bg-orange-500/5 hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              href={item.href}
              onClick={() => setIsOpen(false)}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className="grid gap-4 pt-3 sm:grid-cols-2">
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
