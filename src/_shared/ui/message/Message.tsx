import useMessage from "@/_shared/store/message";

import CancelButton from "./CancelButton";
import MessageText from "./MessageText";
import OkButton from "./OkButton";

export default function Message() {
  const { message } = useMessage();

  return (
    <>
      {message && (
        <div className="absolute top-[40%] z-30 flex h-[100px] w-50 flex-col bg-white">
          <div className="flex h-full w-full items-center justify-center">
            <MessageText />
          </div>
          <div className="flex h-12 w-full">
            <CancelButton />
            <OkButton />
          </div>
        </div>
      )}
    </>
  );
}
