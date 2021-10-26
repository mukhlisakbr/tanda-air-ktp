import download from "downloadjs";
import { toPng } from "html-to-image";
import { useRef, useState } from "react";

/**
 * Hook to generate screenshot
 */
function useScreenshot() {
  const captureRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState("idle");

  async function generateImage(e: any) {
    e.preventDefault();
    if (!captureRef?.current) {
      return;
    }
    try {
      setStatus("loading");
      const imgBase64 = await toPng(captureRef.current, {
        quality: 1,
        pixelRatio: 1,
      });
      setStatus("success");
      download(imgBase64, "generated.png");
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  }

  return {
    generateImage,
    captureRef,
    status,
  };
}

export default useScreenshot;
