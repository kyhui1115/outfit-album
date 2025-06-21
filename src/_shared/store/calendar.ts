import dayjs from "dayjs";
import { create } from "zustand";

interface CalendarState {
  year: number;
  month: number;
  day: number;

  setYear: (year: number | ((prev: number) => number)) => void;
  setMonth: (month: number | ((prev: number) => number)) => void;
  setDay: (day: number | ((prev: number) => number)) => void;

  reset: () => void;
}

const now = dayjs();

const useCalendarStore = create<CalendarState>()(set => ({
  year: now.year(),
  month: now.month() + 1,
  day: now.date(),

  setYear: year =>
    set(state => ({
      year: typeof year === "function" ? year(state.year) : year,
    })),
  setMonth: month =>
    set(state => ({
      month: typeof month === "function" ? month(state.month) : month,
    })),
  setDay: day =>
    set(state => ({
      day: typeof day === "function" ? day(state.day) : day,
    })),

  reset: () =>
    set({ year: now.year(), month: now.month() + 1, day: now.date() }),
}));

export default useCalendarStore;
