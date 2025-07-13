interface Props {
  zoomed: boolean;
  isDragging?: boolean;
}

export default function Background({ zoomed, isDragging }: Props) {
  let opacity = zoomed ? 1 : 0;
  if (isDragging) opacity = 0.7;

  return (
    <div
      className="absolute top-0 left-0 h-full w-full bg-white"
      style={{
        opacity,
        transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    />
  );
}
