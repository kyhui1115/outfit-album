"use client";

import useIsModal from "../store/isModal";
import usePreviewImageUrl from "../store/preViewImageUrl";

export default function BackDrop() {
  const { setIsCalendarDayModal, setIsPictureSelectModal } = useIsModal();
  const { setImageUrl } = usePreviewImageUrl();

  const buttonhandler = () => {
    setIsCalendarDayModal(false);
    setIsPictureSelectModal(false);
    setImageUrl("");
  };

  return (
    <button
      className="bg-darkgray fixed top-0 left-0 z-10 h-full w-full opacity-70"
      onClick={buttonhandler}
    />
  );
}
