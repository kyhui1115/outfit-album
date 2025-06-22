import useCalendarStore from "@/_shared/store/calendar";
import { isMobile } from "@/_shared/utils/isMobile";

interface Props {
  slide: number;
}

export default function MonthText({ slide }: Props) {
  const { month } = useCalendarStore();

  const adjustedMonth = () => {
    const newMonth = month + slide;

    if (newMonth === 0) {
      return 12;
    }

    if (newMonth === 13) {
      return 1;
    }

    return newMonth;
  };

  return (
    <div className="mb-4 flex w-full items-center justify-center">
      <span className={`font-semibold ${isMobile() ? "" : "text-lg"}`}>
        {adjustedMonth()}
      </span>
    </div>
  );
}
