"use client";

import { BsChevronCompactRight } from "react-icons/bs";

import useCalendarStore from "@/_shared/store/calendar";
import Button from "@/_shared/ui/Button";

export default function RightButton() {
  const { month, year, setMonth, setYear } = useCalendarStore();

  const rightButtonHandler = () => {
    if (month < 12) {
      setMonth(month + 1);
    }

    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    }
  };

  return (
    <Button
      onClick={rightButtonHandler}
      className="flex h-full w-full items-center justify-center"
    >
      <BsChevronCompactRight className="text-xl" />
    </Button>
  );
}
