"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import kakao from "@/_shared/assets/kakao.png";
import Button from "@/_shared/ui/Button";

export default function KakaoLoginButton() {
  const router = useRouter();

  return (
    <Button
      className="relative flex h-14 items-center justify-center rounded-[6px] bg-[#FEE500]"
      onClick={() => router.push("/calendar")}
    >
      <Image
        className="absolute left-4"
        src={kakao.src}
        alt="Login with Kakao"
        width="20"
        height="20"
      />
      <span className="font-semibold text-gray-900">Login with Kakao</span>
    </Button>
  );
}
