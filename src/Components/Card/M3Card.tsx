import React from "react";
import { Card } from "@mui/material";

interface M3CardProps {
  children?: React.ReactNode;
  variant?: "elevation" | "outlined" | "filled";
  sx?: object;
}

const M3Card = ({ children, variant, sx }: M3CardProps) => {
  return (
    <Card variant={variant} sx={sx}>
      {children}
    </Card>
  );
};

export default M3Card;
