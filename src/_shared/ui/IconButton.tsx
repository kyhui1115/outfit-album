"use client";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import Button from "@/_shared/ui/Button";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({ children, onClick, className }: Props) {
  const isMobile = useIsMobile();

  return (
    <Button
      onClick={onClick}
      className={`${isMobile ? "text-lg" : "text-xl"} ${className}`}
    >
      {children}
    </Button>
  );
}
