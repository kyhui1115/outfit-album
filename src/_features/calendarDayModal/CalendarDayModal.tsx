"use client";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useImageUrls from "@/_shared/store/previewImageUrl";
import { isPWA } from "@/_shared/utils/isPWA";

import CalendarDayModalBody from "./body/CalendarDayModalBody";
import CheckButton from "./body/CheckButton";
import EditButton from "./body/EditButton";
import CalendarDayModalHeader from "./header/CalendarDayModalHeader";

export default function CalendarDayModal() {
  const isMobile = useIsMobile();
  const { image, previewImage } = useImageUrls();

  return (
    <>
      <div
        className={`absolute top-[20%] z-10 flex flex-col items-center rounded-md bg-white ${isMobile ? "h-[450px] w-[293px]" : "h-[599px] w-[390px]"}`}
      >
        <CalendarDayModalHeader />
        <CalendarDayModalBody />
      </div>

      <div
        className={`absolute z-10 ${isMobile && !isPWA() ? "bottom-[3%]" : "bottom-[15%]"} flex items-center justify-center gap-2`}
      >
        {image && <EditButton />}
        {previewImage && (
          <>
            <CheckButton />
          </>
        )}
      </div>
    </>
  );
}
