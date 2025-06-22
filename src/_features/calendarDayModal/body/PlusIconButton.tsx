"use client";

import { FaPlus } from "react-icons/fa6";

import useIsModal from "@/_shared/store/isModal";
import Button from "@/_shared/ui/Button";

export default function PlusIconButton() {
  const { setIsPictureSelectModal } = useIsModal();

  return (
    <Button onClick={() => setIsPictureSelectModal(true)}>
      <FaPlus className="text-2xl" />
    </Button>
  );
}
