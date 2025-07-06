interface Props {
  text: string;
}

export default function SubTitle({ text }: Props) {
  return <h1 className="text-lg font-semibold">{text}</h1>;
}
