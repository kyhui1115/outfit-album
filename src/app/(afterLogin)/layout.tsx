import TabBarList from "@/_features/tabBar/TabBarList";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex h-full w-full flex-col items-center">
      {children}
      <TabBarList />
    </div>
  );
}
