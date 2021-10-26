/* eslint-disable @next/next/no-img-element */
import { useImageContext } from "../context/Image";
import { Box } from "@chakra-ui/react";
import Draggable from "react-draggable";

export const ImagePreview = () => {
  const { image } = useImageContext();

  return (
    <Box position="relative" mb={8}>
      <Draggable>
        <div>AKU WM</div>
      </Draggable>
      <Box border="1px">
        <img src={image} alt="" width="100%" />
      </Box>
    </Box>
  );
};
