interface Props {
  idx: number;
}

export default function CalendarDayItemHeader({ idx }: Props) {
  return (
    <div className="bg-yellow-normal flex h-5 w-full items-center justify-end border-b">
      <span className="mr-1 text-xs">{idx + 1}</span>
    </div>
  );
}
