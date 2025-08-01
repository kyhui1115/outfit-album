"use client";

import { ReactNode } from "react";

import useImageUrls from "@/_shared/store/Image";
import useIsModal from "@/_shared/store/isModal";
import Header from "@/_shared/ui/Header";

import Modal from "../../../_shared/ui/modal/Modal";
import AlbumModal from "../../(afterLogin)/album/_components/albumModal/AlbumModal";
import CalendarDayModal from "../../(afterLogin)/calendar/_components/calendarDayModal/CalendarDayModal";

interface Props {
  children: ReactNode;
}

export default function AppContainer({ children }: Props) {
  const {
    isCalendarDayModal,
    isAlbumModal,
    reset: modalReset,
    setIsAlbumModal,
  } = useIsModal();
  const { reset: imageReset } = useImageUrls();
  const calendarCloseHandler = () => {
    modalReset();
    imageReset();
  };

  const albumCloseHandler = () => {
    setIsAlbumModal(false);
  };

  return (
    <div className="border-border-default relative flex h-[100dvh] w-screen max-w-[600px] flex-col items-center justify-center bg-white">
      <Modal open={isCalendarDayModal} onClose={calendarCloseHandler}>
        {<CalendarDayModal />}
      </Modal>
      <Modal open={isAlbumModal} onClose={albumCloseHandler}>
        {<AlbumModal />}
      </Modal>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
