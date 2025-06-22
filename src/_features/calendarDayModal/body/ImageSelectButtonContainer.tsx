import AlbumIconButton from "./AlbumIconButton";
import CloseButton from "./CloseButton";
import ClosetIconButton from "./ClosetIconButton";

export default function ImageSelectButtonContainer() {
  return (
    <div className="flex h-[24%] w-[50%] flex-col border bg-white">
      <div className="flex h-[65%] w-full">
        <AlbumIconButton />
        <ClosetIconButton />
      </div>
      <CloseButton />
    </div>
  );
}
