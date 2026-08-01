import { Activity, ShieldCheck, Trophy, Users } from "lucide-react";

import { HeroServers } from "@/components/sections/hero-servers";
import { NewsGrid } from "@/components/sections/news-grid";
import { SocialHub } from "@/components/sections/social-hub";
import { StartPlaying } from "@/components/sections/start-playing";
import { Card } from "@/components/ui/card";

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

export default function HomePage() {
  return (
    <>
      <HeroServers />

      <section className="pb-8">
        <div className="mx-auto max-w-shell px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

      <StartPlaying />
      <NewsGrid />
      <SocialHub />
    </>
  );
}
