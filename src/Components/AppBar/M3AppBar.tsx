import { AppBar } from "@mui/material";
import React from "react";

interface M3AppBarProps {
  children?: React.ReactNode;
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
  sx?: object;
}

const M3AppBar = ({ children, position, sx }: M3AppBarProps) => {
  return (
    <AppBar position={position} sx={sx}>
      {children}
    </AppBar>
  );
};

export default M3AppBar;
