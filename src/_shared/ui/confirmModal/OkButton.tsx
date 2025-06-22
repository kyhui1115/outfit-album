import { CgShapeCircle } from "react-icons/cg";

import Button from "../Button";

interface Props {
  okFn: () => void;
}

export default function OkButton({ okFn }: Props) {
  return (
    <Button className="w-full bg-indigo-200" onClick={okFn}>
      <CgShapeCircle />
    </Button>
  );
}
