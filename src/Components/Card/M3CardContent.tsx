import React from "react";
import { CardContent } from "@mui/material";

interface M3CardContentProps {
  children?: React.ReactNode;
  sx?: object;
}

const M3CardContent = ({ children, sx }: M3CardContentProps) => {
  return <CardContent sx={sx}>{children}</CardContent>;
};

export default M3CardContent;
