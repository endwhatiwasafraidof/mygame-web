"use client";

import { useEffect, useState } from "react";

const SLIDESHOW_IMAGES = [
  "/image/1.png",
  "/image/2.png",
  "/image/3.png",
  "/image/4.png",
];

const SLIDE_INTERVAL_MS = 9000;
const SLIDE_CROSSFADE_MS = 2800;

/**
 * Глобальный анимированный фон сайта.
 * Показывает плавное crossfade-слайдшоу из 4 изображений
 * с эффектом Ken Burns (медленное масштабирование активного кадра),
 * полупрозрачным оверлеем для читаемости контента и игровой сеткой.
 */

export function GlobalBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-zinc-950 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        {SLIDESHOW_IMAGES.map((imageSrc, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={imageSrc}
              className={`absolute inset-0 bg-cover bg-center ease-in-out ${
                isActive ? "opacity-50 scale-105" : "opacity-0 scale-100"
              }`}
              style={{
                backgroundImage: `url(${imageSrc})`,
                transition: `opacity ${SLIDE_CROSSFADE_MS}ms ease-in-out`,
              }}
              aria-hidden="true"
            />
          );
        })}
      </div>

      <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-grid-fade opacity-40" />
    </div>
  );
}
