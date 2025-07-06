import { StaticImageData } from "next/image";
import { create } from "zustand";

interface State {
  image: StaticImageData | string | null;
  previewImage: StaticImageData | string | null;

  setImage: (image: StaticImageData | string | null) => void;
  setPreviewImage: (previewImage: StaticImageData | string | null) => void;

  reset: () => void;
}

const useImageUrls = create<State>(set => ({
  image: null,
  previewImage: null,

  setImage: image => set({ image }),
  setPreviewImage: previewImage => set({ previewImage }),

  reset: () => set({ image: null, previewImage: null }),
}));

export default useImageUrls;
