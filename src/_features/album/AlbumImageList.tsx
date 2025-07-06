import AlbumImage from "@/_features/album/AlbumImage";
import DIC from "@/_shared/dictionary";

export default function AlbumImageList() {
  return (
    <div className="grid w-full grid-cols-5 content-start gap-[0.1rem]">
      {DIC.albumImages.map(image => (
        <AlbumImage key={image.id} imageUrl={image.imageUrl} id={image.id} />
      ))}
    </div>
  );
}
