import { Theme } from "@mui/material";
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ThemeContextTypes {
  themeObj?: Theme;
  setThemeObj: Dispatch<SetStateAction<Theme | undefined>>;
}

interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeContext = createContext<ThemeContextTypes>({
  themeObj: undefined,
  setThemeObj: () => {},
});

const ThemeObjProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [themeObj, setThemeObj] = useState<Theme>();

  return (
    <ThemeContext.Provider value={{ themeObj, setThemeObj }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeObjProvider;
