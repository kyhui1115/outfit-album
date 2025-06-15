interface Props {
  date: number;
}

export default function CalendarDayItemHeader({ date }: Props) {
  return (
    <div className="bg-yellow-normal flex h-5 w-full items-center justify-end border-b">
      <span className="mr-1 text-xs">{date}</span>
    </div>
  );
}
