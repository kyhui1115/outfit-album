import { PiCalendarMinusDuotone, PiCoatHanger } from "react-icons/pi";

const DIC = {
  tabBarList: [
    {
      name: "calendar",
      icon: <PiCalendarMinusDuotone className="text-2xl" />,
      url: "/calendar",
    },
    {
      name: "album",
      icon: <PiCoatHanger className="text-2xl" />,
      url: "/album",
    },
  ],
  weekDayList: ["sun.", "mon.", "tue.", "wed.", "thu.", "fri.", "sat."],
};

export default DIC;
