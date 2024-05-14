import { Alert } from "@mui/material";
import React, { EventHandler, SyntheticEvent } from "react";

interface M3AlertProps {
  children?: React.ReactNode;
  severity?: "error" | "warning" | "info" | "success";
  onClose?: (event: React.SyntheticEvent<Element, Event>) => void;
  sx?: object;
}

const M3Alert = ({ children, severity, onClose, sx }: M3AlertProps) => {
  return (
    <Alert severity={severity} onClose={onClose} sx={sx}>
      {children}
    </Alert>
  );
};

export default M3Alert;
