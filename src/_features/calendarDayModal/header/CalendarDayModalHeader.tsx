import CloseButton from "./CloseButton";
import HeaderDayText from "./HeaderDayText";

export default function CalendarDayModalHeader() {
  return (
    <div className="relative flex h-[7%] w-full shrink-0 items-center justify-center rounded-t-md bg-yellow-300 px-2">
      <HeaderDayText />
      <CloseButton />
    </div>
  );
}
