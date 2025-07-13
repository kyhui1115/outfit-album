import { CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";

import useImage from "@/_shared/store/Image";
import useIsModal from "@/_shared/store/isModal";

interface Props {
  albumImage: StaticImageData | string | null;
  zoomed: boolean;
}

export default function Body({ albumImage, zoomed }: Props) {
  const { setIsAlbumImage } = useIsModal();
  const { albumImageRect } = useImage();

  const style: CSSProperties = zoomed
    ? {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        objectFit: "cover" as CSSProperties["objectFit"],
      }
    : {
        width: albumImageRect?.width,
        height: albumImageRect?.height,
        top: albumImageRect?.y,
        left: albumImageRect?.x,
        objectFit: "cover" as CSSProperties["objectFit"],
      };

  return (
    <div className="relative h-full w-full">
      {albumImage && (
        <Image
          src={albumImage}
          alt=""
          className="absolute object-cover duration-300 ease-in-out"
          style={style}
        />
      )}
    </div>
  );
}
