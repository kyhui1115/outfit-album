import { redirect } from "next/navigation";

export default function Page() {
  redirect("/auth");

  // 인증 여부에 따라 페이지 리다이렉트
  return <></>;
}
