import { ReactNode } from "react";

import Header from "@/_shared/ui/Header";

import CalendarDayModalContainer from "../calendarDayModal/CalendarDayModalContainer";

interface Props {
  children: ReactNode;
}

export default function AppContainer({ children }: Props) {
  return (
    <div className="relative flex h-[100dvh] w-screen max-w-[760px] flex-col items-center justify-center bg-white">
      <CalendarDayModalContainer />
      <Header name="OUTFIT" />
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
