import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useCalendarStore from "@/_shared/store/calendar";
import useIsIgnoreClick from "@/_shared/store/isIgnoreClick";
import useIsModal from "@/_shared/store/isModal";
import Button from "@/_shared/ui/Button";

interface Props {
  date: number;
}

export default function CalendarDayItemBodyButton({ date }: Props) {
  const isMobile = useIsMobile();

  const { setDay } = useCalendarStore();
  const { setIsCalendarDayModal } = useIsModal();
  const { isIgnoreClick } = useIsIgnoreClick();

  const buttonHandler = () => {
    if (isIgnoreClick) return;

    setDay(date);
    setIsCalendarDayModal(true);
  };

  return (
    <Button
      className={`${isMobile ? "h-[75%]" : "h-[79%]"} w-full`}
      onClick={buttonHandler}
    />
  );
}
