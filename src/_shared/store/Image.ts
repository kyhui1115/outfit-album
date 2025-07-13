import { StaticImageData } from "next/image";
import { create } from "zustand";

interface State {
  id: string;
  image: StaticImageData | string | null;
  albumImage: StaticImageData | string | null;
  albumImageRect?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  setId: (id: string) => void;
  setImage: (image: StaticImageData | string | null) => void;
  setAlbumImage: (albumImage: StaticImageData | string | null) => void;
  setAlbumImageRect: (rect: {
    x: number;
    y: number;
    width: number;
    height: number;
  }) => void;

  reset: () => void;
}

const useImage = create<State>(set => ({
  id: "0",
  image: null,
  albumImage: null,
  albumImageRect: undefined,

  setId: id => set({ id }),
  setImage: image => set({ image }),
  setAlbumImage: albumImage => set({ albumImage }),
  setAlbumImageRect: rect => set({ albumImageRect: rect }),

  reset: () =>
    set({ image: null, id: "", albumImage: null, albumImageRect: undefined }),
}));

export default useImage;
