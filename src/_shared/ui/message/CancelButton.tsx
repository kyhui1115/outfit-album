import { CgClose } from "react-icons/cg";

import useModal from "@/_shared/store/message";

import Button from "../Button";

export default function CancelButton() {
  const { cancelFn, setMessage } = useModal();

  const btnHandler = () => {
    cancelFn();
    setMessage("");
  };

  return (
    <Button className="w-full bg-rose-200" onClick={btnHandler}>
      <CgClose />
    </Button>
  );
}
