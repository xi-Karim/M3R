import { Fab } from "@mui/material";
import React from "react";

interface M3FABProps {
  children?: React.ReactNode;
  color?:
    | "error"
    | "info"
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  variant?: "circular" | "extended";
  sx?: object;
}

const M3FAB = ({ children, color, variant, sx }: M3FABProps) => {
  return (
    <Fab color={color} variant={variant} sx={sx}>
      {children}
    </Fab>
  );
};

export default M3FAB;
