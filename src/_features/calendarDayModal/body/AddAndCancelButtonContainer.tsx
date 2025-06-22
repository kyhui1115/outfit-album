import AddIconButton from "./AddIconButton";
import CancelIconButton from "./CancelIconButton";

export default function AddAndCancelButtonContainer() {
  return (
    <div className="flex gap-4">
      <CancelIconButton />
      <AddIconButton />
    </div>
  );
}
