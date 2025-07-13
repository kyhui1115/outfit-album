import { PiTrashSimpleBold } from "react-icons/pi";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import Button from "@/_shared/ui/Button";

export default function RemoveButton() {
  const isMobile = useIsMobile();
  return (
    <Button className="justify-center` flex h-full w-10 items-center pr-1">
      <PiTrashSimpleBold className={`${isMobile ? "text-2xl" : "text-3xl"}`} />
    </Button>
  );
}
