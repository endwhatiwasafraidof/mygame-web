"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Signal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GlowBadge } from "@/components/ui/glow-badge";
import { serverCards } from "@/lib/constants/mock-data";
import { cn } from "@/lib/utils";

export function HeroServers() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="absolute inset-0 -z-20 bg-grid-fade bg-[size:42px_42px] opacity-40" />

      <div className="mx-auto grid max-w-shell gap-6 px-4 md:px-6 xl:grid-cols-[1.2fr_0.8fr]">
        {serverCards.map((server, index) => (
          <motion.div
            key={server.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.14 }}
          >
            <Card
              className={cn(
                "relative h-full overflow-hidden p-8 md:p-10",
                index === 0
                  ? "min-h-[540px] border-orange-500/30 bg-gradient-to-br from-orange-500/12 via-zinc-900 to-zinc-950"
                  : "min-h-[540px] bg-gradient-to-br from-zinc-800/70 via-zinc-900 to-zinc-950",
              )}
              glow={index === 0}
            >
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
              <div
                className={cn(
                  "absolute -right-16 top-16 h-56 w-56 rounded-full blur-3xl",
                  index === 0 ? "bg-orange-500/20" : "bg-cyan-400/10",
                )}
              />

              <div className="relative flex h-full flex-col justify-between gap-12">
                <div className="space-y-6">
                  <GlowBadge>{server.status}</GlowBadge>
                  <div className="space-y-5">
                    <h1 className="max-w-xl font-display text-4xl uppercase leading-none tracking-[0.08em] text-white md:text-6xl">
                      {server.title}
                    </h1>
                    <p className="max-w-lg text-sm leading-7 text-zinc-300 md:text-base">
                      {server.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-wrap gap-4">
                    <div className="min-w-[180px] rounded-[24px] border border-white/10 bg-black/20 p-5 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
                        Онлайн сейчас
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-orange-200">
                          <Signal className="h-5 w-5" />
                        </span>
                        <p className="font-display text-3xl text-white">
                          {server.online.toLocaleString("ru-RU")}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
                        Формат
                      </p>
                      <p className="mt-3 text-sm leading-6 text-zinc-200">
                        {index === 0
                          ? "Высокий темп, современный интерфейс и активное комьюнити."
                          : "Спокойный ритм, ностальгия и классическое ощущение сервера."}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button href="#start-playing" size="lg">
                      {server.ctaLabel}
                    </Button>
                    <Button href="/wiki" size="lg" variant="outline">
                      Подробнее о сервере
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
