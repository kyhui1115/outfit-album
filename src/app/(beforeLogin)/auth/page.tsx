import Title from "@/_shared/ui/Title";

import LoginButtonContainer from "./_components/LoginButtonContainer";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center px-4.5 pt-40">
      <Title text="archive:" />
      <LoginButtonContainer />
    </div>
  );
}
