import ResizeObserver from "resize-observer-polyfill";

if (typeof window !== "undefined") {
  window.ResizeObserver = ResizeObserver;
}
