"use client";

import usePreviewImageUrl from "@/_shared/store/previewImageUrl";
import BackDrop from "@/_shared/ui/Backdrop";

import useIsModal from "../../_shared/store/isModal";
import CalendarDayModal from "./CalendarDayModal";

export default function CalendarDayModalContainer() {
  const { isCalendarDayModal, reset } = useIsModal();
  const { setImageUrl } = usePreviewImageUrl();

  const backDropHandler = () => {
    reset();
    setImageUrl("");
  };

  return (
    <>
      {isCalendarDayModal && (
        <>
          <BackDrop onClickFn={backDropHandler} zIndex="z-20" />
          <CalendarDayModal />
        </>
      )}
    </>
  );
}
