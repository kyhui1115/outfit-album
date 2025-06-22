export function isPWA(): boolean {
  // iOS: window.navigator.standalone, Android/크롬: display-mode
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as any).standalone === true
  );
}
