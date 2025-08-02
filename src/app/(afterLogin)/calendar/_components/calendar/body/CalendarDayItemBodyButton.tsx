import Image, { StaticImageData } from "next/image";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useCalendarStore from "@/_shared/store/calendar";
import useImage from "@/_shared/store/Image";
import useIsIgnoreClick from "@/_shared/store/isIgnoreClick";
import useIsModal from "@/_shared/store/isModal";
import Button from "@/_shared/ui/Button";

interface Props {
  date: number;
  imageUrl: StaticImageData | null;
  id: string;
}

export default function CalendarDayItemBodyButton({
  date,
  imageUrl,
  id,
}: Props) {
  const isMobile = useIsMobile();

  const { setDay } = useCalendarStore();
  const { setIsCalendarDayModal } = useIsModal();
  const { isIgnoreClick } = useIsIgnoreClick();
  const { setId } = useImage();

  const buttonHandler = () => {
    if (isIgnoreClick) return;

    setDay(date);
    setIsCalendarDayModal(true);
    setId(id);
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
          priority={true}
          loading="eager"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      )}
    </Button>
  );
}
