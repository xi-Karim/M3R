import { Typography, TypographyProps } from "@mui/material";
import React from "react";

const M3Typography = (M3TypographyProps: TypographyProps) => {
  return (
    <Typography {...M3TypographyProps}>
      {M3TypographyProps.children}
    </Typography>
  );
};

export default M3Typography;
