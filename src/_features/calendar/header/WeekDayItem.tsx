import { isMobile } from "@/_shared/utils/isMobile";

interface Props {
  day: string;
}

export default function WeekDayItem({ day }: Props) {
  return (
    <div key={day} className="flex w-full justify-center">
      <span className={`text-darkgray ${isMobile() ? "text-xs" : "text-sm"} `}>
        {day}
      </span>
    </div>
  );
}
