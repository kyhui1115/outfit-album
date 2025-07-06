import { StaticImageData } from "next/image";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";

interface Props {
  date: number;
  imageUrl: StaticImageData | null;
}

export default function CalendarDayItemHeader({ date, imageUrl }: Props) {
  const isMobile = useIsMobile();

  return (
    <div
      className={`border-beige-300 flex h-[19%] w-full items-center justify-end border-b ${imageUrl ? "bg-yellow-normal" : "bg-beige-100"}`}
    >
      <span className={`${isMobile ? "mr-1 text-[10px]" : "mr-2 text-sm"}`}>
        {date}
      </span>
    </div>
  );
}
