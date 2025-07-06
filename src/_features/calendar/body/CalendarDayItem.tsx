import { StaticImageData } from "next/image";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";

import CalendarDayItemBodyButton from "./CalendarDayItemBodyButton";
import CalendarDayItemHeader from "./CalendarDayItemHeader";

interface Props {
  idx: number;
  date: number;
  imageUrl: StaticImageData | null;
  id: string;
}

export default function CalendarDayItem({ idx, date, imageUrl, id }: Props) {
  return (
    <div
      className={`border-border-default h-full w-full border-t ${(idx + 1) % 7 === 0 ? "" : "border-border-default border-r"}`}
    >
      <CalendarDayItemHeader date={date} imageUrl={imageUrl} />
      <CalendarDayItemBodyButton date={date} imageUrl={imageUrl} id={id} />
    </div>
  );
}
