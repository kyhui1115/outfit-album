import useIsModal from "@/_shared/store/isModal";

import BackDrop from "../Backdrop";
import ConfirmModal from "./ConfirmModal";

interface Props {
  okFn: () => void;
}

export default function ConfirmModalContainer({ okFn }: Props) {
  const { isConfirmModal, setIsConfirmModal } = useIsModal();

  const backDropHandler = () => {
    setIsConfirmModal(false);
  };

  return (
    <>
      {isConfirmModal && (
        <>
          <BackDrop onClickFn={backDropHandler} zIndex="z-20" />
          <ConfirmModal text="are you sure?" okFn={okFn} />
        </>
      )}
    </>
  );
}
