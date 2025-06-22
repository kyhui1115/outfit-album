import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useBlob from "@/_shared/store/blob";
import useCalendarStore from "@/_shared/store/calendar";
import useIsModal from "@/_shared/store/isModal";
import usePreviewImageUrl from "@/_shared/store/previewImageUrl";
import ConfirmModalContainer from "@/_shared/ui/confirmModal/ConfirmModalContainer";

import CalendarDayModalBody from "./body/CalendarDayModalBody";
import CalendarDayModalHeader from "./header/CalendarDayModalHeader";

export default function CalendarDayModal() {
  const isMobile = useIsMobile();

  const { reset } = useIsModal();
  const { year, month, day } = useCalendarStore();

  const { blob } = useBlob();
  const { setImageUrl } = usePreviewImageUrl();

  const imageSaveHandler = () => {
    console.log(year, month, day);
    console.log(blob);

    reset();
    setImageUrl("");
  };

  return (
    <div
      className={`absolute top-[20%] z-20 flex flex-col items-center bg-white ${isMobile ? "h-[450px] w-[293px]" : "h-[599px] w-[390px]"}`}
    >
      <ConfirmModalContainer okFn={imageSaveHandler} />
      <CalendarDayModalHeader />
      <CalendarDayModalBody />
    </div>
  );
}
