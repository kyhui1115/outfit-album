import useIsModal from "@/_shared/store/isModal";

import ImageSelectButtonContainer from "./ImageSelectButtonContainer";
import PlusIconButton from "./PlusIconButton";

export default function ImageSelect() {
  const { isPictureSelectModal } = useIsModal();

  return (
    <>
      {isPictureSelectModal ? (
        <ImageSelectButtonContainer />
      ) : (
        <PlusIconButton />
      )}
    </>
  );
}
