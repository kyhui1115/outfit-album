import Calendar from "@/_features/calendar/Calendar";
import LeftButton from "@/_features/calendar/header/LeftButton";
import RightButton from "@/_features/calendar/header/RightButton";

export default function Page() {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex h-[540px] w-full items-center">
        <LeftButton />
        <Calendar />
        <RightButton />
      </div>
    </div>
  );
}
