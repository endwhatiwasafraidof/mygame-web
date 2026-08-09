"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ArrowUpDown,
  BookOpenText,
  Compass,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { wikiCategories } from "@/lib/constants/mock-data";
import { cn } from "@/lib/utils";

type WikiCategoriesProps = {
  selectedSlug?: string;
};

type SortOption = "default" | "az" | "za";

type TagFilterId = "beginner" | "jobs" | "factions" | "economy" | "crime";

const TAG_FILTERS: ReadonlyArray<{ id: TagFilterId; label: string }> = [
  { id: "beginner", label: "Новичкам" },
  { id: "jobs", label: "Работы" },
  { id: "factions", label: "Фракции" },
  { id: "economy", label: "Экономика" },
  { id: "crime", label: "Криминал" },
];

const TAG_TO_SLUGS: Readonly<Record<TagFilterId, readonly string[]>> = {
  beginner: ["newbie", "start", "faq"],
  jobs: ["jobs"],
  factions: ["orgs", "government"],
  economy: ["jobs", "estate", "transport"],
  crime: ["crime"],
};

export function WikiCategories({ selectedSlug }: WikiCategoriesProps) {
  const activeCategory =
    wikiCategories.find((item) => item.slug === selectedSlug) ?? wikiCategories[0];

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("default");
  const [activeFilters, setActiveFilters] = useState<TagFilterId[]>([]);

  const toggleFilter = (tag: TagFilterId) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const visibleCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = wikiCategories.filter((item) => {
      if (q) {
        const haystack = `${item.title} ${item.description} ${item.slug}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (activeFilters.length > 0) {
        const allowed = new Set(
          activeFilters.flatMap((id) => TAG_TO_SLUGS[id] as readonly string[]),
        );
        if (!allowed.has(item.slug)) return false;
      }
      return true;
    });
    if (sort === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title, "ru-RU"));
    } else if (sort === "za") {
      list = [...list].sort((a, b) => b.title.localeCompare(a.title, "ru-RU"));
    }
    return list;
  }, [query, sort, activeFilters]);

  const hasAnyFilter = Boolean(query.trim()) || activeFilters.length > 0 || sort !== "default";

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-shell space-y-8 md:space-y-10 px-4 md:px-6">
        <SectionHeading
          description="Каталог построен как стартовая точка для полноценной Wiki: пользователь сразу понимает, куда идти за правилами, механиками и подсказками по развитию персонажа."
          eyebrow="База знаний"
          title="Разделы Wiki"
        />

        <Card className="p-5 md:p-6 border border-white/10 bg-zinc-950/45 backdrop-blur-md">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative w-full lg:max-w-xl">
              <span className="sr-only">Поиск по Wiki</span>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Найти категорию, механику или команду…"
                aria-label="Поиск по статьям и категориям Wiki"
                className="h-12 w-full rounded-2xl border border-white/10 bg-zinc-900/50 pl-11 pr-12 text-sm text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 ease-out placeholder:text-zinc-500 focus:border-orange-500/40 focus:bg-zinc-900/70 [&::-webkit-search-cancel-button]:hidden"
/>
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Очистить поиск"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 ease-out hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </label>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-1">
                <span className="inline-flex items-center gap-1.5 pl-3 pr-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  <ArrowUpDown className="h-3.5 w-3.5" />
                  Сортировка
                </span>
                {([
                  ["default", "По умолчанию"],
                  ["az", "А → Я"],
                  ["za", "Я → А"],
                ] as const).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setSort(value)}
                    aria-pressed={sort === value}
                    className={cn(
                      "rounded-xl px-3 py-1.5 text-xs font-medium transition-all duration-300 ease-out",
                      sort === value
                        ? "bg-orange-500/15 text-orange-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                        : "text-zinc-400 hover:text-white hover:bg-white/5",
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {hasAnyFilter ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSort("default");
                    setActiveFilters([]);
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm px-3.5 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 ease-out hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-200"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  Сбросить фильтры
                </button>
              ) : null}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 pr-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Темы
            </span>
            {TAG_FILTERS.map((tag) => {
              const isActive = activeFilters.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleFilter(tag.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ease-out",
                    isActive
                      ? "border-orange-500/40 bg-orange-500/12 text-orange-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      : "border-white/10 bg-zinc-900/40 text-zinc-300 hover:border-white/20 hover:bg-zinc-900/60 hover:text-white",
                  )}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>

          {hasAnyFilter ? (
            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-white/5 bg-black/20 backdrop-blur-sm px-4 py-3">
              <p className="text-xs leading-relaxed text-zinc-400">
                Найдено категорий:{" "}
                <span className="text-sm font-semibold text-white drop-shadow-sm">
                  {visibleCategories.length}
                </span>{" "}
                из {wikiCategories.length}
              </p>
              {visibleCategories.length === 0 ? (
                <p className="text-xs leading-relaxed text-orange-200">
                  По вашему запросу ничего не найдено — попробуйте изменить текст или отключить фильтры.
                </p>
              ) : null}
            </div>
          ) : null}
        </Card>

        <div className="grid gap-6 md:gap-8 xl:grid-cols-[0.78fr_1.22fr]">
          <Card className="p-8 group hover:-translate-y-1" glow>
            <div className="space-y-6 md:space-y-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/12 text-orange-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 ease-out group-hover:scale-105">
                <BookOpenText className="h-7 w-7" />
              </div>
              <div className="space-y-4 md:space-y-5">
                <h3 className="font-display text-3xl uppercase tracking-wide text-white drop-shadow-sm">
                  Wiki как центр входа в правила и игровые системы
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Используйте поиск по категориям, тематическим фильтрам и сортировке,
                  чтобы быстро перейти к нужным правилам, механикам и подсказкам по развитию персонажа.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/10 hover:bg-zinc-900/60">
                  <div className="flex items-center gap-3.5">
                    <Compass className="h-5 w-5 text-orange-300" />
                    <div>
                      <p className="text-sm font-semibold text-white drop-shadow-sm">Быстрый старт</p>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Маршрут для нового игрока от входа до первой работы.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/10 hover:bg-zinc-900/60">
                  <div className="flex items-center gap-3.5">
                    <Sparkles className="h-5 w-5 text-orange-300" />
                    <div>
                      <p className="text-sm font-semibold text-white drop-shadow-sm">FAQ и команды</p>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Быстрые ответы по механикам и полезным действиям в игре.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 backdrop-blur-sm p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <p className="text-xs uppercase tracking-[0.24em] text-orange-300/90">
                  Сейчас выбран раздел
                </p>
                <p className="mt-2 text-lg font-semibold text-white drop-shadow-sm">
                  {activeCategory.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-orange-50/80">
                  {activeCategory.description}
                </p>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleCategories.map((item) => (
              <Link href={`/wiki?category=${item.slug}`} key={item.slug}>
                <Card
                  className={cn(
                    "group h-full p-6 hover:-translate-y-1.5 hover:border-orange-500/20 hover:bg-orange-500/6",
                    item.slug === activeCategory.slug &&
                      "border-orange-500/25 bg-orange-500/12",
                  )}
                >
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.28em] text-orange-300/90">
                        Категория
                      </p>
                      <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-300" />
                    </div>
                    <div className="space-y-2.5">
                      <h3 className="text-lg font-semibold text-white drop-shadow-sm">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
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
