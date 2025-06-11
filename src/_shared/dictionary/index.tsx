import { PiCalendarMinusDuotone, PiCoatHangerDuotone } from "react-icons/pi";

const DIC = {
  tabBarList: [
    {
      name: "calendar",
      icon: <PiCalendarMinusDuotone className="text-2xl" />,
      url: "/calendar",
    },
    {
      name: "album",
      icon: <PiCoatHangerDuotone className="text-2xl" />,
      url: "/album",
    },
  ],
};

export default DIC;
