interface Props {
  text: string;
}

export default function ConfirmModalText({ text }: Props) {
  return <p className="font-semibold">{text}</p>;
}
