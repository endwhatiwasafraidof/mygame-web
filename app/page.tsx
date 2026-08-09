import { Activity, ShieldCheck, Trophy, Users } from "lucide-react";

import { HeroServers } from "@/components/sections/hero-servers";
import { NewsGrid } from "@/components/sections/news-grid";
import { SocialHub } from "@/components/sections/social-hub";
import { StartPlaying } from "@/components/sections/start-playing";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const highlights = [
  {
    title: "Активное комьюнити",
    value: "2 сервера",
    icon: Users,
  },
  {
    title: "Стабильный онлайн",
    value: "2131 игроков",
    icon: Activity,
  },
  {
    title: "Ивенты и сезоны",
    value: "каждую неделю",
    icon: Trophy,
  },
  {
    title: "Поддержка проекта",
    value: "24/7",
    icon: ShieldCheck,
  },
];

function SectionDivider({
  variant = "default",
  className,
}: {
  variant?: "default" | "orange";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative mx-auto flex h-12 w-full max-w-shell items-center justify-center px-4 md:px-6",
        className,
      )}
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div
        className={cn(
          "mx-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/5 backdrop-blur-md",
          variant === "orange"
            ? "bg-orange-500/8 text-orange-300 shadow-[0_0_24px_-6px_rgba(249,115,22,0.35)]"
            : "bg-zinc-900/40 text-zinc-500",
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[18%] -z-10 flex justify-center opacity-70"
      >
        <div className="h-56 w-[70%] max-w-shell rounded-full bg-orange-500/10 blur-[110px]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[46%] -z-10 flex justify-center opacity-50"
      >
        <div className="h-44 w-[60%] max-w-shell rounded-full bg-white/4 blur-[100px]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[72%] -z-10 flex justify-center opacity-80"
      >
        <div className="h-52 w-[65%] max-w-shell rounded-full bg-orange-500/10 blur-[110px]" />
      </div>

      <HeroServers />

      <section className="relative -mt-14 md:-mt-20 pb-10 md:pb-14">
        <div className="relative z-10 mx-auto max-w-shell px-4 md:px-6">
          <div className="grid gap-4 md:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="p-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-200">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                        {item.title}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider variant="orange" />

      <StartPlaying />

      <SectionDivider />

      <NewsGrid />

      <SectionDivider variant="orange" />

      <SocialHub />
    </div>
  );
}
