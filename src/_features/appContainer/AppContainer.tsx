"use client";

import { ReactNode } from "react";

import useIsModal from "@/_shared/store/isModal";
import useImageUrls from "@/_shared/store/previewImageUrl";
import Header from "@/_shared/ui/Header";

import Modal from "../../_shared/ui/modal/Modal";
import AlbumModal from "../albumModal/AlbumModal";
import CalendarDayModal from "../calendarDayModal/CalendarDayModal";

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
    <div className="relative flex h-[100dvh] w-screen max-w-[600px] flex-col items-center justify-center bg-white">
      <Modal open={isCalendarDayModal} onClose={calendarCloseHandler}>
        {<CalendarDayModal />}
      </Modal>
      <Modal open={isAlbumModal} onClose={albumCloseHandler}>
        {<AlbumModal />}
      </Modal>
      <Header name="archive:" />
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
