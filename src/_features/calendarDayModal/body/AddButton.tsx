"use client";

import { TbPhotoPlus } from "react-icons/tb";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useIsModal from "@/_shared/store/isModal";
import IconButton from "@/_shared/ui/IconButton";

export default function AddButton() {
  const isMobile = useIsMobile();
  const { setIsPictureSelectModal } = useIsModal();

  const addImageButtonHandler = () => {
    setIsPictureSelectModal(true);
  };

  return (
    <IconButton onClick={addImageButtonHandler}>
      <TbPhotoPlus className={`${isMobile ? "text-2xl" : "text-3xl"}`} />
    </IconButton>
  );
}
