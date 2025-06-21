"use client";

import { IoClose } from "react-icons/io5";

import useIsModal from "@/_shared/store/isModal";
import Button from "@/_shared/ui/Button";

export default function CloseIconButotn() {
  const { setIsCalendarDayModal, setIsPictureSelectModal } = useIsModal();

  const buttonhandler = () => {
    setIsCalendarDayModal(false);
    setIsPictureSelectModal(false);
  };

  return (
    <Button onClick={buttonhandler} className="absolute right-[1%]">
      <IoClose className="text-xl" />
    </Button>
  );
}
