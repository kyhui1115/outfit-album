interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  return (
    <div className="z-10 flex h-14 w-full shrink-0 items-center bg-white pl-3">
      <span className="font-semibold">{name}</span>
    </div>
  );
}
