"use client";

import { IoClose } from "react-icons/io5";

import useImageUrls from "@/_shared/store/previewImageUrl";
import IconButton from "@/_shared/ui/IconButton";

export default function CancelButton() {
  const { setImage } = useImageUrls();
  const editButtonHandler = () => {
    setImage(null);
  };

  return (
    <IconButton
      onClick={editButtonHandler}
      className="h-10 w-10 rounded-full bg-white"
    >
      <IoClose />
    </IconButton>
  );
}
