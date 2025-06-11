import Button from "@/_shared/ui/Button";

interface Props {
  icon: React.ReactNode;
  url: string;
  idx: number;
}

export default function TabBarItem({ icon, url, idx }: Props) {
  return (
    <div
      className={`flex w-full items-center justify-center ${idx === 0 ? "border-darkgray border-r" : ""}`}
    >
      <Button>{icon}</Button>
    </div>
  );
}
