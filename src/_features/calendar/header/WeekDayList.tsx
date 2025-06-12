import DIC from "@/_shared/dictionary";

export default function WeekDayList() {
  return (
    <div className="mt-5 mb-1 flex w-full">
      {DIC.weekDayList.map(day => (
        <div key={day} className="flex w-full justify-center">
          <span className="text-darkgray text-xs">{day}</span>
        </div>
      ))}
    </div>
  );
}
