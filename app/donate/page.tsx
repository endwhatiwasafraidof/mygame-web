import { BadgeHelp, Gift } from "lucide-react";

import { DonateForm } from "@/components/sections/donate-form";
import { Card } from "@/components/ui/card";
import { GlowBadge } from "@/components/ui/glow-badge";

export default function DonatePage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-shell px-4 md:px-6">
          <Card className="overflow-hidden p-8 md:p-10" glow>
            <div className="grid gap-8 xl:grid-cols-[1fr_0.72fr]">
              <div className="space-y-6">
                <GlowBadge>Поддержка проекта</GlowBadge>
                <div className="space-y-4">
                  <h1 className="font-display text-4xl uppercase leading-none tracking-[0.08em] text-white md:text-5xl">
                    Пополнение счета для Stories и Legacy
                  </h1>
                  <p className="max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
                    Страница оформлена как быстрый черновик доната: игрок выбирает сервер,
                    указывает никнейм, сумму и видит возможный бонус еще до перехода к оплате.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <Gift className="mt-1 h-5 w-5 text-orange-200" />
                    <div>
                      <p className="text-sm font-semibold text-white">Бонусные уровни</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">
                        Чем выше сумма, тем заметнее процентный бонус к пополнению.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <BadgeHelp className="mt-1 h-5 w-5 text-orange-200" />
                    <div>
                      <p className="text-sm font-semibold text-white">Подсказка игроку</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">
                        На следующем этапе сюда можно добавить FAQ по платежам и статус операции.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <DonateForm />
    </>
  );
}
