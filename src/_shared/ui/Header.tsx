interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center pl-3.5">
      <span className="font-semibold">{name}</span>
    </div>
  );
}
