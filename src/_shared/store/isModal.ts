import { create } from "zustand";

interface CalendarState {
  isCalendarDayModal: boolean;
  isPictureSelectModal: boolean;

  setIsCalendarDayModal: (
    isCalendarDayModal: boolean | ((prev: boolean) => boolean),
  ) => void;
  setIsPictureSelectModal: (
    isPictureSelectModal: boolean | ((prev: boolean) => boolean),
  ) => void;
}

const useIsModal = create<CalendarState>()(set => ({
  isCalendarDayModal: false,
  isPictureSelectModal: false,

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
}));

export default useIsModal;
