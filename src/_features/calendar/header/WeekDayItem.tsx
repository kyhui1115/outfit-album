interface Props {
  day: string;
}

export default function WeekDayItem({ day }: Props) {
  return (
    <div key={day} className="flex w-full justify-center">
      <span className="text-darkgray text-xs">{day}</span>
    </div>
  );
}
