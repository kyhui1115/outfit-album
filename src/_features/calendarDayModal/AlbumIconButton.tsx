import { BiPhotoAlbum } from "react-icons/bi";

import Button from "@/_shared/ui/Button";

export default function AlbumIconButton() {
  return (
    <Button className="h-full w-full border-r">
      <BiPhotoAlbum className="text-xl" />
    </Button>
  );
}
