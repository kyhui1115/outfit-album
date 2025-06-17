import TabBarItemButton from "@/_features/tabBar/TabBarItemButton";
import DIC from "@/_shared/dictionary";

export default function TabBarList() {
  return (
    <div className="border-darkgray flex h-[50px] w-full border-t">
      {DIC.tabBarList.map((tabBar, idx) => (
        <TabBarItemButton
          key={tabBar.name}
          icon={tabBar.icon}
          url={tabBar.url}
          idx={idx}
        />
      ))}
    </div>
  );
}
