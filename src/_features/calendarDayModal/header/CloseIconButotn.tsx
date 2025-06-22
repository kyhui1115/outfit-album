"use client";

import { IoClose } from "react-icons/io5";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useIsModal from "@/_shared/store/isModal";
import usePreviewImageUrl from "@/_shared/store/previewImageUrl";
import Button from "@/_shared/ui/Button";

export default function CloseIconButotn() {
  const isMobile = useIsMobile();

  const { reset } = useIsModal();
  const { setImageUrl } = usePreviewImageUrl();

  const buttonhandler = () => {
    reset();
    setImageUrl("");
  };

  return (
    <Button onClick={buttonhandler} className="absolute right-[2%]">
      <IoClose className={` ${isMobile ? "text-md" : "text-xl"}`} />
    </Button>
  );
}
