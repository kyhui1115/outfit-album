import { FaMinus } from "react-icons/fa6";

import useIsModal from "@/_shared/store/isModal";
import usePreviewImageUrl from "@/_shared/store/previewImageUrl";
import Button from "@/_shared/ui/Button";

export default function CancelIconButton() {
  const { setImageUrl } = usePreviewImageUrl();
  const { setIsPictureSelectModal } = useIsModal();

  const btnHandler = () => {
    setImageUrl("");
    setIsPictureSelectModal(false);
  };

  return (
    <Button
      className="rounded-md bg-rose-200 px-5 py-1.5 text-sm"
      onClick={btnHandler}
    >
      <FaMinus />
    </Button>
  );
}
