interface Props {
  zoomed: boolean;
}

export default function Background({ zoomed }: Props) {
  return (
    <div
      className="absolute top-0 left-0 h-full w-full bg-white"
      style={{
        opacity: zoomed ? 1 : 0,
        transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    />
  );
}
