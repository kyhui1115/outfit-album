import { CgShapeCircle } from "react-icons/cg";

import useModal from "@/_shared/store/message";

import Button from "../Button";

export default function OkButton() {
  const { okFn, setMessage } = useModal();

  const btnHandler = () => {
    okFn();
    setMessage("");
  };

  return (
    <Button className="w-full bg-indigo-200" onClick={btnHandler}>
      <CgShapeCircle />
    </Button>
  );
}
