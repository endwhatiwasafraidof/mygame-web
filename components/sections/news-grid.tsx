"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GlowBadge } from "@/components/ui/glow-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { newsItems } from "@/lib/constants/mock-data";

export function NewsGrid() {
  return (
    <section className="py-16 md:py-20" id="news">
      <div className="mx-auto max-w-shell space-y-8 px-4 md:px-6">
        <SectionHeading
          description="Главные обновления, ивенты и изменения по обоим серверам собраны в одной сетке, чтобы игрок быстро видел свежую повестку проекта."
          eyebrow="Новости проекта"
          title="Что нового в MyGame"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="group h-full overflow-hidden">
                <div className="flex h-full flex-col">
                  <div className="relative border-b border-white/5 px-6 py-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="relative flex min-h-[180px] flex-col justify-between rounded-[24px] border border-white/5 bg-gradient-to-br from-zinc-800 to-zinc-900 p-5">
                      <GlowBadge>{item.category}</GlowBadge>
                      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                        {item.imageLabel}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-5 px-6 py-6">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        {item.publishedAt}
                      </p>
                      <h3 className="text-lg font-semibold leading-7 text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-zinc-400">{item.excerpt}</p>
                    </div>

                    <Button className="mt-auto w-full" href="/wiki" variant="ghost">
                      Читать полностью
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
