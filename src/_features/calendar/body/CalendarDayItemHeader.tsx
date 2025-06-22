import { useIsMobile } from "@/_shared/hooks/useIsMobile";

interface Props {
  date: number;
}

export default function CalendarDayItemHeader({ date }: Props) {
  const isMobile = useIsMobile();

  return (
    <div
      className={`bg-yellow-normal flex h-5 w-full items-center justify-end border-b ${isMobile ? "h-5" : "h-6"}`}
    >
      <span className={`${isMobile ? "mr-1 text-xs" : "mr-2 text-sm"}`}>
        {date}
      </span>
    </div>
  );
}
