import KakaoLoginButton from "./KakaoLoginButton";
import NaverLoginButton from "./NaverLoginButton";

export default function LoginButtonContainer() {
  return (
    <div className="mt-auto mb-10 flex w-full max-w-[518px] flex-col gap-3">
      <KakaoLoginButton />
      <NaverLoginButton />
    </div>
  );
}
