import CloseIconButotn from "./CloseIconButotn";
import HeaderDayText from "./HeaderDayText";

export default function CalendarDayModalHeader() {
  return (
    <div className="bg-yellow-normal relative flex h-[7%] w-full shrink-0 items-center justify-center px-2">
      <HeaderDayText />
      <CloseIconButotn />
    </div>
  );
}
