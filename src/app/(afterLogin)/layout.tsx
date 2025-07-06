import TabBarList from "@/_features/tabBar/TabBarList";
import Header from "@/_shared/ui/Header";
import CalendarDayModalContainer from "@/_shared/ui/modal/Modal";

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
