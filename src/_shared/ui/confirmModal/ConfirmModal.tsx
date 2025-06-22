import CancelButton from "./CancelButton";
import ConfirmModalText from "./ConfirmModalText";
import OkButton from "./OkButton";

interface Props {
  text: string;
  okFn: () => void;
  cancelFn?: () => void;
}

export default function ConfirmModal({ text, okFn, cancelFn }: Props) {
  return (
    <div className="absolute top-[40%] z-30 flex h-[100px] w-50 flex-col bg-white">
      <div className="flex h-full w-full items-center justify-center">
        <ConfirmModalText text={text} />
      </div>
      <div className="flex h-12 w-full">
        <CancelButton cancelFn={cancelFn} />
        <OkButton okFn={okFn} />
      </div>
    </div>
  );
}
