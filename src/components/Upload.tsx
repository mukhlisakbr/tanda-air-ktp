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
      bg="tomato"
      color="white"
      p={8}
      textAlign="center"
      mb={8}
      mt={8}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Text fontSize="xl">Letakan disini ...</Text>
      ) : (
        <Text fontSize="xl">Seret gambar kesini, atau klik untuk memilih</Text>
      )}
    </Box>
  );
};
