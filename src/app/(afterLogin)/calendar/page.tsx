import Calendar from "@/_features/calendar/Calendar";
import LeftButton from "@/_features/calendar/header/LeftButton";
import RightButton from "@/_features/calendar/header/RightButton";

export default function Page() {
  return (
    <div className="h-full w-full">
      <div className="flex h-[540px] w-full justify-center">
        <LeftButton />
        <Calendar />
        <RightButton />
      </div>
    </div>
  );
}
