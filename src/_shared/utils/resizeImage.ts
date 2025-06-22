import Resizer from "react-image-file-resizer";

const resizeImage = (file: File) =>
  new Promise<Blob>(resolve => {
    Resizer.imageFileResizer(
      file,
      600, // width
      600, // height
      "JPEG", // format
      80, // quality
      0, // rotation
      result => {
        resolve(result as Blob);
      },
      "blob", // 출력 타입: base64, blob 등
    );
  });

export default resizeImage;
