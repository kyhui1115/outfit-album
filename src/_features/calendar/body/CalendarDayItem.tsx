import { StaticImageData } from "next/image";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";

import CalendarDayItemBodyButton from "./CalendarDayItemBodyButton";
import CalendarDayItemHeader from "./CalendarDayItemHeader";

interface Props {
  idx: number;
  date: number;
  imageUrl: StaticImageData | null;
}

export default function CalendarDayItem({ idx, date, imageUrl }: Props) {
  const isMobile = useIsMobile();

  return (
    <div
      className={`border-beige-300 h-full w-full border-t ${(idx + 1) % 7 === 0 ? "" : "border-beige-300 border-r"}`}
    >
      <CalendarDayItemHeader date={date} imageUrl={imageUrl} />
      <CalendarDayItemBodyButton date={date} imageUrl={imageUrl} />
    </div>
  );
}
