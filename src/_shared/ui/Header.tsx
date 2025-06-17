interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  return (
    <div className="flex h-14 w-full items-center bg-white pl-3">
      <span className="font-semibold">{name}</span>
    </div>
  );
}
