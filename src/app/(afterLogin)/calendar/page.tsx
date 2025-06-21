"use client";

import { useState } from "react";

import Calendar from "@/_features/calendar/Calendar";
import CalendarSlideContainer from "@/_features/calendar/CalendarSlideContainer";

export default function Page() {
  const [slideList, setSlideList] = useState<number[]>([-1, 0, 1]);

  return (
    <CalendarSlideContainer setSlideList={setSlideList}>
      {slideList.map(slide => (
        <Calendar key={slide} slide={slide} />
      ))}
    </CalendarSlideContainer>
  );
}
