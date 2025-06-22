import { create } from "zustand";

interface State {
  blob: Blob | null;

  setBlob: (imageUrl: Blob | null) => void;
}

const useBlob = create<State>(set => ({
  blob: null,

  setBlob: blob => set({ blob }),
}));

export default useBlob;
