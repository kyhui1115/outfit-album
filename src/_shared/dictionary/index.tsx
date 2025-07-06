import {
  PiCalendarMinusDuotone,
  PiCalendarMinusLight,
  PiCoatHangerDuotone,
  PiCoatHangerLight,
} from "react-icons/pi";

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

const DIC = {
  calendarData: [
    {
      id: "1",
      year: 2025,
      month: 6,
      date: 1,
      image: image15,
    },
    {
      id: "2",
      year: 2025,
      month: 6,
      date: 2,
      image: image16,
    },
    {
      id: "3",
      year: 2025,
      month: 6,
      date: 4,
      image: image1,
    },
    {
      id: "4",
      year: 2025,
      month: 6,
      date: 6,
      image: image2,
    },
    {
      id: "5",
      year: 2025,
      month: 6,
      date: 9,
      image: image3,
    },
    {
      id: "6",
      year: 2025,
      month: 6,
      date: 10,
      image: image4,
    },
    {
      id: "7",
      year: 2025,
      month: 6,
      date: 12,
      image: image5,
    },
    {
      id: "8",
      year: 2025,
      month: 6,
      date: 14,
      image: image17,
    },
    {
      id: "9",
      year: 2025,
      month: 6,
      date: 15,
      image: image6,
    },
    {
      id: "10",
      year: 2025,
      month: 6,
      date: 17,
      image: image7,
    },
    {
      id: "11",
      year: 2025,
      month: 6,
      date: 18,
      image: image8,
    },
    {
      id: "12",
      year: 2025,
      month: 6,
      date: 20,
      image: image9,
    },
    {
      id: "13",
      year: 2025,
      month: 6,
      date: 23,
      image: image10,
    },
    {
      id: "14",
      year: 2025,
      month: 6,
      date: 25,
      image: image11,
    },
    {
      id: "15",
      year: 2025,
      month: 6,
      date: 27,
      image: image12,
    },
    {
      id: "16",
      year: 2025,
      month: 6,
      date: 28,
      image: image13,
    },
    {
      id: "17",
      year: 2025,
      month: 6,
      date: 29,
      image: image14,
    },
  ],

  albumImages: [
    {
      id: "1",
      title: "image1",
      imageUrl: image1,
    },
    {
      id: "2",
      title: "image2",
      imageUrl: image2,
    },
    {
      id: "3",
      title: "image3",
      imageUrl: image3,
    },
    {
      id: "4",
      title: "image4",
      imageUrl: image4,
    },
    {
      id: "5",
      title: "image5",
      imageUrl: image5,
    },
    {
      id: "6",
      title: "image6",
      imageUrl: image6,
    },
    {
      id: "7",
      title: "image7",
      imageUrl: image7,
    },
    {
      id: "8",
      title: "image8",
      imageUrl: image8,
    },
    {
      id: "9",
      title: "image9",
      imageUrl: image9,
    },
    {
      id: "10",
      title: "image10",
      imageUrl: image10,
    },
    {
      id: "11",
      title: "image11",
      imageUrl: image11,
    },
    {
      id: "12",
      title: "image12",
      imageUrl: image12,
    },
    {
      id: "13",
      title: "image13",
      imageUrl: image13,
    },
    {
      id: "14",
      title: "image14",
      imageUrl: image14,
    },
    {
      id: "15",
      title: "image15",
      imageUrl: image15,
    },
    {
      id: "16",
      title: "image16",
      imageUrl: image16,
    },
    {
      id: "17",
      title: "image17",
      imageUrl: image17,
    },
  ],

  tabBarList: [
    {
      name: "calendar",
      icon: <PiCalendarMinusLight className="text-beige-900 text-2xl" />,
      activeIcon: <PiCalendarMinusDuotone className="text-2xl text-gray-900" />,
      url: "/calendar",
    },
    {
      name: "album",
      icon: <PiCoatHangerLight className="text-beige-900 text-2xl" />,
      activeIcon: <PiCoatHangerDuotone className="text-2xl text-gray-900" />,
      url: "/album",
    },
  ],
  weekDayList: ["sun.", "mon.", "tue.", "wed.", "thu.", "fri.", "sat."],
};

export default DIC;
