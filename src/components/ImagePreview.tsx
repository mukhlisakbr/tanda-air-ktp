/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { imageContext } from "../context/imageContext";

export const ImagePreview = () => {
  const [image] = useContext(imageContext);

  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};
