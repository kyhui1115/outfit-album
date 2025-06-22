"use client";

import useIsModal from "@/_shared/store/isModal";
import Button from "@/_shared/ui/Button";

export default function CloseButton() {
  const { setIsPictureSelectModal } = useIsModal();
  return (
    <Button
      className="flex h-[35%] w-full items-center justify-center border-t bg-rose-200 text-xs font-semibold"
      onClick={() => setIsPictureSelectModal(false)}
    >
      close
    </Button>
  );
}
