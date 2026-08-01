import type {
  BonusTier,
  DonateMethod,
  NewsItem,
  PlatformCard,
  ServerCard,
  WikiCategory,
} from "@/lib/types";

export const serverCards: ServerCard[] = [
  {
    slug: "stories",
    title: "MyGame Stories",
    description:
      "Будущее проекта и современное развитие классического SA:MP. Возрождение лучших игровых эпох. Живое комьюнити.",
    online: 1489,
    ctaLabel: "Начать играть",
    status: "Современный сервер",
  },
  {
    slug: "legacy",
    title: "MyGame Legacy",
    description:
      "Музейная версия. Аутентичная модификация 2013 года. Спокойный игровой процесс.",
    online: 642,
    ctaLabel: "Играть",
    status: "Ретро-режим",
  },
];

export const platformCards: PlatformCard[] = [
  {
    title: "Windows",
    description:
      "Полноценная игра на ПК с максимальной производительностью.",
    buttonLabel: "Скачать лаунчер",
  },
  {
    title: "Android",
    description:
      "Игра с телефона в любое время с сохранением всего игрового функционала.",
    buttonLabel: "Скачать лаунчер",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "update-1",
    title: "Летний патч: новые активности для Stories",
    excerpt:
      "В свежем обновлении добавлены сезонные события, баланс экономики и новые бонусы для стартующих игроков.",
    publishedAt: "01 августа 2026",
    imageLabel: "Патч и сезонное событие",
    category: "Обновления",
  },
  {
    id: "update-2",
    title: "Legacy Weekend: возвращение ламповой атмосферы",
    excerpt:
      "На сервере Legacy стартует расслабленный ивент-уикенд с классическими механиками, редкими наградами и ретро-настроением.",
    publishedAt: "29 июля 2026",
    imageLabel: "Ретро ивент",
    category: "Ивенты",
  },
  {
    id: "update-3",
    title: "Новый лаунчер для Android уже доступен",
    excerpt:
      "Оптимизирован запуск, уменьшено время входа на сервер и обновлен интерфейс быстрого подключения с телефона.",
    publishedAt: "24 июля 2026",
    imageLabel: "Мобильный лаунчер",
    category: "Платформы",
  },
  {
    id: "update-4",
    title: "Комьюнити-рейд и медиатурнир на YouTube",
    excerpt:
      "Собираем команды, запускаем серию трансляций и приглашаем игроков показать лучшие игровые истории на канале проекта.",
    publishedAt: "18 июля 2026",
    imageLabel: "Турнир и трансляция",
    category: "Комьюнити",
  },
];

export const donateMethods: DonateMethod[] = [
  {
    label: "Банковская карта",
    description: "Моментальное пополнение с автоматической выдачей средств.",
  },
  {
    label: "СБП",
    description: "Быстрый перевод с подтверждением через мобильный банк.",
  },
  {
    label: "ЮMoney",
    description: "Удобный вариант для игроков, предпочитающих кошельки.",
  },
];

export const bonusTiers: BonusTier[] = [
  {
    title: "+5% бонуса от 500 ₽",
    description: "Подходит для небольшого пополнения и старта на сервере.",
  },
  {
    title: "+10% бонуса от 1500 ₽",
    description: "Оптимальный выбор для активных игроков и быстрых покупок.",
  },
  {
    title: "+15% бонуса от 3000 ₽",
    description: "Максимальная выгода для крупных пополнений и премиум-пакетов.",
  },
];

export const wikiCategories: WikiCategory[] = [
  {
    slug: "newbie",
    title: "Новичкам",
    description: "Базовые советы и ответы для первого входа на сервер.",
  },
  {
    slug: "start",
    title: "Начало игры",
    description: "Первые шаги, стартовый маршрут и быстрый заработок.",
  },
  {
    slug: "jobs",
    title: "Работы",
    description: "Описание профессий, графики и способы развития персонажа.",
  },
  {
    slug: "orgs",
    title: "Организации",
    description: "Обзор фракций, наборов и карьерного роста.",
  },
  {
    slug: "government",
    title: "Государственные структуры",
    description: "Полиция, армия, мэрия и государственные механики.",
  },
  {
    slug: "crime",
    title: "Криминальные организации",
    description: "Мафии, банды и правила теневой игры.",
  },
  {
    slug: "estate",
    title: "Недвижимость",
    description: "Дома, бизнесы и выгодные сценарии инвестиций.",
  },
  {
    slug: "transport",
    title: "Транспорт",
    description: "Покупка, тюнинг, редкие модели и эксплуатация.",
  },
  {
    slug: "commands",
    title: "Команды",
    description: "Полезные игровые команды для повседневного использования.",
  },
  {
    slug: "faq",
    title: "FAQ",
    description: "Частые вопросы по механикам, аккаунту и правилам.",
  },
];
