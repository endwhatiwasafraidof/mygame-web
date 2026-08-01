import { Compass, SearchCheck } from "lucide-react";

import { WikiCategories } from "@/components/sections/wiki-categories";
import { Card } from "@/components/ui/card";
import { GlowBadge } from "@/components/ui/glow-badge";

type WikiPageProps = {
  searchParams?: {
    category?: string;
  };
};

export default function WikiPage({ searchParams }: WikiPageProps) {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-shell px-4 md:px-6">
          <Card className="overflow-hidden p-8 md:p-10">
            <div className="grid gap-8 xl:grid-cols-[1fr_0.7fr]">
              <div className="space-y-6">
                <GlowBadge>Внутренняя база знаний</GlowBadge>
                <div className="space-y-4">
                  <h1 className="font-display text-4xl uppercase leading-none tracking-[0.08em] text-white md:text-5xl">
                    Wiki для быстрого входа в механики проекта
                  </h1>
                  <p className="max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
                    Эта страница задает основу для полноценной базы знаний: можно начинать
                    с категорий, а затем углубляться в конкретные игровые статьи и инструкции.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <Compass className="mt-1 h-5 w-5 text-orange-200" />
                    <div>
                      <p className="text-sm font-semibold text-white">Путь новичка</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">
                        Сценарий от первого входа до понимания экономики, работ и фракций.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <SearchCheck className="mt-1 h-5 w-5 text-orange-200" />
                    <div>
                      <p className="text-sm font-semibold text-white">Следующий этап</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">
                        По мере развития сюда легко добавить поиск, фильтры и вложенные статьи.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <WikiCategories selectedSlug={searchParams?.category} />
    </>
  );
}
