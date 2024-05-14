import { useContext } from "react";
import { ThemeSchemeContext } from "../providers/ThemeSchemeProvider";

export const generateRandomColor = () => {
  const { generateScheme } = useContext(ThemeSchemeContext);

  const DIGITS: string = "0123456789ABCDEF";

  const randomColor = (): string => {
    let result = "";
    for (let i = 0; i < 6; ++i) {
      const index = Math.floor(16 * Math.random());
      result += DIGITS[index];
    }
    return "#" + result;
  };

  const generate = () => generateScheme(randomColor());

  return generate;
};
