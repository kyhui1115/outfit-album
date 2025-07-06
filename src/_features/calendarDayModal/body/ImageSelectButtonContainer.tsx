import AlbumIconButton from "./AlbumIconButton";
import ClosetIconButton from "./ClosetIconButton";

export default function ImageSelectButtonContainer() {
  return (
    <div className="border-border-default flex h-[15%] w-[50%] rounded-md border bg-white">
      <AlbumIconButton />
      <ClosetIconButton />
    </div>
  );
}
