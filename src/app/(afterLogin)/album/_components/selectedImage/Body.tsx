import React, { CSSProperties, useState } from "react";
import Image, { StaticImageData } from "next/image";

import useImage from "@/_shared/store/Image";
import useIsModal from "@/_shared/store/isModal";

interface Props {
  albumImage: StaticImageData | string | null;
  zoomed: boolean;
  setIsDragging?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Body({ albumImage, zoomed, setIsDragging }: Props) {
  const { setIsAlbumImage } = useIsModal();
  const { albumImageRect } = useImage();

  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const [dragY, setDragY] = useState<number>(0);
  const [isDragging, _setIsDragging] = useState(false);

  const style: CSSProperties = zoomed
    ? {
        width: "100%",
        height: "100%",
        top: dragY,
        left: 0,
        objectFit: "cover" as CSSProperties["objectFit"],
        transition: isDragging
          ? "none"
          : "top 0.3s, left 0.3s, width 0.3s, height 0.3s",
      }
    : {
        width: albumImageRect?.width,
        height: albumImageRect?.height,
        top: albumImageRect?.y,
        left: albumImageRect?.x,
        objectFit: "cover" as CSSProperties["objectFit"],
        transition: "top 0.3s, left 0.3s, width 0.3s, height 0.3s",
      };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!zoomed) return;
    _setIsDragging(true);
    if (setIsDragging) setIsDragging(true);
    setDragStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || dragStartY === null) return;
    const deltaY = e.touches[0].clientY - dragStartY;
    setDragY(deltaY > 0 ? deltaY : 0);
  };

  const handleTouchEnd = () => {
    if (dragY > 120) {
      setIsAlbumImage(false);
    }
    _setIsDragging(false);
    if (setIsDragging) setIsDragging(false);
    setDragY(0);
    setDragStartY(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!zoomed) return;
    _setIsDragging(true);
    if (setIsDragging) setIsDragging(true);
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isDragging || dragStartY === null) return;
    const deltaY = e.clientY - dragStartY;
    setDragY(deltaY > 0 ? deltaY : 0);
  };

  const handleMouseUp = (e?: React.MouseEvent) => {
    if (e) { e.preventDefault(); }
    if (dragY > 120) {
      setIsAlbumImage(false);
    }
    _setIsDragging(false);
    if (setIsDragging) setIsDragging(false);
    setDragY(0);
    setDragStartY(null);
  };

  return (
    <div className="relative h-full w-full">
      {albumImage && (
        <Image
          src={albumImage}
          alt=""
          className="absolute object-cover duration-300 ease-in-out"
          style={style}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={isDragging ? handleMouseMove : undefined}
          onMouseUp={handleMouseUp}
          draggable={false}
        />
      )}
    </div>
  );
}
