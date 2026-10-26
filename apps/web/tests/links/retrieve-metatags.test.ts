import { expect, test } from "vitest";
import { IntegrationHarness } from "../utils/integration";

test("GET /links/metatags", async (ctx) => {
  const h = new IntegrationHarness(ctx);
  const { http } = await h.init();

  const { status, data: metatags } = await http.get({
    path: "/links/metatags",
    query: {
      url: "https://veltrio.link",
    },
  });

  expect(status).toEqual(200);
  expect(metatags).toStrictEqual({
    title: "Veltrio - The Modern Link Attribution Platform",
    description:
      "Veltrio is the modern link attribution platform for short links, conversion tracking, and affiliate programs.",
    image: "https://app.veltrio.link/_static/thumbnail.jpg",
    poweredBy: "Veltrio - The Modern Link Attribution Platform",
  });
});
