import { CgClose } from "react-icons/cg";

import useIsModal from "@/_shared/store/isModal";

import Button from "../Button";

interface Props {
  cancelFn?: () => void;
}

export default function CancelButton({ cancelFn }: Props) {
  const { setIsConfirmModal } = useIsModal();

  return (
    <Button
      className="w-full bg-rose-200"
      onClick={() => {
        cancelFn && cancelFn();
        setIsConfirmModal(false);
      }}
    >
      <CgClose />
    </Button>
  );
}
