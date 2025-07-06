"use client";

import { IoClose } from "react-icons/io5";

import useIsModal from "@/_shared/store/isModal";
import IconButton from "@/_shared/ui/IconButton";

export default function CloseButton() {
  const { setIsPictureSelectModal } = useIsModal();

  return (
    <IconButton onClick={() => setIsPictureSelectModal(false)} className="mr-1">
      <IoClose />
    </IconButton>
  );
}
