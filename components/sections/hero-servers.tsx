"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Signal } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GlowBadge } from "@/components/ui/glow-badge";
import { serverCards } from "@/lib/constants/mock-data";
import { cn } from "@/lib/utils";

const HERO_SLIDESHOW_IMAGES = [
  "/image/1.png",
  "/image/2.png",
  "/image/3.png",
  "/image/4.png",
];

const HERO_SLIDE_INTERVAL_MS = 9000;
const HERO_CROSSFADE_MS = 2800;

export function HeroServers() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDESHOW_IMAGES.length);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

return (
    <section className="relative pb-32 pt-16 md:pb-48 md:pt-24 -mb-24 md:-mb-36">
      <div className="fixed inset-0 -z-40 pointer-events-none bg-hero-radial" />
      
      <div className="fixed inset-0 -z-30 pointer-events-none">
        {HERO_SLIDESHOW_IMAGES.map((imageSrc, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={imageSrc}
              aria-hidden="true"
              style={{ transitionDuration: `${HERO_CROSSFADE_MS}ms` }}
              className={cn(
                "absolute inset-0 transition-opacity ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              <img
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                src={imageSrc}
              />
            </div>
          );
        })}
      </div>
      
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-zinc-950/40 via-zinc-950/70 to-zinc-950/90 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:42px_42px] opacity-30 pointer-events-none" />
      <div className="relative z-20 mx-auto grid max-w-shell gap-6 md:gap-8 px-4 md:px-6 xl:grid-cols-[1.2fr_0.8fr]">
        {serverCards.map((server, index) => (
          <motion.div
            key={server.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.14 }}
          >
            <Card
              className={cn(
                "relative h-full overflow-hidden p-8 md:p-10 group bg-zinc-950/40 backdrop-blur-md border border-white/10 transition-all duration-500 ease-out",
                index === 0
                  ? "min-h-[540px] hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
                  : "min-h-[540px] hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]",
              )}
            >
              <div className="relative flex h-full flex-col justify-between gap-12 md:gap-14">
                <div className="space-y-6">
                  <GlowBadge>{server.status}</GlowBadge>
                  <div className="space-y-5">
                    <h1 className="max-w-xl font-display text-4xl uppercase leading-none tracking-wide text-white drop-shadow-sm md:text-6xl">
                      {server.title}
                    </h1>
                    <p className="max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
                      {server.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-wrap gap-4">
                    <div className="min-w-[180px] rounded-[24px] bg-black/20 border border-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
                        Онлайн сейчас
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/12 text-orange-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                          <Signal className="h-5 w-5" />
                        </span>
                        <p className="font-display text-3xl text-white drop-shadow-sm">
                          {server.online.toLocaleString("ru-RU")}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-[24px] bg-black/20 border border-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
                        Формат
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-300">
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
