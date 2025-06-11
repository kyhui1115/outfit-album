import TabBarItem from "@/_features/tabBar/TabBarItem";
import DIC from "@/_shared/dictionary";

export default function TabBar() {
  return (
    <div className="border-darkgray fixed bottom-0 flex h-[50px] w-full max-w-[1024px] border-t">
      {DIC.tabBarList.map((tabBar, idx) => (
        <TabBarItem
          key={tabBar.name}
          icon={tabBar.icon}
          url={tabBar.url}
          idx={idx}
        />
      ))}
    </div>
  );
}
