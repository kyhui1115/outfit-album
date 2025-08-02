import { IoIosArrowBack, IoIosArrowDropleft } from "react-icons/io";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useIsModal from "@/_shared/store/isModal";
import Button from "@/_shared/ui/Button";

export default function BackButton() {
  const { setIsAlbumImage } = useIsModal();
  const isMobile = useIsMobile();

  const btnHandler = () => {
    setIsAlbumImage(false);
  };

  return (
    <Button
      onClick={btnHandler}
      className="flex h-full w-10 items-center justify-center"
    >
      <IoIosArrowBack className={`${isMobile ? "text-3xl" : "text-4xl"}`} />
    </Button>
  );
}
