import CalendarDayModalBody from "./CalendarDayModalBody";
import CalendarDayModalHeader from "./CalendarDayModalHeader";

export default function CalendarDayModal() {
  return (
    <div className="absolute top-20 z-20 flex h-[60%] w-[80%] flex-col items-center bg-white">
      <CalendarDayModalHeader />
      <CalendarDayModalBody />
    </div>
  );
}
