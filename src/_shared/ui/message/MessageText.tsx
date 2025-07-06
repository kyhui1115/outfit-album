import useMessage from "@/_shared/store/message";

export default function MessageText() {
  const { message } = useMessage();

  return <p className="font-semibold">{message}</p>;
}
