"use client";

import { useMemo, useState } from "react";
import {
  AlertCircle,
  Check,
  CreditCard,
  Landmark,
  ShieldCheck,
  Signal,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  PaymentModal,
  type PaymentMethodId,
  type PaymentMethodOption,
} from "@/components/ui/payment-modal";
import { bonusTiers, donateMethods, serverCards } from "@/lib/constants/mock-data";
import { cn } from "@/lib/utils";

type ValidationErrors = {
  nickname?: string;
  amount?: string;
};

const METHOD_IDS: Record<string, PaymentMethodId> = {
  "банковская карта": "card",
  сбп: "sbp",
  "юmoney": "umoney",
  umoney: "umoney",
  ym: "umoney",
};

const resolveMethodId = (label: string): PaymentMethodId => {
  const key = label.trim().toLowerCase();
  return METHOD_IDS[key] ?? "card";
};

export function DonateForm() {
  const [server, setServer] = useState(serverCards[0].slug);
  const [nickname, setNickname] = useState("");
  const [amount, setAmount] = useState("1500");
  const [method, setMethod] = useState(donateMethods[0].label);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

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

  const paymentMethods: PaymentMethodOption[] = useMemo(
    () =>
      donateMethods.map((m) => {
        const id = resolveMethodId(m.label);
        return {
          id,
          label: m.label,
          description: m.description,
          accent: id === "card" ? "orange" : "white",
        };
      }),
    [],
  );

  const selectedMethodId: PaymentMethodId = useMemo(
    () => resolveMethodId(method),
    [method],
  );

  const validate = (): ValidationErrors => {
    const next: ValidationErrors = {};
    if (!nickname.trim()) next.nickname = "необходимо ввести никнейм";
    const num = Number(amount);
    if (!amount.trim() || Number.isNaN(num) || num < 100) {
      next.amount = "необходимо указать сумму пополнения от 100 ₽";
    }
    return next;
  };

  const openPayment = () => {
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    if (!reviewMode) {
      setReviewMode(true);
      return;
    }
    setPaymentOpen(true);
  };

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    window.setTimeout(() => {
      setIsProcessing(false);
      setPaymentOpen(false);
      setReviewMode(false);
      setIsSubmitted(true);
    }, 1400);
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-shell gap-6 md:gap-8 px-4 md:px-6 xl:grid-cols-[1fr_0.7fr]">
        <Card className="p-8 md:p-10 group hover:-translate-y-1" glow>
          <div className="space-y-8 md:space-y-10">
            <SectionHeading
              description="Интерфейс построен так, чтобы игрок мог быстро выбрать сервер, указать никнейм и увидеть, какой бонус он получит при пополнении."
              eyebrow="Пополнение счета"
              title="Донат без перегруза"
            />

            <form
              className="grid gap-5 md:gap-6 md:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                openPayment();
              }}
            >
              <div className="md:col-span-2 space-y-3">
                <span className="text-sm font-medium text-zinc-200 tracking-tight">Сервер</span>
                <div className="grid gap-4 md:grid-cols-2">
                  {serverCards.map((item, index) => {
                    const isActive = server === item.slug;
                    return (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => {
                          setServer(item.slug as "stories" | "legacy");
                          if (reviewMode) setReviewMode(false);
                          setIsSubmitted(false);
                        }}
                        className={cn(
                          "group relative text-left rounded-[24px] p-5 md:p-6 border bg-zinc-950/40 backdrop-blur-md transition-all duration-500 ease-out overflow-hidden",
                          isActive
                            ? index === 0
                              ? "border-orange-500/50 shadow-[0_0_30px_-5px_rgba(249,115,22,0.25)]"
                              : "border-white/30 shadow-[0_0_30px_-5px_rgba(255,255,255,0.08)]"
                            : index === 0
                              ? "border-white/10 hover:border-orange-500/30 hover:-translate-y-0.5 hover:bg-zinc-900/40"
                              : "border-white/10 hover:border-white/20 hover:-translate-y-0.5 hover:bg-zinc-900/40",
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            <span
                              className={cn(
                                "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                                index === 0
                                  ? "border-orange-500/25 bg-orange-500/12 text-orange-300"
                                  : "border-white/10 bg-white/8 text-zinc-300",
                              )}
                            >
                              <Signal className="h-5 w-5" />
                            </span>
                            <div className="space-y-1.5">
                              <p className="text-sm font-semibold text-white drop-shadow-sm tracking-tight">
                                {item.title}
                              </p>
                              <p className="text-xs leading-relaxed text-zinc-400">
                                Онлайн сейчас: {item.online.toLocaleString("ru-RU")} игроков
                              </p>
                            </div>
                          </div>
                          <span
                            className={cn(
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                              isActive
                                ? index === 0
                                  ? "border-orange-500/50 bg-orange-500/20 text-orange-200"
                                  : "border-white/30 bg-white/12 text-zinc-100"
                                : "border-white/10 bg-transparent text-transparent",
                            )}
                          >
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-zinc-200 tracking-tight">Никнейм</span>
                  {errors.nickname ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-400 leading-relaxed">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.nickname}
                    </span>
                  ) : null}
                </div>
                <input
                  maxLength={24}
                  aria-invalid={Boolean(errors.nickname) || undefined}
                  className={cn(
                    "h-12 w-full rounded-2xl border bg-zinc-900/40 backdrop-blur-md px-4 text-sm text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 ease-out placeholder:text-zinc-500",
                    errors.nickname
                      ? "border-red-500/50 focus:border-red-500/70 focus:bg-zinc-900/60 shadow-[0_0_20px_-8px_rgba(248,113,113,0.45)]"
                      : "border-white/5 focus:border-orange-500/40 focus:bg-zinc-900/60",
                  )}
                  onChange={(event) => {

                    // Можно дополнительно отсечь пробелы и русские буквы, если никнейм строго на английском:
                    // const val = event.target.value.replace(/[^a-zA-Z0-9_]/g, '');
                    // setNickname(val);
                    
                    setNickname(event.target.value);
                    if (errors.nickname) {
                      setErrors((prev) => {
                        const { nickname, ...rest } = prev;
                        return rest;
                      });
                    }
                    if (reviewMode) setReviewMode(false);
                    setIsSubmitted(false);
                  }}
                  placeholder="Например, MyGame_Player"
                  value={nickname}
                />
              </label>

              <label className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-zinc-200 tracking-tight">Сумма пополнения</span>
                  {errors.amount ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-400 leading-relaxed">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.amount}
                    </span>
                  ) : null}
                </div>
                <input
                  aria-invalid={Boolean(errors.amount) || undefined}
                  className={cn(
                    "h-12 w-full rounded-2xl border bg-zinc-900/40 backdrop-blur-md px-4 text-sm text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 ease-out placeholder:text-zinc-500",
                    errors.amount
                      ? "border-red-500/50 focus:border-red-500/70 focus:bg-zinc-900/60 shadow-[0_0_20px_-8px_rgba(248,113,113,0.45)]"
                      : "border-white/5 focus:border-orange-500/40 focus:bg-zinc-900/60",
                  )}
                  min="100"
                  onChange={(event) => {
                    setAmount(event.target.value);
                    if (errors.amount) {
                      setErrors((prev) => {
                        const { amount, ...rest } = prev;
                        return rest;
                      });
                    }
                    if (reviewMode) setReviewMode(false);
                    setIsSubmitted(false);
                  }}
                  placeholder="1500"
                  type="number"
                  value={amount}
                />
              </label>

              <label className="md:col-span-2 space-y-3">
                <span className="text-sm font-medium text-zinc-200 tracking-tight">Способ оплаты</span>
                <div className="grid gap-3 sm:grid-cols-3">
                  {donateMethods.map((item, index) => {
                    const id = resolveMethodId(item.label);
                    const Icon = id === "card" ? CreditCard : id === "sbp" ? Landmark : Wallet;
                    const isActive = method === item.label;
                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                          setMethod(item.label);
                          if (reviewMode) setReviewMode(false);
                          setIsSubmitted(false);
                        }}
                        className={cn(
                          "group relative text-left rounded-[22px] border bg-zinc-950/40 backdrop-blur-md p-4 transition-all duration-400 ease-out overflow-hidden",
                          isActive
                            ? id === "card"
                              ? "border-orange-500/40 bg-orange-500/8 shadow-[0_0_24px_-8px_rgba(249,115,22,0.3)]"
                              : "border-white/25 bg-white/8 shadow-[0_0_24px_-10px_rgba(255,255,255,0.08)]"
                            : "border-white/10 hover:-translate-y-0.5 hover:border-white/15 hover:bg-zinc-900/50",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300",
                              id === "card"
                                ? isActive
                                  ? "border-orange-500/40 bg-orange-500/18 text-orange-100 scale-105"
                                  : "border-orange-500/20 bg-orange-500/10 text-orange-300 group-hover:scale-105"
                                : isActive
                                  ? "border-white/25 bg-white/14 text-zinc-100 scale-105"
                                  : "border-white/10 bg-white/6 text-zinc-300 group-hover:scale-105",
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </span>
                          <div className="min-w-0 flex-1 space-y-0.5">
                            <p className="text-sm font-semibold text-white drop-shadow-sm truncate">
                              {item.label}
                            </p>
                            <p className="text-xs leading-relaxed text-zinc-400 truncate">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </label>

              <div className="md:col-span-2">
                <div
                  className={cn(
                    "flex flex-wrap items-center gap-4 rounded-[24px] border p-4 md:p-5 transition-all duration-400 ease-out shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
                    reviewMode
                      ? "border-orange-500/35 bg-orange-500/10 backdrop-blur-md"
                      : "border-white/5 bg-zinc-900/50 backdrop-blur-md",
                  )}
                  role="group"
                  aria-label="Действия по оформлению платежа"
                >
                  <Button
                    size="lg"
                    type="submit"
                    disabled={isProcessing}
                    loading={isProcessing}
                    aria-label={
                      reviewMode
                        ? isProcessing
                          ? "Идёт обработка платежа, пожалуйста подождите"
                          : "Подтвердить и перейти к оплате"
                        : isProcessing
                          ? "Идёт обработка платежа, пожалуйста подождите"
                          : "Перейти к оплате и перейти к подтверждению заявки"
                    }
                    aria-describedby="donate-cta-help"
                    className={cn(
                      "whitespace-nowrap rounded-2xl px-8 py-3.5",
                      "text-sm font-bold uppercase tracking-[0.2em] text-white drop-shadow-sm",
                      "border border-orange-400/80 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600",
                      "shadow-[inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.18),0_0_0_1px_rgba(249,115,22,0.22),0_0_28px_-6px_rgba(249,115,22,0.55)]",
                      "transition-all duration-300 ease-in-out",
                      "hover:scale-[1.04] hover:-translate-y-0.5 hover:border-orange-300 hover:from-orange-400 hover:via-orange-400 hover:to-orange-500 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.26),inset_0_-2px_0_rgba(0,0,0,0.15),0_0_0_1px_rgba(249,115,22,0.3),0_0_40px_-8px_rgba(249,115,22,0.7)]",
                      "active:scale-[0.98] active:translate-y-0 active:border-orange-600 active:from-orange-600 active:via-orange-600 active:to-orange-700 active:shadow-[inset_0_2px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.35),0_0_0_1px_rgba(249,115,22,0.2),0_0_20px_-4px_rgba(249,115,22,0.45)] active:duration-150",
                    )}
                  >
                    {reviewMode ? "Подтвердить и перейти к оплате" : "Перейти к оплате"}
                  </Button>
                  <p
                    id="donate-cta-help"
                    className={cn(
                      "text-sm leading-relaxed",
                      reviewMode ? "text-orange-100/90" : "text-zinc-400",
                    )}
                  >
                    {reviewMode
                      ? "Проверьте заявку и повторно нажмите кнопку — откроется окно выбора способа оплаты."
                      : "Кнопка открывает окно выбора способа оплаты и готовит заявку для будущего подключения платежного шлюза."}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Card>

        <div className="grid gap-6 md:gap-8">
          <Card className="p-6 md:p-8 group hover:-translate-y-1 hover:border-white/10">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/12 text-orange-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <CreditCard className="h-6 w-6" />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-zinc-400 leading-relaxed">Текущая заявка</p>

                  <p className="truncate text-xl font-semibold text-white drop-shadow-sm">
                    {nickname || "Ваш никнейм"} · {server === "stories" ? "Stories" : "Legacy"}
                  </p>
                </div>
                
              </div>

              <div className="rounded-[24px] border border-orange-500/20 bg-orange-500/10 backdrop-blur-sm p-5 md:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <p className="text-xs uppercase tracking-[0.3em] text-orange-300/90">
                  Активный бонус
                </p>
                <p className="mt-3 text-2xl font-semibold text-white drop-shadow-sm">{activeBonus.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-orange-50/80">
                  {activeBonus.description}
                </p>
              </div>

              <div className="space-y-4">
                {donateMethods.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-4 md:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/10 hover:bg-zinc-900/60"
                  >
                    <p className="text-sm font-semibold text-white drop-shadow-sm">{item.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>

              {isSubmitted ? (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-sm p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <p className="text-sm font-semibold text-emerald-300">
                    Заявка подготовлена
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-emerald-50/80">
                    Никнейм {nickname || "не указан"} будет пополнен на {amount || "0"} ₽
                    через {method}. Здесь можно подключить реальный платежный обработчик.
                  </p>
                </div>
              ) : null}
            </div>
          </Card>

          <Card className="p-6 md:p-8 group hover:-translate-y-1 hover:border-white/10">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/12 text-orange-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div className="space-y-2.5">
                <p className="text-lg font-semibold text-white drop-shadow-sm">Безопасность и поддержка</p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  После интеграции платежной системы сюда можно добавить реальный расчет,
                  автопроверку никнейма и подсказки по бонусным акциям.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <PaymentModal
        open={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        methods={paymentMethods}
        selectedId={selectedMethodId}
        onSelect={(id) => {
          const found = paymentMethods.find((m) => m.id === id);
          if (found) setMethod(found.label);
        }}
        loading={isProcessing}
        summary={{
          server: server === "stories" ? "MyGame Stories" : "MyGame Legacy",
          nickname: nickname.trim() || "—",
          amount,
          bonus: activeBonus.title,
        }}
        onConfirm={handleConfirmPayment}
      />
    </section>
  );
}
