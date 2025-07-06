"use client";

import { TbPhotoCheck } from "react-icons/tb";

import IconButton from "@/_shared/ui/IconButton";

export default function CheckButton() {
  return (
    <IconButton onClick={() => {}} className="h-10 w-10 rounded-full bg-white">
      <TbPhotoCheck />
    </IconButton>
  );
}
