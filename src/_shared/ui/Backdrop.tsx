"use client";

import useIsModal from "../store/isModal";

export default function BackDrop() {
  const { setIsCalendarDayModal, setIsPictureSelectModal } = useIsModal();

  const buttonhandler = () => {
    setIsCalendarDayModal(false);
    setIsPictureSelectModal(false);
  };

  return (
    <button
      className="bg-darkgray fixed top-0 left-0 z-10 h-full w-full opacity-70"
      onClick={buttonhandler}
    />
  );
}
