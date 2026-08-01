"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialLinks } from "@/lib/constants/navigation";

export function SocialHub() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-shell space-y-8 px-4 md:px-6">
        <SectionHeading
          description="Соцсети проекта собраны в один центр: чат комьюнити, новости, медиа и видеоконтент. Каждый канал получает свой заметный hover-эффект со свечением."
          eyebrow="Комьюнити и видео"
          title="Оставайтесь на связи с сервером"
        />

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden p-8 md:p-10" glow>
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.35em] text-orange-300">
                  Видео-витрина проекта
                </p>
                <div className="space-y-4">
                  <h3 className="font-display text-3xl uppercase leading-none tracking-[0.08em] text-white md:text-4xl">
                    Один экран для атмосферы, анонсов и игровых историй
                  </h3>
                  <p className="max-w-xl text-sm leading-7 text-zinc-300 md:text-base">
                    Используйте этот блок как точку входа в медиаконтент:
                    трейлеры, клипы комьюнити, запись ивентов и обзоры обновлений.
                  </p>
                </div>
              </div>

              <div className="relative flex min-h-[260px] items-end overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-orange-500/15 via-zinc-900 to-zinc-950 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
                <div className="relative flex w-full items-end justify-between gap-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
                      Рекомендуемый плейлист
                    </p>
                    <p className="max-w-sm text-xl font-semibold text-white">
                      Турниры, трейлеры, лучшие моменты и свежие обзоры проекта
                    </p>
                  </div>
                  <Link
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/20 text-orange-100 shadow-glow transition hover:scale-105 hover:bg-orange-500/30"
                    href="https://www.youtube.com/@mygame-stories"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <PlayCircle className="h-8 w-8" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link href={item.href} rel="noreferrer" target="_blank">
                    <Card className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-orange-500/5 hover:shadow-glow">
                      <div className="space-y-6">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-200 transition group-hover:scale-105">
                          <Icon className="h-7 w-7" />
                        </span>
                        <div className="space-y-2">
                          <h3 className="font-display text-xl uppercase tracking-[0.08em] text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-7 text-zinc-400">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
