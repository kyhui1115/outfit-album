"use client";

import TabBarItemButton from "@/_features/tabBar/TabBarItemButton";
import DIC from "@/_shared/dictionary";
import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import { isPWA } from "@/_shared/utils/isPWA";

export default function TabBarList() {
  const isMobile = useIsMobile();

  return (
    <div
      className={`border-beige-300 bg-beige-100 flex h-[45px] w-full shrink-0 border-t ${isMobile ? (isPWA() ? "h-[70px]" : "h-[45px]") : "h-[50px]"}`}
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
