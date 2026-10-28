import { Index } from "@upstash/vector";

// Index throws at construction when its token is missing, which would break
// the build (and every route importing this file) on deployments without
// Upstash Vector. Create each index on first use instead.
function lazyIndex<T extends Record<string, unknown> = Record<string, unknown>>(
  getConfig: () => { url: string; token: string },
): Index<T> {
  let index: Index<T> | undefined;
  return new Proxy({} as Index<T>, {
    get(_, prop) {
      index ??= new Index<T>(getConfig());
      const value = Reflect.get(index, prop, index);
      return typeof value === "function" ? value.bind(index) : value;
    },
  });
}

export const vectorIndex = lazyIndex(() => ({
  url: process.env.UPSTASH_VECTOR_REST_URL ?? "",
  token: process.env.UPSTASH_VECTOR_REST_TOKEN ?? "",
}));

export const emojiVectorIndex = lazyIndex<{
  emoji: string;
  label: string;
}>(() => ({
  url: process.env.UPSTASH_VECTOR_EMOJI_REST_URL ?? "",
  token: process.env.UPSTASH_VECTOR_EMOJI_REST_TOKEN ?? "",
}));
