import { FaPlus } from "react-icons/fa6";

import Button from "@/_shared/ui/Button";

export default function AddIconButton() {
  return (
    <Button className="rounded-md bg-indigo-200 px-5 py-1.5 text-sm">
      <FaPlus className="" />
    </Button>
  );
}
