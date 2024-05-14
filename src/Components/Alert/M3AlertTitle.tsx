import { AlertTitle } from "@mui/material";
import React from "react";

interface M3AlertTitleProps {
  children?: NonNullable<React.ReactNode>;
  sx?: object;
}

const M3AlertTitle = ({ children, sx }: M3AlertTitleProps) => {
  return <AlertTitle sx={sx}>{children}</AlertTitle>;
};

export default M3AlertTitle;
