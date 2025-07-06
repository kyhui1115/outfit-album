"use client";

import TabBarItemButton from "@/_features/tabBar/TabBarItemButton";
import DIC from "@/_shared/dictionary";
import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import { useIsPad } from "@/_shared/hooks/useIsPad";
import { isPWA } from "@/_shared/utils/isPWA";

export default function TabBarList() {
  const isMobile = useIsMobile();
  const isPad = useIsPad();

  return (
    <div
      className={`bg-beige-300 border-border-default flex h-[45px] w-full shrink-0 border-t ${isMobile || isPad ? (isPWA() ? "h-[70px]" : "h-[45px]") : "h-[50px]"}`}
    >
      {DIC.tabBarList.map(tabBar => (
        <TabBarItemButton
          key={tabBar.name}
          icon={tabBar.icon}
          activeIcon={tabBar.activeIcon}
          url={tabBar.url}
        />
      ))}
    </div>
  );
}
