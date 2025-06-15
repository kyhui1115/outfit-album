interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  return (
    <div className="fixed top-0 z-10 flex h-14 w-[500px] items-center bg-white pl-3.5">
      <span className="font-semibold">{name}</span>
    </div>
  );
}
