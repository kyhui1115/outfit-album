import { BiPhotoAlbum } from "react-icons/bi";

import usePreviewImageUrl from "@/_shared/store/previewImageUrl";
import resizeImage from "@/_shared/utils/resizeImage";

export default function AlbumIconButton() {
  const { setImageUrl } = usePreviewImageUrl();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);

      const result = await resizeImage(file);

      console.log(result);
    }
  };

  return (
    <label className="flex h-full w-full cursor-pointer items-center justify-center border-r">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      <BiPhotoAlbum className="text-xl" />
    </label>
  );
}
