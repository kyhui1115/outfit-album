import Image, { StaticImageData } from "next/image";

interface Props {
  imageUrl: string | StaticImageData;
}

export default function AlbumImage({ imageUrl }: Props) {
  return (
    <div className="flex aspect-square w-full items-center justify-center overflow-hidden">
      <Image
        src={imageUrl}
        alt="albumImage"
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}

{
  /* <Image
        src={imageUrl}
        alt="albumImage"
        className="h-full w-full"
        priority
      /> */
}
