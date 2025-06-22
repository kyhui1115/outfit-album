import { FaPlus } from "react-icons/fa6";

import useIsModal from "@/_shared/store/isModal";
import Button from "@/_shared/ui/Button";

export default function AddIconButton() {
  const { setIsConfirmModal } = useIsModal();

  return (
    <Button
      className="rounded-md bg-indigo-200 px-5 py-1.5 text-sm"
      onClick={() => setIsConfirmModal(true)}
    >
      <FaPlus />
    </Button>
  );
}
