import { useIsMobile } from "@/_shared/hooks/useIsMobile";

interface Props {
  idx: number;
}

export default function CalendarEmptyDayItem({ idx }: Props) {
  const isMobile = useIsMobile();
  return (
    <div
      className={`border-border-default h-full w-full border-t ${(idx + 1) % 7 === 0 ? "" : "border-border-default border-r"} bg-beige-100`}
    >
      <div className={`-full ${isMobile ? "h-5" : "h-6"}`} />
    </div>
  );
}
