import Image, { StaticImageData } from "next/image";

import useImage from "@/_shared/store/Image";
import useIsModal from "@/_shared/store/isModal";

interface Props {
  imageUrl: string | StaticImageData;
  id: string;
}

export default function AlbumImage({ imageUrl, id }: Props) {
  const { setAlbumImage, setAlbumImageRect, setImage } = useImage();
  const { setIsAlbumModal, setIsAlbumImage, isCalendarDayModal } = useIsModal();

  const btnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const parentRect = parent.getBoundingClientRect();
      const rect = e.currentTarget.getBoundingClientRect();

      setAlbumImageRect({
        x: rect.left - parentRect.left,
        y: rect.top - parentRect.top,
        width: rect.width,
        height: rect.height,
      });
    } else {
      setAlbumImageRect(e.currentTarget.getBoundingClientRect());
    }

    if (isCalendarDayModal) {
      setImage(imageUrl);
      setIsAlbumModal(false);
    } else {
      setAlbumImage(imageUrl);
      setIsAlbumImage(true);
    }
  };

  return (
    <button
      className={`aspect-square w-full items-center justify-center overflow-hidden`}
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
