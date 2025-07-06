import { create } from "zustand";

interface State {
  isCalendarDayModal: boolean;
  isPictureSelectModal: boolean;
  isAlbumModal: boolean;

  setIsCalendarDayModal: (
    isCalendarDayModal: boolean | ((prev: boolean) => boolean),
  ) => void;
  setIsPictureSelectModal: (
    isPictureSelectModal: boolean | ((prev: boolean) => boolean),
  ) => void;

  setIsAlbumModal: (
    isAlbumModal: boolean | ((prev: boolean) => boolean),
  ) => void;

  reset: () => void;
}

const useIsModal = create<State>()(set => ({
  isCalendarDayModal: false,
  isPictureSelectModal: false,
  isAlbumModal: false,

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

  reset: () =>
    set(() => ({
      isCalendarDayModal: false,
      isPictureSelectModal: false,
      isAlbumModal: false,
    })),
}));

export default useIsModal;
