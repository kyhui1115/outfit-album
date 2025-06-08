"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import naver from "@/_shared/assets/naver.png";
import Button from "@/_shared/ui/Button";

export default function NaverLoginButton() {
  return (
    <Button className="relative flex h-14 items-center justify-center rounded-[6px] bg-[#03C75A]">
      <Image
        className="absolute left-4"
        src={naver.src}
        alt="Login with NAVER"
        width="20"
        height="20"
      />
      <span className="font-semibold">Login with NAVER</span>
    </Button>
  );
}
