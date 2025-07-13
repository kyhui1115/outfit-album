import BackButton from "./BackButton";
import RemoveButton from "./RemoveButton";

export default function Header() {
  return (
    <div className="z-20 flex h-14 w-full shrink-0 items-center justify-between">
      <BackButton />
      <RemoveButton />
    </div>
  );
}
