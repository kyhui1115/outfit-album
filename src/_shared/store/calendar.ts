import dayjs from "dayjs";
import { create } from "zustand";

interface CalendarState {
  year: number;
  month: number;
  day: number;

  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  setDay: (day: number) => void;

  reset: () => void;
}

const now = dayjs();

const useCalendarStore = create<CalendarState>()(set => ({
  year: now.year(),
  month: now.month() + 1,
  day: now.date(),

  setYear: year => set({ year }),
  setMonth: month => set({ month }),
  setDay: day => set({ day }),

  reset: () =>
    set({ year: now.year(), month: now.month() + 1, day: now.date() }),
}));

export default useCalendarStore;
