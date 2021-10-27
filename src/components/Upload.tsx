import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useImageContext } from "../context/Image";
import { Box, Text } from "@chakra-ui/react";

export const Upload = () => {
  const { setImage } = useImageContext();

  const onDrop = useCallback((acceptedFiles) => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      cursor="pointer"
      bg="teal"
      color="white"
      rounded="lg"
      p={4}
      textAlign="center"
      my={8}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Text>Letakan disini ...</Text>
      ) : (
        <Text>Seret gambar kesini, atau klik untuk memilih</Text>
      )}
    </Box>
  );
};
