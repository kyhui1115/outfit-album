import CalendarDayModalContainer from "@/_features/calendarDayModal/CalendarDayModalContainer";
import TabBarList from "@/_features/tabBar/TabBarList";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <div className="flex h-full w-full justify-center overflow-x-hidden">
        {children}
      </div>
      <TabBarList />
    </div>
  );
}
