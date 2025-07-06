"use client";

import useImageUrls from "../../store/Image";
import useIsModal from "../../store/isModal";

interface Props {
  onClose: () => void;
}

export default function Backdrop({ onClose }: Props) {
  return (
    <button
      className={`absolute top-0 left-0 z-10 h-full w-full bg-black opacity-30`}
      onClick={onClose}
    />
  );
}
