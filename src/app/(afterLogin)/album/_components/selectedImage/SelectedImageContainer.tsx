import React, { useEffect, useState } from "react";

import useImage from "@/_shared/store/Image";
import useIsModal from "@/_shared/store/isModal";
import Header from "@/_shared/ui/Header";

import Background from "./Background";
import Body from "./Body";
import Bottom from "./Bottom";

export default function SelectedImageContainer() {
  const [zoomed, setZoomed] = useState(false);
  const [show, setShow] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const { albumImage } = useImage();
  const { isAlbumImage } = useIsModal();

  useEffect(() => {
    if (isAlbumImage) {
      setShow(true);
      setZoomed(false);
      setTimeout(() => setZoomed(true), 50);
    } else {
      setZoomed(false);
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAlbumImage]);

  return (
    <>
      {show && (
        <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center">
          <Background zoomed={zoomed} isDragging={isDragging} />
          <Header name="archive:" />
          <Body
            albumImage={albumImage}
            zoomed={zoomed}
            setIsDragging={setIsDragging}
          />
          <Bottom />
        </div>
      )}
    </>
  );
}
