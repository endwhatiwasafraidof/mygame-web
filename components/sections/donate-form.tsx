"use client";

import { useMemo, useState } from "react";
import { CreditCard, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { bonusTiers, donateMethods, serverCards } from "@/lib/constants/mock-data";

export function DonateForm() {
  const [server, setServer] = useState(serverCards[0].slug);
  const [nickname, setNickname] = useState("");
  const [amount, setAmount] = useState("1500");
  const [method, setMethod] = useState(donateMethods[0].label);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeBonus = useMemo(() => {
    const value = Number(amount);

    if (value >= 3000) {
      return bonusTiers[2];
    }

    if (value >= 1500) {
      return bonusTiers[1];
    }

    return bonusTiers[0];
  }, [amount]);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-shell gap-6 px-4 md:px-6 xl:grid-cols-[1fr_0.7fr]">
        <Card className="p-8 md:p-10" glow>
          <div className="space-y-8">
            <SectionHeading
              description="Интерфейс построен так, чтобы игрок мог быстро выбрать сервер, указать никнейм и увидеть, какой бонус он получит при пополнении."
              eyebrow="Пополнение счета"
              title="Донат без перегруза"
            />

            <form
              className="grid gap-5 md:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                setIsSubmitted(true);
              }}
            >
              <label className="space-y-3">
                <span className="text-sm font-medium text-zinc-200">Сервер</span>
                <select
                  className="h-12 w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition focus:border-orange-500/50"
                  onChange={(event) => {
                    setServer(event.target.value as "stories" | "legacy");
                    setIsSubmitted(false);
                  }}
                  value={server}
                >
                  {serverCards.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-3">
                <span className="text-sm font-medium text-zinc-200">Никнейм</span>
                <input
                  className="h-12 w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500/50"
                  onChange={(event) => {
                    setNickname(event.target.value);
                    setIsSubmitted(false);
                  }}
                  placeholder="Например, MyGame_Player"
                  value={nickname}
                />
              </label>

              <label className="space-y-3">
                <span className="text-sm font-medium text-zinc-200">Сумма пополнения</span>
                <input
                  className="h-12 w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500/50"
                  min="100"
                  onChange={(event) => {
                    setAmount(event.target.value);
                    setIsSubmitted(false);
                  }}
                  placeholder="1500"
                  type="number"
                  value={amount}
                />
              </label>

              <label className="space-y-3">
                <span className="text-sm font-medium text-zinc-200">Способ оплаты</span>
                <select
                  className="h-12 w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition focus:border-orange-500/50"
                  onChange={(event) => {
                    setMethod(event.target.value);
                    setIsSubmitted(false);
                  }}
                  value={method}
                >
                  {donateMethods.map((item) => (
                    <option key={item.label} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="md:col-span-2">
                <div className="flex flex-wrap items-center gap-4 rounded-[24px] border border-white/5 bg-white/[0.03] p-4">
                  <Button size="lg" type="submit">
                    Перейти к оплате
                  </Button>
                  <p className="text-sm leading-6 text-zinc-400">
                    Кнопка уже завершает сценарий формы и подготавливает заявку для
                    будущего подключения платежного шлюза.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Card>

        <div className="grid gap-6">
          <Card className="p-6">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-200">
                  <CreditCard className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-zinc-400">Текущая заявка</p>
                  <p className="text-xl font-semibold text-white">
                    {nickname || "Ваш никнейм"} · {server === "stories" ? "Stories" : "Legacy"}
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] border border-orange-500/20 bg-orange-500/10 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-orange-200">
                  Активный бонус
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">{activeBonus.title}</p>
                <p className="mt-2 text-sm leading-7 text-orange-50/80">
                  {activeBonus.description}
                </p>
              </div>

              <div className="space-y-3">
                {donateMethods.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4"
                  >
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>

              {isSubmitted ? (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                  <p className="text-sm font-semibold text-emerald-200">
                    Заявка подготовлена
                  </p>
                  <p className="mt-1 text-sm leading-6 text-emerald-50/80">
                    Никнейм {nickname || "не указан"} будет пополнен на {amount || "0"} ₽
                    через {method}. Здесь можно подключить реальный платежный обработчик.
                  </p>
                </div>
              ) : null}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-200">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-white">Безопасность и поддержка</p>
                <p className="text-sm leading-7 text-zinc-400">
                  После интеграции платежной системы сюда можно добавить реальный расчет,
                  автопроверку никнейма и подсказки по бонусным акциям.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
