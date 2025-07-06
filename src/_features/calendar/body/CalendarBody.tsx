import dayjs from "dayjs";

import image1 from "@/_shared/assets/images/image1.jpeg";
import image2 from "@/_shared/assets/images/image2.jpeg";
import image3 from "@/_shared/assets/images/image3.jpeg";
import image4 from "@/_shared/assets/images/image4.jpeg";
import image5 from "@/_shared/assets/images/image5.jpeg";
import image6 from "@/_shared/assets/images/image6.jpeg";
import image7 from "@/_shared/assets/images/image7.jpeg";
import image8 from "@/_shared/assets/images/image8.jpeg";
import image9 from "@/_shared/assets/images/image9.jpeg";
import image10 from "@/_shared/assets/images/image10.jpeg";
import image11 from "@/_shared/assets/images/image11.jpeg";
import image12 from "@/_shared/assets/images/image12.jpeg";
import image13 from "@/_shared/assets/images/image13.jpeg";
import image14 from "@/_shared/assets/images/image14.jpeg";
import image15 from "@/_shared/assets/images/image15.jpeg";
import image16 from "@/_shared/assets/images/image16.jpeg";
import image17 from "@/_shared/assets/images/image17.jpeg";
import useCalendarStore from "@/_shared/store/calendar";

import CalendarDayItem from "./CalendarDayItem";
import CalendarEmptyDayItem from "./CalendarEmptyDayItem";

interface Props {
  slide: number;
}

export default function CalendarBody({ slide }: Props) {
  const { year, month } = useCalendarStore();

  const adjustedMonth = () => {
    const currentMonth = month + slide;

    if (currentMonth === 0) {
      return 12;
    }

    if (currentMonth === 13) {
      return 1;
    }

    return currentMonth;
  };

  const adjustedYear = () => {
    const currentMonth = month + slide;

    if (currentMonth === 0) {
      return year - 1;
    }

    if (currentMonth === 13) {
      return year + 1;
    }

    return year;
  };

  const firstDate = dayjs(`${adjustedYear()}-${adjustedMonth()}-1`).day();
  const daysInMonth = dayjs(
    `${adjustedYear()}-${adjustedMonth()}-1`,
  ).daysInMonth();
  const calendarDateList = Array.from({ length: 42 }, (_, idx) => {
    return {
      date: idx - firstDate + 1,
      isDay: idx >= firstDate && idx < firstDate + daysInMonth,
    };
  });

  // 420px

  return (
    <div className="grid h-full w-full grid-cols-7">
      {calendarDateList.map((day, idx) =>
        day?.isDay ? (
          <CalendarDayItem
            key={idx}
            idx={idx}
            date={day?.date}
            imageUrl={data.find(d => d.date === day.date)?.imageUrl ?? null}
          />
        ) : (
          <CalendarEmptyDayItem key={idx} idx={idx} />
        ),
      )}
    </div>
  );
}

const data = [
  {
    year: 2025,
    month: 6,
    date: 1,
    imageUrl: image15,
  },
  {
    year: 2025,
    month: 6,
    date: 2,
    imageUrl: image16,
  },
  {
    year: 2025,
    month: 6,
    date: 4,
    imageUrl: image1,
  },
  {
    year: 2025,
    month: 6,
    date: 6,
    imageUrl: image2,
  },
  {
    year: 2025,
    month: 6,
    date: 9,
    imageUrl: image3,
  },
  {
    year: 2025,
    month: 6,
    date: 10,
    imageUrl: image4,
  },
  {
    year: 2025,
    month: 6,
    date: 12,
    imageUrl: image5,
  },
  {
    year: 2025,
    month: 6,
    date: 14,
    imageUrl: image17,
  },
  {
    year: 2025,
    month: 6,
    date: 15,
    imageUrl: image6,
  },
  {
    year: 2025,
    month: 6,
    date: 17,
    imageUrl: image7,
  },
  {
    year: 2025,
    month: 6,
    date: 18,
    imageUrl: image8,
  },
  {
    year: 2025,
    month: 6,
    date: 20,
    imageUrl: image9,
  },
  {
    year: 2025,
    month: 6,
    date: 23,
    imageUrl: image10,
  },
  {
    year: 2025,
    month: 6,
    date: 25,
    imageUrl: image11,
  },
  {
    year: 2025,
    month: 6,
    date: 27,
    imageUrl: image12,
  },
  {
    year: 2025,
    month: 6,
    date: 28,
    imageUrl: image13,
  },
  {
    year: 2025,
    month: 6,
    date: 29,
    imageUrl: image14,
  },
];
