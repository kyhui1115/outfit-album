"use client";

import BackDrop from "@/_shared/ui/Backdrop";

import useIsModal from "../../_shared/store/isModal";
import CalendarDayModal from "./CalendarDayModal";

export default function CalendarDayModalContainer() {
  const { isCalendarDayModal } = useIsModal();

  return (
    <>
      {isCalendarDayModal && <BackDrop />}
      {isCalendarDayModal && <CalendarDayModal />}
    </>
  );
}
