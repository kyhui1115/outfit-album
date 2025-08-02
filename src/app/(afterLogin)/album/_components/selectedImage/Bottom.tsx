import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import { useIsPad } from "@/_shared/hooks/useIsPad";
import { isPWA } from "@/_shared/utils/isPWA";

import BackButton from "./BackButton";

export default function Bottom() {
  const isMobile = useIsMobile();
  const isPad = useIsPad();

  return (
    <div
      className={`bg-beige-300 z-20 flex w-full shrink-0 items-center px-3 ${isMobile || isPad ? (isPWA() ? "h-[70px]" : "h-[45px]") : "h-[50px]"}`}
    ></div>
  );
}
