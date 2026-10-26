import { init } from "./core";
import { DubEmbed } from "./types";

declare global {
  interface Window {
    Veltrio: DubEmbed;
  }
}

if (typeof window !== "undefined") {
  window.Veltrio = (window.Veltrio || {}) as DubEmbed;
  window.Veltrio.init = init;
}
