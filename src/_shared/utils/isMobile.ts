export function isMobile(): boolean {
  if (typeof window === "undefined") return false; // 서버에서는 false 반환
  return /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
}
