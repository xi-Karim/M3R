import React from "react";
import { Box } from "@mui/material";

interface M3BoxProps {
  children?: React.ReactNode;
  sx?: object;
}

const M3Box = ({ children, sx }: M3BoxProps) => {
  return <Box sx={sx}>{children}</Box>;
};

export default M3Box;
