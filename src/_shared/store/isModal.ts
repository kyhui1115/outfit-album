import { create } from "zustand";

interface State {
  isCalendarDayModal: boolean;
  isPictureSelectModal: boolean;
  isAlbumModal: boolean;
  isImage: boolean;
  isAlbumImage: boolean;

  setIsCalendarDayModal: (
    isCalendarDayModal: boolean | ((prev: boolean) => boolean),
  ) => void;
  setIsPictureSelectModal: (
    isPictureSelectModal: boolean | ((prev: boolean) => boolean),
  ) => void;

  setIsAlbumModal: (
    isAlbumModal: boolean | ((prev: boolean) => boolean),
  ) => void;
  setIsImage: (isImage: boolean) => void;
  setIsAlbumImage: (isAlbumImage: boolean) => void;

  reset: () => void;
}

const useIsModal = create<State>()(set => ({
  isCalendarDayModal: false,
  isPictureSelectModal: false,
  isAlbumModal: false,
  isImage: false,
  isAlbumImage: false,

  setIsCalendarDayModal: isCalendarDayModal =>
    set(state => ({
      isCalendarDayModal:
        typeof isCalendarDayModal === "function"
          ? isCalendarDayModal(state.isCalendarDayModal)
          : isCalendarDayModal,
    })),
  setIsPictureSelectModal: isPictureSelectModal =>
    set(state => ({
      isPictureSelectModal:
        typeof isPictureSelectModal === "function"
          ? isPictureSelectModal(state.isPictureSelectModal)
          : isPictureSelectModal,
    })),
  setIsAlbumModal: isAlbumModal =>
    set(state => ({
      isAlbumModal:
        typeof isAlbumModal === "function"
          ? isAlbumModal(state.isAlbumModal)
          : isAlbumModal,
    })),
  setIsImage: isImage =>
    set(() => ({
      isImage,
    })),
  setIsAlbumImage: isAlbumImage =>
    set(() => ({
      isAlbumImage,
    })),

  reset: () =>
    set(() => ({
      isCalendarDayModal: false,
      isPictureSelectModal: false,
      isAlbumModal: false,
      isImage: false,
      isAlbumImage: false,
    })),
}));

export default useIsModal;
