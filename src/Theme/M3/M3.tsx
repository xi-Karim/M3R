import React from "react";
import ThemeModeProvider from "./providers/ThemeModeProvider";
import ThemeSchemeProvider from "./providers/ThemeSchemeProvider";
import M3Theme from "./wrapper/M3Theme";

interface M3Props {
  children?: React.ReactNode;
  themeColor?: string;
  themeMode?: "light" | "dark";
}

const M3 = ({ children, themeColor, themeMode }: M3Props) => {
  return (
    // ThemeModeProvider -> ThemeSchemeProvider
    <ThemeModeProvider>
      <ThemeSchemeProvider>
        <M3Theme themeColor={themeColor} enteredThemeMode={themeMode}>
          {children}
        </M3Theme>
      </ThemeSchemeProvider>
    </ThemeModeProvider>
  );
};

export default M3;
