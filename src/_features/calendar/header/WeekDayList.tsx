import DIC from "@/_shared/dictionary";

import WeekDayItem from "./WeekDayItem";

export default function WeekDayList() {
  return (
    <div className="absolute bottom-1 flex w-full">
      {DIC.weekDayList.map(day => (
        <WeekDayItem key={day} day={day} />
      ))}
    </div>
  );
}
