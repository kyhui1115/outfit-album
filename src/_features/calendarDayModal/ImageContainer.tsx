import Image from "next/image";

import usePreviewImageUrl from "@/_shared/store/previewImageUrl";

import ImageSelectContainer from "./ImageSelectContainer";

export default function ImageContainer() {
  const { imageUrl } = usePreviewImageUrl();

  return (
    <div className="bg-beige-normal relative mt-[10%] flex h-[70%] w-[70%] items-center justify-center">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="preview"
          fill
          className="rounded-md object-contain"
        />
      ) : (
        <ImageSelectContainer />
      )}
    </div>
  );
}
