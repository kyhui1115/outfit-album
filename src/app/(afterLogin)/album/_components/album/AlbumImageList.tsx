"use client";

import DIC from "@/_shared/dictionary";
import AlbumImage from "@/app/(afterLogin)/album/_components/album/AlbumImage";

import SelectedImageContainer from "../selectedImage/SelectedImageContainer";

export default function AlbumImageList() {
  return (
    <div className="grid h-full w-full grid-cols-5 content-start gap-[0.1rem]">
      {DIC.albumImages.map(image => (
        <AlbumImage key={image.id} imageUrl={image.imageUrl} id={image.id} />
      ))}
      <SelectedImageContainer />
    </div>
  );
}
