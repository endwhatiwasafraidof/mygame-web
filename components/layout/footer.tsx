import Link from "next/link";

import { ProjectLogo } from "@/components/ui/project-logo";
import { footerLinks, footerMeta, socialLinks } from "@/lib/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/45 backdrop-blur-xl">
      <div className="mx-auto max-w-shell px-4 py-16 md:px-6">
        <div className="grid gap-10 rounded-[32px] border border-white/10 bg-zinc-900/35 backdrop-blur-xl p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-6">
            <Link
              aria-label="Перейти на главную страницу"
              className="flex items-center transition-all duration-300 ease-in-out hover:opacity-80"
              href="/"
            >
              <ProjectLogo size="footer" />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
              Платформа объединяет два игровых направления, быстрый вход в игру,
              новости комьюнити и удобный доступ к базе знаний.
            </p>
            <div className="space-y-1.5">
              <p className="text-sm text-zinc-500">
                © 2026 MyGame. Все права защищены.
              </p>
              <Link
                href="https://t.me/AldenCoveReverie"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-xs text-zinc-500 transition-all duration-300 ease-in-out hover:text-orange-400"
              >
                &lt;/&gt; by Alexander Baltovsky
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-zinc-200 drop-shadow-sm">
              Документы и связи
            </p>
            <div className="grid gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  className="rounded-2xl border border-white/10 bg-zinc-900/30 backdrop-blur-md px-4 py-3.5 text-sm text-zinc-300 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-orange-500/20 hover:bg-orange-500/5 hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>



          <div className="space-y-7">
            <div className="space-y-5">
              <p className="font-display text-sm uppercase tracking-[0.28em] text-zinc-200 drop-shadow-sm">
                Социальные сети
              </p>
              <div className="flex flex-wrap gap-3.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      aria-label={item.title}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/35 backdrop-blur-md text-zinc-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-orange-500/25 hover:bg-orange-500/8 hover:text-orange-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
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

            <div className="grid gap-4">
              {footerMeta.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-zinc-900/35 backdrop-blur-md p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/12 text-orange-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white drop-shadow-sm">
                          {item.title}
                        </p>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {item.value}
                        </p>
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
