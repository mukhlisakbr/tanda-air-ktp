/* eslint-disable @next/next/no-img-element */
import { useImageContext } from "../context/Image";
import {
  Box,
  Button,
  Image,
  Flex,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Select,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Alert,
  AlertIcon,
  Badge,
  Stack,
} from "@chakra-ui/react";
import Draggable from "react-draggable";
import React, { useState } from "react";
import useScreenshot from "../hooks/useScreenshot";
import { HexColorPicker } from "react-colorful";

export const ImageEditor = () => {
  const { image } = useImageContext();
  const { generateImage, captureRef, status } = useScreenshot();
  const [text, setText] = useState<string>("Ganti aku");
  const [font, setFont] = useState<string>("Fredoka One");
  const [fontSize, setFontSize] = useState<number>(42);
  const [color, setColor] = useState<string>("#000000");
  const [opacity, setOpacity] = useState<number>(80);

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(e.target.value);
  };

  const handleFontSizeChange = (e: number) => {
    setFontSize(e);
  };

  return (
    <Box>
      <Box boxShadow="2xl" rounded="lg" overflow="hidden">
        <Alert status="info">
          <AlertIcon />
          Geser-geser aja tulisan nya mau dimana aja boleh.
        </Alert>
        <Flex position="relative" ref={captureRef} justify="center">
          <Draggable>
            <Box style={{ position: "absolute", top: 0, left: 0 }}>
              <Text
                cursor="grab"
                fontSize={fontSize}
                fontFamily={font}
                color={color}
                opacity={`${opacity}%`}
              >
                {text}
              </Text>
            </Box>
          </Draggable>
          <Image src={image || "/ktp-example.jpg"} alt="KTP" />
        </Flex>
      </Box>
      <Box mt={8}>
        <form>
          <VStack spacing="4">
            <Button
              colorScheme="teal"
              type="submit"
              width="100%"
              isLoading={status === "loading"}
              onClick={generateImage}
            >
              Unduh
            </Button>
            <FormControl isRequired>
              <FormLabel>Tulisan</FormLabel>
              <Input
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setText(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Pilih Font</FormLabel>
              <Select onChange={handleFontChange} value={font}>
                <option value="Fredoka One">Fredoka One</option>
                <option value="Noto Serif">Noto Serif</option>
                <option value="Space Mono">Space Mono</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Ukuran Text</FormLabel>
              <Slider
                colorScheme="teal"
                defaultValue={fontSize}
                onChange={handleFontSizeChange}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
            <FormControl>
              <FormLabel>Tingkat Opasitas</FormLabel>
              <Slider
                colorScheme="teal"
                defaultValue={opacity}
                onChange={(e) => setOpacity(e)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
            <FormControl>
              <FormLabel>Warna Tulisan</FormLabel>
              <HexColorPicker color={color} onChange={setColor} />
            </FormControl>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};
