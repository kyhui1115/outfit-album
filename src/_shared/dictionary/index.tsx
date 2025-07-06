import {
  PiCalendarMinusDuotone,
  PiCalendarMinusLight,
  PiCoatHangerDuotone,
  PiCoatHangerLight,
} from "react-icons/pi";

const DIC = {
  tabBarList: [
    {
      name: "calendar",
      icon: <PiCalendarMinusLight className="text-2xl text-gray-500" />,
      activeIcon: <PiCalendarMinusDuotone className="text-2xl text-gray-900" />,
      url: "/calendar",
    },
    {
      name: "album",
      icon: <PiCoatHangerLight className="text-2xl text-gray-500" />,
      activeIcon: <PiCoatHangerDuotone className="text-2xl text-gray-900" />,
      url: "/album",
    },
  ],
  weekDayList: ["sun.", "mon.", "tue.", "wed.", "thu.", "fri.", "sat."],
};

export default DIC;
