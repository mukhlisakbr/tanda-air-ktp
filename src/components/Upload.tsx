import { useCallback, useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { imageContext } from "../context/imageContext";

export const Upload = () => {
  const [, setImage] = useContext(imageContext);

  const onDrop = useCallback((acceptedFiles) => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag n drop some files here, or click to select files</p>
      )}
    </div>
  );
};
