import Link from "next/link";

import { footerLinks, footerMeta, socialLinks } from "@/lib/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto max-w-shell px-4 py-16 md:px-6">
        <div className="grid gap-10 rounded-[32px] border border-white/5 bg-white/[0.02] p-8 shadow-panel lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 font-display text-lg text-orange-200 shadow-glow">
                MG
              </span>
              <div>
                <p className="font-display text-lg uppercase tracking-[0.24em] text-white">
                  MyGame
                </p>
                <p className="text-sm text-zinc-400">Лендинг и веб-приложение проекта</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-zinc-400">
              Платформа объединяет два игровых направления, быстрый вход в игру,
              новости комьюнити и удобный доступ к базе знаний.
            </p>
            <p className="text-sm text-zinc-500">
              © 2026 MyGame. Все права защищены.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-zinc-200">
              Документы и связи
            </p>
            <div className="grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  className="rounded-2xl border border-zinc-800 px-4 py-3 text-sm text-zinc-300 transition hover:border-orange-500/30 hover:bg-orange-500/5 hover:text-white"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="font-display text-sm uppercase tracking-[0.28em] text-zinc-200">
                Социальные сети
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      aria-label={item.title}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/80 text-zinc-100 transition hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-200 hover:shadow-glow"
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-3">
              {footerMeta.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-zinc-400">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
