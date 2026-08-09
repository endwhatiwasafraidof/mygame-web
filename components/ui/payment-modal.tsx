"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Check,
  CreditCard,
  Landmark,
  Wallet,
  X,
} from "lucide-react";
import { useEffect, useMemo, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PaymentMethodId = "card" | "sbp" | "umoney";

export type PaymentMethodOption = {
  id: PaymentMethodId;
  label: string;
  description: string;
  accent: "orange" | "white";
};

export type PaymentModalProps = {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  methods: PaymentMethodOption[];
  selectedId: PaymentMethodId;
  onSelect: (id: PaymentMethodId) => void;

  summary: {
    server: string;
    nickname: string;
    amount: string;
    bonus: string;
  };

  onConfirm: () => void;

  confirmLabel?: string;
  confirmLoadingLabel?: string;
};

const iconMap: Record<PaymentMethodId, ReactNode> = {
  card: <CreditCard className="h-6 w-6" />,
  sbp: <Landmark className="h-6 w-6" />,
  umoney: <Wallet className="h-6 w-6" />,
};

const resolveFallbackId = (label: string): PaymentMethodId => {
  const l = label.toLowerCase();
  if (l.includes("сбп") || l === "sbp") return "sbp";
  if (l.includes("карт") || /card/i.test(label)) return "card";
  return "umoney";
};

export function PaymentModal({
  open,
  loading = false,
  onClose,
  methods,
  selectedId,
  onSelect,
  summary,
  onConfirm,
  confirmLabel = "Подтвердить и перейти к оплате",
  confirmLoadingLabel = "Идёт инициализация платежа…",
}: PaymentModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  const rows = useMemo(() => {
    return methods.map((m) => {
      const fallback = resolveFallbackId(m.label);
      return {
        ...m,
        icon: iconMap[m.id] ?? iconMap[fallback] ?? <Building2 className="h-6 w-6" />,
      };
    });
  }, [methods]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 md:items-center md:p-6">
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/75 backdrop-blur-md"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Выбор способа оплаты"
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl overflow-hidden rounded-t-[32px] border border-white/10 bg-zinc-950/55 backdrop-blur-xl md:rounded-[36px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/5 px-6 py-5 md:px-10 md:py-7">
              <div className="space-y-1.5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-orange-300/90">
                  Оплата
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-white drop-shadow-sm md:text-3xl">
                  Выберите способ оплаты
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Закрыть окно"
                className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                <X className="h-5 w-5 text-zinc-300 transition group-hover:text-white" />
              </button>
            </div>

            <div className="max-h-[78vh] overflow-y-auto px-6 py-6 scrollbar-thin md:px-10 md:py-8 space-y-7 md:space-y-8">
              <div className="rounded-[28px] border border-white/5 bg-black/20 backdrop-blur-sm p-5 md:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
                  Сводка заявки
                </p>
                <dl className="mt-4 grid gap-3.5 sm:grid-cols-2">
                  <SummaryRow label="Сервер" value={summary.server} />
                  <SummaryRow label="Никнейм" value={summary.nickname} />
                  <SummaryRow
                    label="Сумма пополнения"
                    value={`${summary.amount} ₽`}
                    accent="text-orange-300"
                  />
                  <SummaryRow label="Бонус" value={summary.bonus} />
                </dl>
              </div>

              <div className="space-y-3.5">
                <p className="text-sm font-medium tracking-tight text-zinc-200">
                  Доступные методы
                </p>
                <div className="grid gap-3.5">
                  {rows.map((row) => {
                    const isActive = selectedId === row.id;
                    return (
                      <button
                        key={row.id}
                        type="button"
                        onClick={() => onSelect(row.id)}
                        className={cn(
                          "group relative w-full overflow-hidden text-left rounded-[24px] border bg-zinc-950/40 backdrop-blur-md p-4 md:p-5 transition-all duration-400 ease-out",
                          isActive
                            ? row.accent === "orange"
                              ? "border-orange-500/45 bg-orange-500/8 shadow-[0_0_30px_-8px_rgba(249,115,22,0.28)]"
                              : "border-white/25 bg-white/8 shadow-[0_0_30px_-8px_rgba(255,255,255,0.08)]"
                            : "border-white/10 hover:-translate-y-0.5 hover:border-white/15 hover:bg-zinc-900/50",
                        )}
                      >
                        <div className="flex items-center gap-4 md:gap-5">
                          <span
                            className={cn(
                              "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300",
                              row.accent === "orange"
                                ? isActive
                                  ? "border-orange-500/45 bg-orange-500/16 text-orange-200 scale-105"
                                  : "border-orange-500/20 bg-orange-500/10 text-orange-300 group-hover:scale-105"
                                : isActive
                                  ? "border-white/25 bg-white/12 text-zinc-100 scale-105"
                                  : "border-white/10 bg-white/6 text-zinc-300 group-hover:scale-105",
                            )}
                          >
                            {row.icon}
                          </span>
                          <div className="min-w-0 flex-1 space-y-1">
                            <p className="truncate text-base font-semibold tracking-tight text-white drop-shadow-sm md:text-lg">
                              {row.label}
                            </p>
                            <p className="truncate text-sm leading-relaxed text-zinc-400">
                              {row.description}
                            </p>
                          </div>
                          <span
                            className={cn(
                              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                              isActive
                                ? row.accent === "orange"
                                  ? "border-orange-500/50 bg-orange-500/22 text-orange-100"
                                  : "border-white/30 bg-white/15 text-white"
                                : "border-white/10 bg-transparent text-transparent",
                            )}
                          >
                            <Check className="h-4 w-4" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-4 border-t border-white/5 bg-zinc-950/60 backdrop-blur-sm px-7 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-5 md:px-11 md:py-9">
              <p className="text-xs leading-relaxed text-zinc-500">
                Нажатием кнопки вы соглашаетесь с обработкой данных и тарифами
                платёжной системы.
              </p>
              <div className="flex justify-end p-2.5 -m-2.5">
                <Button
                  size="lg"
                  onClick={onConfirm}
                  loading={loading}
                  disabled={loading}
                  aria-label={loading ? confirmLoadingLabel : confirmLabel}
                  className={cn(
                    "w-full sm:w-auto sm:min-w-[260px] whitespace-nowrap rounded-2xl px-8 py-3.5",
                    "text-sm font-bold uppercase tracking-[0.2em] text-white drop-shadow-sm",
                    "border border-orange-400/80 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600",
                    "shadow-[inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.18),0_0_0_1px_rgba(249,115,22,0.22),0_0_28px_-6px_rgba(249,115,22,0.55)]",
                    "transition-all duration-300 ease-in-out",
                    "hover:scale-[1.04] hover:-translate-y-0.5 hover:border-orange-300 hover:from-orange-400 hover:via-orange-400 hover:to-orange-500 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.26),inset_0_-2px_0_rgba(0,0,0,0.15),0_0_0_1px_rgba(249,115,22,0.3),0_0_40px_-8px_rgba(249,115,22,0.7)]",
                    "active:scale-[0.98] active:translate-y-0 active:border-orange-600 active:from-orange-600 active:via-orange-600 active:to-orange-700 active:shadow-[inset_0_2px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.35),0_0_0_1px_rgba(249,115,22,0.2),0_0_20px_-4px_rgba(249,115,22,0.45)] active:duration-150",
                  )}
                >
                  {loading ? confirmLoadingLabel : confirmLabel}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

function SummaryRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/5 bg-zinc-900/35 px-4 py-3">
      <dt className="text-sm leading-relaxed text-zinc-400">{label}</dt>
      <dd
        className={cn(
          "truncate text-right text-sm font-semibold tracking-tight text-white drop-shadow-sm md:text-base",
          accent,
        )}
      >
        {value}
      </dd>
    </div>
  );
}
