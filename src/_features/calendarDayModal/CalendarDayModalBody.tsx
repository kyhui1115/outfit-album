import usePreviewImageUrl from "@/_shared/store/preViewImageUrl";

import AddIconButton from "./AddIconButton";
import ImageContainer from "./ImageContainer";

export default function CalendarDayModalBody() {
  const { imageUrl } = usePreviewImageUrl();

  return (
    <div className="flex h-full w-full flex-col items-center">
      <ImageContainer />
      <div className="flex h-[30%] w-full items-center justify-center">
        {imageUrl ? <AddIconButton /> : null}
      </div>
    </div>
  );
}
