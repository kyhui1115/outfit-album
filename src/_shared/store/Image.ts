import { StaticImageData } from "next/image";
import { create } from "zustand";

interface State {
  id: string;
  image: StaticImageData | string | null;

  setId: (id: string) => void;
  setImage: (image: StaticImageData | string | null) => void;

  reset: () => void;
}

const useImage = create<State>(set => ({
  id: "",
  image: null,

  setId: id => set({ id }),
  setImage: image => set({ image }),

  reset: () => set({ image: null, id: "" }),
}));

export default useImage;
