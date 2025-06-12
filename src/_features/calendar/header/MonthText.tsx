interface Props {
  month: number;
}

export default function MonthText({ month }: Props) {
  return <span className="font-semibold">{month}</span>;
}
