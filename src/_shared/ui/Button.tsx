interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ className, children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${className} flex items-center justify-center`}
    >
      {children}
    </button>
  );
}
