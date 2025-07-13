import BackButton from "./BackButton";
import RemoveButton from "./RemoveButton";

interface Props {
  zoomed: boolean;
}

export default function Header({ zoomed }: Props) {
  return (
    <div
      className="z-20 flex h-14 w-full shrink-0 items-center justify-between"
      style={{
        opacity: zoomed ? 1 : 0,
        transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <BackButton />
      <RemoveButton />
    </div>
  );
}
