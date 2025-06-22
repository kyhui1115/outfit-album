import { create } from "zustand";

interface State {
  isCalendarDayModal: boolean;
  isPictureSelectModal: boolean;
  isConfirmModal: boolean;

  setIsCalendarDayModal: (
    isCalendarDayModal: boolean | ((prev: boolean) => boolean),
  ) => void;
  setIsPictureSelectModal: (
    isPictureSelectModal: boolean | ((prev: boolean) => boolean),
  ) => void;
  setIsConfirmModal: (
    isConfirmModal: boolean | ((prev: boolean) => boolean),
  ) => void;

  reset: () => void;
}

const useIsModal = create<State>()(set => ({
  isCalendarDayModal: false,
  isPictureSelectModal: false,
  isConfirmModal: false,

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
  setIsConfirmModal: isConfirmModal =>
    set(state => ({
      isConfirmModal:
        typeof isConfirmModal === "function"
          ? isConfirmModal(state.isConfirmModal)
          : isConfirmModal,
    })),

  reset: () =>
    set(() => ({
      isCalendarDayModal: false,
      isPictureSelectModal: false,
      isConfirmModal: false,
    })),
}));

export default useIsModal;
