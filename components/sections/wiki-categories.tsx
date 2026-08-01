import Link from "next/link";
import { ArrowUpRight, BookOpenText, Compass, Sparkles } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { wikiCategories } from "@/lib/constants/mock-data";
import { cn } from "@/lib/utils";

type WikiCategoriesProps = {
  selectedSlug?: string;
};

export function WikiCategories({ selectedSlug }: WikiCategoriesProps) {
  const activeCategory =
    wikiCategories.find((item) => item.slug === selectedSlug) ?? wikiCategories[0];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-shell space-y-8 px-4 md:px-6">
        <SectionHeading
          description="Каталог построен как стартовая точка для полноценной Wiki: пользователь сразу понимает, куда идти за правилами, механиками и подсказками по развитию персонажа."
          eyebrow="База знаний"
          title="Разделы Wiki"
        />

        <div className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <Card className="p-8" glow>
            <div className="space-y-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-200">
                <BookOpenText className="h-7 w-7" />
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-3xl uppercase tracking-[0.08em] text-white">
                  Wiki как центр входа в правила и игровые системы
                </h3>
                <p className="text-sm leading-7 text-zinc-300">
                  На следующем этапе сюда можно добавить поиск, вложенные статьи,
                  хлебные крошки и отдельные материалы по каждому разделу.
                </p>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
                  <div className="flex items-center gap-3">
                    <Compass className="h-5 w-5 text-orange-200" />
                    <div>
                      <p className="text-sm font-semibold text-white">Быстрый старт</p>
                      <p className="text-xs text-zinc-400">
                        Маршрут для нового игрока от входа до первой работы.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-orange-200" />
                    <div>
                      <p className="text-sm font-semibold text-white">FAQ и команды</p>
                      <p className="text-xs text-zinc-400">
                        Быстрые ответы по механикам и полезным действиям в игре.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-orange-200">
                  Сейчас выбран раздел
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {activeCategory.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-orange-50/80">
                  {activeCategory.description}
                </p>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {wikiCategories.map((item) => (
              <Link href={`/wiki?category=${item.slug}`} key={item.slug}>
                <Card
                  className={cn(
                    "group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-orange-500/5",
                    item.slug === activeCategory.slug &&
                      "border-orange-500/30 bg-orange-500/10 shadow-glow",
                  )}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                        Категория
                      </p>
                      <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:text-orange-200" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm leading-7 text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
