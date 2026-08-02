import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { platformCards } from "@/lib/constants/mock-data";

const platformLogos = [
  {
    src: "/platforms/windows-logo-placeholder.svg",
    alt: "Логотип Windows",
  },
  {
    src: "/platforms/android-logo-placeholder.svg",
    alt: "Логотип Android",
  },
];

export function StartPlaying() {
  return (
    <section className="py-16 md:py-20" id="start-playing">
      <div className="mx-auto max-w-shell space-y-8 px-4 md:px-6">
        <SectionHeading
          description="Выберите удобную платформу и скачайте лаунчер для быстрого входа в проект. Оформление подчеркивает два сценария: комфортную игру дома и доступ с мобильного устройства."
          eyebrow="Старт без лишних шагов"
          title="Начать играть"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {platformCards.map((platform, index) => {
            const logo = platformLogos[index];

            return (
              <Card key={platform.title} className="p-8">
                <div className="flex h-full flex-col justify-between gap-10">
                  <div className="space-y-5">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900 p-3">
                      <Image
                        alt={logo.alt}
                        className="h-full w-full object-contain"
                        height={40}
                        src={logo.src}
                        width={40}
                      />
                    </span>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-white">
                        {platform.title}
                      </h3>
                      <p className="max-w-md text-sm leading-7 text-zinc-300">
                        {platform.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-white/5 bg-zinc-900 p-4">
                    <p className="text-sm text-zinc-400">
                      Лаунчер обновляется автоматически и подготавливает клиент к запуску.
                    </p>
                    <Button href="/#news" variant={index === 0 ? "primary" : "outline"}>
                      {platform.buttonLabel}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
