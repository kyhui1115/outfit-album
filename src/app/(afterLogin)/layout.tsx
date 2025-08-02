import Header from "@/_shared/ui/Header";

import TabBarList from "../_components/tabBar/TabBarList";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <Header name="archive:" />
      <div className="flex h-full w-full justify-center overflow-x-hidden">
        {children}
      </div>
      <TabBarList />
    </div>
  );
}
