"use client";

import useIsModal from "../store/isModal";

export default function BackDrop() {
  const { setIsModal } = useIsModal();

  return (
    <button
      className="bg-darkgray fixed top-0 left-0 z-10 h-full w-full opacity-70"
      onClick={() => setIsModal(false)}
    />
  );
}
