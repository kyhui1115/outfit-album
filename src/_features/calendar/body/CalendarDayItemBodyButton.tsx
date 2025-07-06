import Image, { StaticImageData } from "next/image";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useCalendarStore from "@/_shared/store/calendar";
import useIsIgnoreClick from "@/_shared/store/isIgnoreClick";
import useIsModal from "@/_shared/store/isModal";
import useImageUrls from "@/_shared/store/previewImageUrl";
import Button from "@/_shared/ui/Button";

interface Props {
  date: number;
  imageUrl: StaticImageData | null;
}

export default function CalendarDayItemBodyButton({ date, imageUrl }: Props) {
  const isMobile = useIsMobile();

  const { setDay } = useCalendarStore();
  const { setIsCalendarDayModal } = useIsModal();
  const { isIgnoreClick } = useIsIgnoreClick();
  const { setImage } = useImageUrls();

  const buttonHandler = () => {
    if (isIgnoreClick) return;

    setImage(imageUrl);
    setDay(date);
    setIsCalendarDayModal(true);
  };

  return (
    <Button
      className="relative flex h-[81%] w-full items-center justify-center"
      onClick={buttonHandler}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt=""
          fill
          className={`rounded-lg object-cover ${isMobile ? "p-0.5" : "p-1"}`}
          priority
        />
      )}
    </Button>
  );
}
