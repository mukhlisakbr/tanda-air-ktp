import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const Upload = () => {
  const [img, setImg] = useState<string>("");
  const onDrop = useCallback((acceptedFiles) => {
    setImg(URL.createObjectURL(acceptedFiles[0]));
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
