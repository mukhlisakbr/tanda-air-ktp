/* eslint-disable @next/next/no-img-element */
import { useImageContext } from "../context/Image";
import { Box, Button, Image, Flex } from "@chakra-ui/react";
import Draggable from "react-draggable";
import { useEffect, useRef } from "react";
import useScreenshot from "../hooks/useScreenshot";

export const ImagePreview = () => {
  const { image } = useImageContext();
  const { generateImage, captureRef, status } = useScreenshot();

  return (
    <Box>
      <Box boxShadow="2xl" rounded="3xl">
        <Flex mb={8} justify="center">
          <Flex position="relative" ref={captureRef}>
            <Draggable>
              <Box style={{ position: "absolute" }}>AKU WM</Box>
            </Draggable>
            <Image src={image} alt="KTP" />
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Button
          disabled={status === "loading"}
          colorScheme="blue"
          onClick={generateImage}
        >
          Download
        </Button>
      </Box>
    </Box>
  );
};
