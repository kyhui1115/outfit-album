import useIsModal from "@/_shared/store/isModal";

import AddButton from "./AddButton";
import ImageSelectButtonContainer from "./ImageSelectButtonContainer";

export default function ImageSelect() {
  const { isPictureSelectModal } = useIsModal();

  return (
    <div className="bg-beige-100 flex h-full w-full items-center justify-center rounded-md">
      {isPictureSelectModal ? <ImageSelectButtonContainer /> : <AddButton />}
    </div>
  );
}
