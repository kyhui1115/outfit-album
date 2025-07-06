import AlbumImage from "@/_features/album/AlbumImage";
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

export default function AlbumImageList() {
  return (
    <div className="grid w-full grid-cols-5 content-start gap-[0.1rem] px-0.5">
      {images.map(image => (
        <AlbumImage key={image.id} imageUrl={image.imageUrl} />
      ))}
    </div>
  );
}

const images = [
  {
    id: 1,
    title: "image1",
    imageUrl: image1,
  },
  {
    id: 2,
    title: "image2",
    imageUrl: image2,
  },
  {
    id: 3,
    title: "image3",
    imageUrl: image3,
  },
  {
    id: 4,
    title: "image4",
    imageUrl: image4,
  },
  {
    id: 5,
    title: "image5",
    imageUrl: image5,
  },
  {
    id: 6,
    title: "image6",
    imageUrl: image6,
  },
  {
    id: 7,
    title: "image7",
    imageUrl: image7,
  },
  {
    id: 8,
    title: "image8",
    imageUrl: image8,
  },
  {
    id: 9,
    title: "image9",
    imageUrl: image9,
  },
  {
    id: 10,
    title: "image10",
    imageUrl: image10,
  },
  {
    id: 11,
    title: "image11",
    imageUrl: image11,
  },
  {
    id: 12,
    title: "image12",
    imageUrl: image12,
  },
  {
    id: 13,
    title: "image13",
    imageUrl: image13,
  },
  {
    id: 14,
    title: "image14",
    imageUrl: image14,
  },
  {
    id: 15,
    title: "image15",
    imageUrl: image15,
  },
  {
    id: 16,
    title: "image16",
    imageUrl: image16,
  },
  {
    id: 17,
    title: "image17",
    imageUrl: image17,
  },
];
