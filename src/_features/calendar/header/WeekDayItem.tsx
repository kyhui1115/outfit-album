import { useIsMobile } from "@/_shared/hooks/useIsMobile";

interface Props {
  day: string;
}

export default function WeekDayItem({ day }: Props) {
  const isMobile = useIsMobile();

  return (
    <div key={day} className="flex w-full justify-center">
      <span className={`${isMobile ? "text-xs" : "text-sm"} `}>{day}</span>
    </div>
  );
}
