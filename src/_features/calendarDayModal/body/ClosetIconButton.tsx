import { PiCoatHanger } from "react-icons/pi";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useIsModal from "@/_shared/store/isModal";
import IconButton from "@/_shared/ui/IconButton";

export default function ClosetIconButton() {
  const isMobile = useIsMobile();
  const { setIsAlbumModal } = useIsModal();

  return (
    <IconButton onClick={() => setIsAlbumModal(true)} className="h-full w-full">
      <PiCoatHanger className={`${isMobile ? "text-xl" : "text-2xl"}`} />
    </IconButton>
  );
}
