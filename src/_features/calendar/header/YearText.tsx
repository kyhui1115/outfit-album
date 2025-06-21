import { useEffect } from "react";

import useCalendarStore from "@/_shared/store/calendar";

interface Props {
  slide: number;
}

export default function YearText({ slide }: Props) {
  const { year, month, setYear } = useCalendarStore();

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
    <span className="absolute top-1 right-2 text-[10px]">{adjustedYear()}</span>
  );
}
