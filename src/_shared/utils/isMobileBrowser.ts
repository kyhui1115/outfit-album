import { isPWA } from "./isPWA";

export function isMobileBrowser(): boolean {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
  return isMobile && !isPWA();
}
