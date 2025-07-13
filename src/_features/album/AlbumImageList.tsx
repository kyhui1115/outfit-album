"use client";

import AlbumImage from "@/_features/album/AlbumImage";
import DIC from "@/_shared/dictionary";

import SelectedImageContainer from "./selectedImage/SelectedImageContainer";

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
