import useCalendarStore from "@/_shared/store/calendar";
import useIsModal from "@/_shared/store/isModal";
import Button from "@/_shared/ui/Button";

interface Props {
  date: number;
}

export default function CalendarDayItemBodyButton({ date }: Props) {
  const { setDay } = useCalendarStore();
  const { setIsCalendarDayModal } = useIsModal();
  const buttonHandler = () => {
    setDay(date);
    setIsCalendarDayModal(true);
  };

  return (
    <Button className="h-full w-full" onClick={buttonHandler}>
      <></>
    </Button>
  );
}
