"use client";

import Backdrop from "@/_shared/ui/modal/Backdrop";

interface Props {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export default function Modal({ children, open, onClose }: Props) {
  return (
    <>
      {open && (
        <>
          <Backdrop onClose={onClose} />
          {children}
        </>
      )}
    </>
  );
}
