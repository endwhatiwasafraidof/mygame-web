import { describe, expect, it } from "vitest";

import {
  donateMethods,
  newsItems,
  platformCards,
  serverCards,
  wikiCategories,
} from "@/lib/constants/mock-data";

describe("mock-data", () => {
  it("содержит оба ключевых сервера проекта", () => {
    expect(serverCards).toHaveLength(2);
    expect(serverCards.map((item) => item.slug)).toEqual(["stories", "legacy"]);
  });

  it("содержит платформы для быстрого старта", () => {
    expect(platformCards.map((item) => item.title)).toEqual(["Windows", "Android"]);
  });

  it("отдает не меньше трех новостей", () => {
    expect(newsItems.length).toBeGreaterThanOrEqual(3);
  });

  it("содержит способы оплаты и категории Wiki", () => {
    expect(donateMethods.length).toBeGreaterThanOrEqual(3);
    expect(wikiCategories.length).toBeGreaterThanOrEqual(10);
  });
});
