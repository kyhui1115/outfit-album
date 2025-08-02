"use client";

import { TbPhotoEdit } from "react-icons/tb";

import useImageUrls from "@/_shared/store/Image";
import IconButton from "@/_shared/ui/IconButton";

export default function EditButton() {
  const { reset } = useImageUrls();
  const editButtonHandler = () => {
    reset();
  };

  return (
    <IconButton
      onClick={editButtonHandler}
      className="h-10 w-10 rounded-full bg-white"
    >
      <TbPhotoEdit />
    </IconButton>
  );
}
