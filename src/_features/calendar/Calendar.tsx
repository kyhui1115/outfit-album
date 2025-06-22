import { isMobile } from "@/_shared/utils/isMobile";

import CalendarBody from "./body/CalendarBody";
import CalendarHeader from "./header/CalendarHeader";

interface Props {
  slide: number;
}

export default function Calendar({ slide }: Props) {
  return (
    <div
      className={`border-darkgray mx-3 flex w-full shrink-0 flex-col border-x border-t bg-white ${isMobile() ? "h-[570px]" : "h-[810px]"}`}
    >
      <CalendarHeader slide={slide} />
      <CalendarBody slide={slide} />
    </div>
  );
}
