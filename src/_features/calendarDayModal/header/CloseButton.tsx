"use client";

import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

import useIsModal from "@/_shared/store/isModal";
import useImageUrls from "@/_shared/store/previewImageUrl";
import IconButton from "@/_shared/ui/IconButton";

export default function CloseButton() {
  const { reset: modalReset } = useIsModal();
  const { reset: imageReset } = useImageUrls();

  const buttonhandler = () => {
    modalReset();
    imageReset();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        buttonhandler();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <IconButton onClick={buttonhandler} className="absolute right-[2%]">
      <IoClose />
    </IconButton>
  );
}
