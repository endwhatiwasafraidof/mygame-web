<div align="center">

# 🎮 MyGame — Web Interface

<p align="center">
  <b>Современный, быстрый и адаптивный веб-интерфейс для игрового SAMP-проекта MyGame (Stories & Legacy).</b>
</p>

<p align="center">
  <a href="[ВСТАВЬТЕ_ССЫЛКУ_НА_VERCEL_ЗДЕСЬ]" target="_blank">
    <img src="https://img.shields.io/badge/Vercel-Live_Demo-000000?style=for-the-badge&logo=vercel" alt="Vercel Live Demo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=for-the-badge&logo=framer" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Vitest-Unit_Tests-729B1B?style=for-the-badge&logo=vitest" alt="Vitest">
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="Status">
</p>

</div>

---

## 🚀 О проекте

Production-ready релиз (`v1.0.0`) веб-интерфейса игрового проекта **MyGame**. Проект разработан с упором на современный игровой минимализм, высокую производительность и плавный UX/UI с glass-эффектами, фирменным оранжевым акцентом `orange-500` и киберспортивной эстетикой.

* **🌐 Demo (Vercel):** [Посмотреть сайт вживую]([ВСТАВЬТЕ_ССЫЛКУ_НА_VERCEL_ЗДЕСЬ])
* **📦 Репозиторий (GitHub):** [GitHub Repository](https://github.com/endwhatiwasafraidof/mygame-web)

---

## 👨‍💻 Разработчик

* **Разработчик:** Балтовский Александр ([GitHub профиль])(https://github.com/endwhatiwasafraidof)

---

## 🎨 Дизайн-система & Стек

* **Фреймворк:** Next.js 14 (App Router, React 18 Server Components)
* **Язык:** TypeScript (`strict: true`)
* **Стилизация:** Tailwind CSS 3.4 + `class-variance-authority` (CVA)
* **Анимации:** Framer Motion 11
* **Иконки:** Lucide React
* **Тестирование:** Vitest + `@testing-library/react` (jsdom)
* **Линтинг:** ESLint (`next/core-web-vitals`)

### 💎 Визуальные особенности:
* **Тема:** Dark Premium / Glassmorphism (`zinc-950/85` с фиксированным радиальным свечением и orbit blur-слоями).
* **Акцент:** Оранжевый `#f97316` (`orange-500`) для интерактивных элементов, кнопок и состояний наведения.
* **Типографика:** Manrope (основной текст) + Orbitron (заголовки с uppercase и трекингом).
* **Кастомный скроллбар:** Градиентный скроллбар (8px), идентичный на страницах `/home`, `/wiki`, `/donate`.

---

## ⚡ Функционал релиза v1.0.0

### 🏠 Главная страница (`/`)
* **Hero-секция:** Фиксированный оранжевый радиальный глоу (без резких обрывов), кроссфейд-слайдер из 4 фоновых изображений с эффектом Ken Burns.
* **Секция Highlights (Start Playing):** Анимированная парящая фигура (`girl.png`), стеклянные карточки лаунчеров Windows / Android.
* **NewsGrid & SocialHub:** Свежие новости с эффектом приподнимания (`hover-lift`), карточка YouTube + сетка Discord / Telegram / VK с плавной анимацией появления.
* **Footer:** Стеклянная подложка, 3 колонки (Брендинг / Документы / Соцсети + Поддержка) с интерактивными иконками.

### 📚 База знаний (`/wiki`)
* **Hero Heading + Search:** Интерактивный поиск `live input` по заголовкам и описаниям категорий из mock-данных.
* **Фильтрация и сортировка:** Теговые фильтры категорий (`A-Z`, `Z-A`, популярное/новое) на базе `useMemo`.
* **Сетка категорий:** Стеклянные карточки на базе CVA-компонентов.

### 💳 Пополнение счета (`/donate`)
* **Двухэтапная форма (reviewMode):** 
  * Шаг 1: Выбор сервера (Stories / Legacy) → Ввод никнейма (с защитой `maxLength={24}`) → Сумма пополнения → Способ оплаты (Банковская карта, СБП, ЮMoney).
  * Шаг 2: Интерактивная карточка «Текущая заявка» в реальном времени с расчетом бонуса.
* **Модальное окно оплаты (`PaymentModal`):** Построено на `Framer Motion` с детальной сводкой заявки, радио-кнопками выбора метода и плавной анимацией инициализации платежа (1400ms loading flow).

---

## 🧭 Навигация

* **Navbar Glass:** 5 ключевых разделов: *Главная*, *Новости*, *Wiki*, *Форум* (внешняя ссылка на `forum.mygame.com` с `target="_blank"`), кнопка *Пополнить счет* и CTA-кнопка *Начать играть*.

---

## 🧪 Качество и Production Checks

| Проверка | Статус / Метрика | Команда |
| :--- | :---: | :--- |
| **TypeScript Strict** | ✅ `PASS` | `npm run check` |
| **ESLint** | ✅ `1 warning` (дефолтный тег изображения) | `npm run lint` |
| **Next.js Build** | ✅ `PASS` (сгенерировано 7 страниц) | `npm run build` |
| **Unit-тесты** | ✅ `PASS` (Vitest) | `npm run test` |

**Bundle First Load JS:** 
* `/home` — `152 kB`
* `/donate` — `150 kB`
* `/wiki` — `109 kB`

---

## 🛠️ Запуск проекта локально

Убедитесь, что у вас установлен **Node.js (версии 18.17+ )**.

1. Клонируйте репозиторий и установите зависимости:
   ```bash
   npm install
Запустите сервер для разработки (HMR):

  ```bash
  npm run dev
Сайт будет доступен по адресу: http://localhost:3000

Сборка и запуск в production-режиме:

  ```bash
  npm run build
  npm run start

## 📦 NPM Скрипты

Для управления проектом и запуска различных задач используйте следующие команды:

| Команда | Описание | Назначение |
| :--- | :--- | :--- |
| `npm run dev` | **Development** | Запуск сервера разработки с мгновенной перезагрузкой (HMR). |
| `npm run build` | **Production Build** | Создание оптимизированной production-сборки проекта. |
| `npm run start` | **Production Start** | Запуск готовой собранной версии на Node.js сервере. |
| `npm run lint` | **Code Linting** | Проверка кода линтером ESLint (`next/core-web-vitals`). |
| `npm run check` | **CI / Type Check** | Строгая проверка типов TypeScript (`tsc`) совместно с линтингом. |
| `npm run test` | **Unit Tests** | Запуск модульных тестов в окружении jsdom через Vitest. |

---

## 📂 Структура проекта
Plaintext
mygame-web/
├─ app/                              # Next.js App Router
│  ├─ layout.tsx                     # Root Layout · метаданные · Navbar/Footer
│  ├─ globals.css                    # Tailwind директивы · кастомный скроллбар
│  ├─ page.tsx                       # Главная страница
│  ├─ donate/page.tsx                # Страница доната
│  └─ wiki/page.tsx                  # База знаний (Wiki)
├─ components/
│  ├─ layout/                        # Компоненты шапки и подвала
│  ├─ sections/                      # Секции страниц (hero, donate, news и др.)
│  ├─ ui/                            # UI-компоненты (кнопки, модалки, карточки)
│  └─ GlobalBackground.tsx           # Фиксированный фон со слайдером
├─ lib/                              # Константы, мок-данные и утилиты
├─ __tests__/                        # Vitest unit-тесты
├─ public/image/                     # Графические ассеты (1-5.png, girl.png)
├─ tailwind.config.ts                # Конфигурация Tailwind и дизайн-токенов
└─ tsconfig.json                     # Настройки TypeScript
🔐 Безопасность
Внешние ссылки: Все внешние ссылки (Форум, соцсети) используют атрибуты target="_blank" rel="noopener noreferrer".

Конфиденциальность: Файлы окружения (.env*) изолированы через .gitignore.

Безопасность рендеринга: Отсутствуют небезопасные методы (dangerouslySetInnerHTML, eval), используется чистый подход через компоненты React и Tailwind JIT.

📄 Лицензия
Proprietary / Closed Source © 2026 MyGame. Все права на исходный код, дизайн, графические ассеты и контент принадлежат проекту MyGame. Копирование, распространение или коммерческое использование без письменного разрешения запрещено.
