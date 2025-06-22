import { isMobile } from "@/_shared/utils/isMobile";

import CalendarDayModalBody from "./CalendarDayModalBody";
import CalendarDayModalHeader from "./CalendarDayModalHeader";

export default function CalendarDayModal() {
  return (
    <div
      className={`absolute top-20 z-20 flex flex-col items-center bg-white ${isMobile() ? "h-[450px] w-[300px]" : "h-[600px] w-[450px]"}`}
    >
      <CalendarDayModalHeader />
      <CalendarDayModalBody />
    </div>
  );
}
