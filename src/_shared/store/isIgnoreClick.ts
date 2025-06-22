import { create } from "zustand";

interface State {
  isIgnoreClick: boolean;

  setIsIgnoreClick: (
    isIgnoreClick: boolean | ((prev: boolean) => boolean),
  ) => void;
}

const useIsIgnoreClick = create<State>()(set => ({
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
