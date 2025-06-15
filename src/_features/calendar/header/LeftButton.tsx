"use client";

import { BsChevronCompactLeft } from "react-icons/bs";

import useCalendarStore from "@/_shared/store/calendar";
import Button from "@/_shared/ui/Button";

export default function LeftButton() {
  const { month, year, setMonth, setYear } = useCalendarStore();

  const leftButtonHandler = () => {
    if (month > 1) {
      setMonth(month - 1);
    }

    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    }
  };

  return (
    <Button
      onClick={leftButtonHandler}
      className="flex h-full w-full items-center justify-center"
    >
      <BsChevronCompactLeft className="text-xl" />
    </Button>
  );
}
