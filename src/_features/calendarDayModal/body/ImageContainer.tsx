import Image from "next/image";

import useImageUrls from "@/_shared/store/previewImageUrl";

import ImageSelectContainer from "./ImageSelectContainer";

export default function ImageContainer() {
  const { image, previewImage } = useImageUrls();

  return (
    <div className="relative flex h-full w-full shrink-0 items-center justify-center">
      {image || previewImage ? (
        <Image
          src={(image || previewImage) as string}
          alt="preview"
          fill
          sizes="90vw"
          className="h-full w-full object-contain"
        />
      ) : (
        <ImageSelectContainer />
      )}
    </div>
  );
}
