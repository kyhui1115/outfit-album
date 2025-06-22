import { useIsMobile } from "@/_shared/hooks/useIsMobile";

interface Props {
  idx: number;
}

export default function CalendarEmptyDayItem({ idx }: Props) {
  const isMobile = useIsMobile();

  return (
    <div
      className={`w-full border-b ${isMobile ? "h-[80px]" : "h-[115px]"} ${(idx + 1) % 7 === 0 ? "" : "border-r"} bg-beige-normal`}
    />
  );
}
