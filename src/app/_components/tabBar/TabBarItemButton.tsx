"use client";

import { usePathname, useRouter } from "next/navigation";

import Button from "@/_shared/ui/Button";
import { isPWA } from "@/_shared/utils/isPWA";

interface Props {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  url: string;
}

export default function TabBarItemButton({ icon, url, activeIcon }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Button
      className={`flex w-full items-center justify-center ${isPWA() ? "pb-6" : ""}`}
      onClick={() => router.push(url)}
    >
      {pathname === url ? activeIcon : icon}
    </Button>
  );
}
