import { create } from "zustand";

interface State {
  okFn: () => void;
  cancelFn: () => void;
  message: string;

  setOkFn: (fn: (() => void) | undefined) => void;
  setCancelFn: (fn: (() => void) | undefined) => void;

  setMessage: (text: string) => void;
}

const useMessage = create<State>(set => ({
  okFn: () => {},
  cancelFn: () => {},
  message: "",

  setOkFn: fn => set({ okFn: fn ?? (() => {}) }),
  setCancelFn: fn => set({ cancelFn: fn ?? (() => {}) }),
  setMessage: text => set({ message: text }),
}));

export default useMessage;
