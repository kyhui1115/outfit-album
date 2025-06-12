"use client";

import { usePathname, useRouter } from "next/navigation";

import Button from "@/_shared/ui/Button";

interface Props {
  icon: React.ReactNode;
  url: string;
  idx: number;
}

export default function TabBarItemButton({ icon, url, idx }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Button
      className={`flex w-full items-center justify-center ${idx === 0 ? "border-darkgray border-r" : ""} ${url === pathname ? "bg-beige-light" : "bg-white"}`}
      onClick={() => router.push(url)}
    >
      {icon}
    </Button>
  );
}
