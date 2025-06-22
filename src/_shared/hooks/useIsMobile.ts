import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsMobile(/iPhone|Android/i.test(window.navigator.userAgent));
  }, []);

  return isMobile;
};
