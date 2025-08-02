import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useCalendarStore from "@/_shared/store/calendar";

interface Props {
  slide: number;
}

export default function YearText({ slide }: Props) {
  const isMobile = useIsMobile();

  const { year, month } = useCalendarStore();

  const adjustedYear = () => {
    const currentMonth = month + slide;

    if (currentMonth === 0) {
      return year - 1;
    }

    if (currentMonth === 13) {
      return year + 1;
    }

    return year;
  };

  return (
    <span
      className={`absolute ${isMobile ? "top-1 right-2 text-[10px]" : "top-2 right-3 text-sm"}`}
    >
      {adjustedYear()}
    </span>
  );
}
