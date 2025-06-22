import { create } from "zustand";

interface CalendarState {
  isIgnoreClick: boolean;

  setIsIgnoreClick: (
    isIgnoreClick: boolean | ((prev: boolean) => boolean),
  ) => void;
}

const useIsIgnoreClick = create<CalendarState>()(set => ({
  isIgnoreClick: false,

  setIsIgnoreClick: isIgnoreClick =>
    set(state => ({
      isIgnoreClick:
        typeof isIgnoreClick === "function"
          ? isIgnoreClick(state.isIgnoreClick)
          : isIgnoreClick,
    })),
}));

export default useIsIgnoreClick;
