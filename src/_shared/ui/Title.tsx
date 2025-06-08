interface Props {
  text: string;
}

export default function Title({ text }: Props) {
  return <h1 className="text-3xl font-semibold">{text}</h1>;
}
