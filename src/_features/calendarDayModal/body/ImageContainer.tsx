import Image from "next/image";

import DIC from "@/_shared/dictionary";
import useImageUrls from "@/_shared/store/Image";

import ImageSelectContainer from "./ImageSelectContainer";

export default function ImageContainer() {
  const { image, id } = useImageUrls();
  const calendarImage = DIC.calendarData.filter(item => item.id === id)[0]
    ?.image;

  return (
    <div className="relative flex h-full w-full shrink-0 items-center justify-center">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="90vw"
          className="h-full w-full object-contain"
        />
      ) : calendarImage ? (
        <Image
          src={calendarImage}
          alt=""
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
