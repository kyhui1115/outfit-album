import useIsModal from "@/_shared/store/isModal";

import PictureSelectContainer from "./PictureSelectContainer";
import PlusButton from "./PlusButton";

export default function ImageContainer() {
  const { isPictureSelectModal } = useIsModal();

  return (
    <div className="bg-beige-normal mt-[6%] flex h-[70%] w-[88%] items-center justify-center rounded-md">
      {isPictureSelectModal ? <PictureSelectContainer /> : <PlusButton />}
    </div>
  );
}
