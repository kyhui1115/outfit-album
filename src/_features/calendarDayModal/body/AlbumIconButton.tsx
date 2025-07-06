import { BiPhotoAlbum } from "react-icons/bi";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useBlob from "@/_shared/store/blob";
import useImageUrls from "@/_shared/store/previewImageUrl";
import resizeImage from "@/_shared/utils/resizeImage";

export default function AlbumIconButton() {
  const isMobile = useIsMobile();
  const { setPreviewImage } = useImageUrls();
  const { setBlob } = useBlob();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);

      const result = await resizeImage(file);

      setBlob(result);
    }
  };

  return (
    <label className="border-beige-500 flex h-full w-full cursor-pointer items-center justify-center border-r">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      <BiPhotoAlbum className={`${isMobile ? "text-xl" : "text-2xl"}`} />
    </label>
  );
}
