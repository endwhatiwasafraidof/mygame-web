# 🎮 MyGame — Web Interface

Современный, быстрый и адаптивный веб-интерфейс для игрового SAMP-проекта **MyGame** (MyGame Stories & MyGame Legacy). Производственный production-ready релиз v1.0.0.

Проект разработан с упором на современный игровой минимализм, высокую производительность и плавный UX/UI с glass-эффектами, оранжевым акцентом `orange-500` и киберспортивным визуалом.

## 🚀 Технологический стек

- **Фреймворк:** [Next.js 14](https://nextjs.org/) (App Router, React 18 Server Components)
- **Язык:** [TypeScript 5](https://www.typescriptlang.org/) `strict: true`
- **Стилизация:** [Tailwind CSS 3.4](https://tailwindcss.com/) + class-variance-authority (CVA)
- **Анимации:** [Framer Motion 11](https://www.framer.com/motion/)
- **Иконки:** [Lucide React](https://lucide.dev/)
- **Тестирование:** Vitest + @testing-library/react (jsdom)
- **Линтер/формат:** ESLint `next/core-web-vitals`

## 🎨 Дизайн-система (Design System)

- **Тема:** Dark Premium / Glassmorphism.
- **Акцентный цвет:** Оранжевый `#f97316` (`orange-500`) — все кнопки, свечения, бейджи, скроллбары, hover-состояния.
- **База фона:** `zinc-950/85` с fixed radial glow + orbit blur-слои.
- **Типографика:** Manrope (body) + Orbitron (display heading uppercase tracking-wide).
- **4-layer premium shadow CTA:** `inset top-gloss 2px / inset bottom-shadow / ring 1px / outer glow 28–40px`.
- **Button CVA primary hover/active:** `duration-300 ease-in-out` scale `1.04/0.98`, `active:duration-150` instant indent.
- **Custom orange scrollbar 8px** с gradient-thumb, identical на /home, /wiki, /donate (viewport + локальные overflow card containers).

## ⚡ Функционал релиза v1.0.0

### Главная страница `/`
- **Hero-секция:** фиксированный orange radial-glow (без резкого обрыва), opacity crossfade-слайдер 4-х фоновых изображений с Ken Burns, overlay `from-zinc-950/40 via-zinc-950/60 to-zinc-950`.
- **Мягкие швы между секциями:** 3 Orbit blur-слоя `blur-[110px]` fixed + `SectionDivider` (orange/default варианты) + overlap spacing `Hero -mb-24 md:-mb-36 / Highlights -mt-14 md:-mt-20`.
- **Секция Highlights (Start Playing):** абсолютная girl.png levitate 7s, glass Cards Windows/Android launcher.
- **NewsGrid:** 3 recent новости glass card, hover-lift.
- **SocialHub:** YouTube recommended card + 2x grid Discord/Telegram/VK motion fade-in.
- **Footer:** glass shell, 3 колонки (Branding / Документы / Соцсети + Поддержка), levitate icon hover.

### Wiki `/wiki`
- **Hero Heading + Search:** live input поиск по title/description категорий mock-data.
- **Bonus Sort Controls:** фильтр category-tag (A-Z/Z-A/old/new) + sort select.
- **Wiki Categories Grid:** 6 glass-card CVA, useMemo filtered/sorted, skeleton нет (static mocks).
- **Right Sidebar 2-card:** scrollbar-thin dynamic.

### Donate `/donate`
- **Donate Form (2-step reviewMode):**
  1. Шаг 1: Сервер (Stories/Legacy) → Никнейм → Сумма ₽ → Банковская карта / СБП / ЮMoney.
  2. Шаг 2 (review): Live-карточка «Текущая заявка» с бонусом от суммы.
- **PaymentModal (Framer Motion AnimatePresence):** Сводка заявки SummaryRow × 4, Radio Payment Methods, CTA glossy rounded-2xl «Подтвердить и перейти к оплате» с 1400ms loading initialization flow.
- **Безопасность платежной логики:** CSS-only transition → 0 задержек `setState`, loading disabled+opacity-60 предотвращает double-submit, aria-busy, aria-live polite.

### Навигация
- **Navbar Glass:** 5 пунктов Главная / Новости / Wiki / **Форум** (внешний `https://forum.mygame.com`, `target="_blank" rel="noopener noreferrer"`) / Пополнить счет / Начать играть CTA primary.

## 🧪 Качество / Production checks

| Проверка | Статус | Команда |
|---|---|---|
| TypeScript strict `tsc --noEmit` | ✅ PASS | `npm run check` |
| ESLint next/core-web-vitals | ✅ 1 WARNING only (hero `<img>` legacy) | `npm run lint` |
| Next.js Production build | ✅ PASS 7 pages generated | `npm run build` |
| Vitest unit tests | ✅ `__tests__/mock-data.test.ts` | `npm run test` |
| Bundle First Load JS | ✅ /home 152kB · /donate 150kB · /wiki 109kB | Build trace |

## 🛠️ Запуск проекта локально

Убедитесь, что у вас установлен Node.js (версии 18.17+ для Next.js 14).

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Запустите сервер для разработки:
   ```bash
   npm run dev
   # По умолчанию http://localhost:3000
   ```

3. Production-сборка и запуск:
   ```bash
   npm run build
   npm run start
   ```

## 📦 NPM Scripts

- `npm run dev` — запуск режима разработки с Hot Module Replacement (HMR).
- `npm run build` — оптимизированная production-сборка (static prerender /donate/home + SSR /wiki).
- `npm run start` — запуск готовой сборки на Node HTTP-сервере (для staging/production).
- `npm run lint` — ESLint `next/core-web-vitals`.
- `npm run check` — **CI-скрипт** TypeScript strict check + lint (для pre-commit/deploy).
- `npm run test` — Vitest unit-тесты (jsdom environment, testing-library).

## 🏗️ Структура кода

```
mygame-web/
├─ app/                              Next.js App Router entry
│  ├─ layout.tsx                     Root Layout · metadata · Navbar/Footer/GlobalBackground
│  ├─ globals.css                    Tailwind directives · scrollbar-thin source-of-truth · keyframes
│  ├─ page.tsx                       Home · Hero→Highlights→News→Social→Footer SectionDivider
│  ├─ donate/page.tsx                Donate shell · DonateForm + PaymentModal mount
│  └─ wiki/page.tsx                  Wiki · Search + Filter + Sort + Grid
├─ components/
│  ├─ layout/                        navbar.tsx · footer.tsx
│  ├─ sections/                      hero-servers · donate-form · news-grid · social-hub · start-playing · wiki-categories
│  ├─ ui/                            button.tsx (CVA source-of-truth) · payment-modal · card · glow-badge · section-heading · project-logo
│  └─ GlobalBackground.tsx           Fixed Background · 4-image crossfade slideshow + Ken Burns
├─ lib/
│  ├─ constants/                     branding.ts · mock-data.ts · navigation.ts
│  ├─ types.ts                       Shared TS interfaces
│  └─ utils.ts                       cn() classnames + tailwind-merge
├─ __tests__/                        Vitest unit tests
├─ public/image/                     1.png · 2.png · 3.png · 4.png · girl.png
├─ next.config.mjs                   React Strict Mode
├─ tailwind.config.ts                Orange/zinc palette · shell max-width · glass theme tokens
└─ tsconfig.json                     strict · paths @/*
```

## 🔐 Безопасность

- **Внешние ссылки:** все `target="_blank"` имеют `rel="noopener noreferrer"` (Форум, YouTube, Telegram, VK, Discord, соцсети Footer/SocialHub).
- **Secrets:** `.env*` в `.gitignore` → 0 утечек API-ключей в репо.
- **Отключен JavaScript-плагинов:** нет `dangerouslySetInnerHTML`, нет eval/inline-scripts.
- **CSP готовность:** стили только Tailwind JIT (inline стилей минимум), скрипты Next.js runtime.

## 📄 Лицензия

**Proprietary / Closed Source © 2026 MyGame.**
Все права на исходный код, дизайн, графические ассеты и текстовый контент принадлежат проекту MyGame. Копирование, распространение или коммерческое использование без письменного разрешения администрации запрещено.
