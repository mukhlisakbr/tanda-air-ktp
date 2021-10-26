import { createContext, useState } from "react";

export const imageContext = createContext(null as any);

export const ImageContextProvider = (props: any) => {
  const [image, setImage] = useState("");
  return (
    <imageContext.Provider value={[image, setImage]}>
      {props.children}
    </imageContext.Provider>
  );
};
