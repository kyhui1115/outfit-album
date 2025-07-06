interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ className, children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
