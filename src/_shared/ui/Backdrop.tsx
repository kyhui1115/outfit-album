"use client";

interface Props {
  onClickFn: () => void;
  zIndex: string;
}

export default function BackDrop({ onClickFn, zIndex }: Props) {
  return (
    <button
      className={`bg-darkgray absolute top-0 left-0 h-full w-full opacity-70 ${zIndex}`}
      onClick={onClickFn}
    />
  );
}
