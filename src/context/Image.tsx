import { createContext, useState, useContext } from "react";

interface IImageContext {
  image: string;
  setImage: (c: string) => void;
}

export const imageContext = createContext<IImageContext>({
  image: "",
  setImage: () => {},
});

export const useImageContext = () => useContext(imageContext);

export const ImageContextProvider = (props: any) => {
  const [image, setImage] = useState("");
  return (
    <imageContext.Provider value={{ image, setImage }}>
      {props.children}
    </imageContext.Provider>
  );
};
