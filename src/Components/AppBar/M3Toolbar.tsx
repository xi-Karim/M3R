import { Toolbar } from "@mui/material";
import React from "react";

interface M3ToolbarProps {
  children?: NonNullable<React.ReactNode>;
  sx?: object;
}
const M3Toolbar = ({ children, sx }: M3ToolbarProps) => {
  return <Toolbar sx={sx}>{children}</Toolbar>;
};

export default M3Toolbar;
