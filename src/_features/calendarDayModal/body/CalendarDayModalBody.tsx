import usePreviewImageUrl from "@/_shared/store/previewImageUrl";

import AddAndCancelButtonContainer from "./AddAndCancelButtonContainer";
import ImageContainer from "./ImageContainer";

export default function CalendarDayModalBody() {
  const { imageUrl } = usePreviewImageUrl();

  return (
    <div className="flex h-full w-full flex-col items-center">
      <ImageContainer />
      <div className="flex h-[30%] w-full items-center justify-center">
        {imageUrl ? <AddAndCancelButtonContainer /> : null}
      </div>
    </div>
  );
}
