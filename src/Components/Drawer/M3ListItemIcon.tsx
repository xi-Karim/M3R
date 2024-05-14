import React from "react";
import { ListItemIcon } from "@mui/material";

interface M3ListItemIconProps {
  children?: React.ReactNode;
  sx?: object;
}

const M3ListItemIcon = ({ children, sx }: M3ListItemIconProps) => {
  return <ListItemIcon sx={sx}>{children}</ListItemIcon>;
};

export default M3ListItemIcon;
