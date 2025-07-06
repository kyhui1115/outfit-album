"use client";

import Image, { StaticImageData } from "next/image";

import useImage from "@/_shared/store/Image";

interface Props {
  id: string;
  imageUrl: string | StaticImageData;
}

export default function AlbumImage({ imageUrl, id }: Props) {
  const { setId } = useImage();

  const btnHandler = () => {
    setId(id);
  };

  return (
    <button
      className="flex aspect-square w-full items-center justify-center overflow-hidden"
      onClick={btnHandler}
    >
      <Image
        src={imageUrl}
        alt="albumImage"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </button>
  );
}
