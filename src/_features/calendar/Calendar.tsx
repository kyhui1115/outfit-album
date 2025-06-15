import CalendarBody from "./body/CalendarBody";
import CalendarHeader from "./header/CalendarHeader";

export default function Calendar() {
  return (
    <div className="border-darkgray mx-3 flex h-[570px] w-full flex-col border-x border-t">
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
}
