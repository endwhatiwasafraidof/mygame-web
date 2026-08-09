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
    <section className="relative overflow-hidden py-16 md:py-20" id="start-playing">
      <div className="relative mx-auto max-w-shell space-y-8 md:space-y-10 px-4 md:px-6 z-20">
        <SectionHeading
          description="Выберите удобную платформу и скачайте лаунчер для быстрого входа в проект. Оформление подчеркивает два сценария: комфортную игру дома и доступ с мобильного устройства."
          eyebrow="Старт без лишних шагов"
          title="Начать играть"
        />

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {platformCards.map((platform, index) => {
            const logo = platformLogos[index];

            return (
              <Card key={platform.title} className="relative p-8 group hover:-translate-y-1 hover:border-white/10">
                <div className="flex h-full flex-col justify-between gap-10 md:gap-12">
                  <div className="space-y-5 md:space-y-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-md p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-orange-500/20">
                      <Image
                        alt={logo.alt}
                        className="h-full w-full object-contain"
                        height={40}
                        src={logo.src}
                        width={40}
                      />
                    </span>
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="font-display text-2xl uppercase tracking-tight text-white drop-shadow-sm">
                        {platform.title}
                      </h3>
                      <p className="max-w-md text-sm leading-relaxed text-zinc-400">
                        {platform.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-white/5 bg-zinc-900/50 backdrop-blur-md p-4 md:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <p className="text-sm leading-relaxed text-zinc-400">
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

      <div
  aria-hidden="true"
  // bottom-[120px] для высоты и -right-[50px] для сдвига вправо
  className="pointer-events-none absolute -right-[30px] xl:-right-[20px] bottom-[40px] z-40 hidden lg:block animate-float-levitation"
>
      <div className="drop-shadow-[0_0_45px_rgba(249,115,22,0.45)]">
        <div className="mask-bottom-fade-character">
            <Image
              src="/image/girl.png"
              alt=""
              width={500}
              height={600}
              priority={false}
              className="h-[500px] w-auto object-contain"
              />
        </div>
      </div>
    </div>
  </section>
  );
}
