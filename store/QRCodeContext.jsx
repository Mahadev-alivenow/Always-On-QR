import { createContext } from "react";

export const QRCodeContext = createContext({
  url: "",
  dotStyle: "",
  cornerStyle: "",
  customLogo: "",
  sliderValue: 1024,
});
