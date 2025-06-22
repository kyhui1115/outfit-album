import { create } from "zustand";

interface State {
  imageUrl: string;

  setImageUrl: (imageUrl: string) => void;
}

const usePreviewImageUrl = create<State>(set => ({
  imageUrl: "",

  setImageUrl: imageUrl => set({ imageUrl }),
}));

export default usePreviewImageUrl;
