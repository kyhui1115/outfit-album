import Button from "@/_shared/ui/Button";

interface Props {
  idx: number;
}

export default function CalendarEmptyDayItem({ idx }: Props) {
  return (
    <div
      className={`h-[80px] w-full border-b ${(idx + 1) % 7 === 0 ? "" : "border-r"} bg-beige-normal`}
    />
  );
}
