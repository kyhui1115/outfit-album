import { BiPhotoAlbum } from "react-icons/bi";

import usePreviewImageUrl from "@/_shared/store/preViewImageUrl";

export default function AlbumIconButton() {
  const { setImageUrl } = usePreviewImageUrl();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
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
