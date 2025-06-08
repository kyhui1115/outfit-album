import LoginButtonContainer from "@/_features/auth/LoginButtonContainer";
import Title from "@/_shared/ui/Title";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center pt-40">
      <Title text="sign up / log in" />
      <LoginButtonContainer />
    </div>
  );
}
