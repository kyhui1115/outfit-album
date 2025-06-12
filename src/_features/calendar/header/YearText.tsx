interface Props {
  year: number;
}

export default function YearText({ year }: Props) {
  return <span className="absolute top-2 right-2 text-xs">{year}</span>;
}
