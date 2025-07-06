import { useRef, useState } from "react";

import useIsModal from "@/_shared/store/isModal";

import AlbumImageList from "../album/AlbumImageList";

export default function AlbumModal() {
  const { setIsAlbumModal } = useIsModal();
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 0) {
      setTranslateY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    if (translateY > 120) {
      if (modalRef.current) {
        modalRef.current.style.transition = "transform 0.3s ease-in";
        modalRef.current.style.transform = "translateY(100%)";

        setTimeout(() => {
          setIsAlbumModal(false);
        }, 300);
      }
    } else {
      setTranslateY(0);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;

    if (deltaY > 0) {
      setTranslateY(deltaY);
    }
  };

  const handleMouseUp = () => {
    handleTouchEnd();
  };

  return (
    <div
      ref={modalRef}
      className="animate-slide-up absolute bottom-0 z-10 h-[93%] w-full rounded-t-md bg-white"
      style={{
        transform: `translateY(${translateY}px)`,
        transition: isDragging ? "none" : "transform 0.3s ease-out",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* 드래그 핸들 영역 */}
      <div className="flex justify-center py-2.5">
        <div className="h-1 w-10 rounded-full bg-gray-300"></div>
      </div>

      <AlbumImageList />
    </div>
  );
}
