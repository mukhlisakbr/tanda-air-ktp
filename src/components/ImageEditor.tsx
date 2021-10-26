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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Draggable from "react-draggable";
import { useState } from "react";
import useScreenshot from "../hooks/useScreenshot";

export const ImageEditor = () => {
  const { image } = useImageContext();
  const { generateImage, captureRef, status } = useScreenshot();
  const [text, setText] = useState<string>();
  return (
    <Box>
      <Box boxShadow="2xl" rounded="lg" overflow="hidden" maxW="500px">
        <Flex position="relative" ref={captureRef} justify="center">
          <Draggable>
            <Box style={{ position: "absolute" }}>{text}</Box>
          </Draggable>
          <Image src={image} alt="KTP" />
        </Flex>
      </Box>
      <Box mt={8}>
        <form>
          <VStack spacing="4">
            <FormControl isRequired>
              <FormLabel>Tulisan</FormLabel>
              <Input
                placeholder="Gabole nakal 😁"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setText(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Tipe Font</FormLabel>
              <Select placeholder="Pilih dulu">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Ukuran Font</FormLabel>
              <NumberInput max={64} min={8}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Button
              colorScheme="teal"
              type="submit"
              width="100%"
              isLoading={status === "loading"}
              onClick={generateImage}
            >
              Unduh
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};
