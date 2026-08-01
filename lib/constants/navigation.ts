import {
  CircleDollarSign,
  Disc3,
  MessageSquareText,
  Send,
  Shield,
  Youtube,
} from "lucide-react";

import type { NavigationItem, SocialLink } from "@/lib/types";

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "Главная" },
  { href: "/#news", label: "Новости" },
  { href: "/wiki", label: "Wiki" },
  { href: "https://forum.example.com", label: "Форум", external: true },
];

export const navbarActions: NavigationItem[] = [
  { href: "/donate", label: "Пополнить счет" },
  { href: "/#start-playing", label: "Начать играть" },
];

export const footerLinks: NavigationItem[] = [
  { href: "#", label: "Пользовательское соглашение" },
  { href: "#", label: "Политика конфиденциальности" },
  { href: "mailto:contact@mygame.example", label: "Контакты", external: true },
];

export const socialLinks: SocialLink[] = [
  {
    title: "Discord",
    subtitle: "Голосовой центр и живая координация игроков",
    href: "https://discord.gg/Hdwjqvryfp",
    icon: Disc3,
  },
  {
    title: "Telegram",
    subtitle: "Новости, анонсы обновлений и быстрые уведомления",
    href: "https://t.me/mygame_stories",
    icon: Send,
  },
  {
    title: "VK",
    subtitle: "Сообщество проекта, медиа и связь с комьюнити",
    href: "https://vk.ru/mygame.stories",
    icon: MessageSquareText,
  },
  {
    title: "YouTube",
    subtitle: "Трейлеры, ролики с сервера и игровые истории",
    href: "https://www.youtube.com/@mygame-stories",
    icon: Youtube,
  },
];

export const footerMeta = [
  {
    title: "Поддержка",
    value: "ежедневно 10:00 - 22:00",
    icon: Shield,
  },
  {
    title: "Платежи",
    value: "быстрое пополнение без лишних шагов",
    icon: CircleDollarSign,
  },
];
