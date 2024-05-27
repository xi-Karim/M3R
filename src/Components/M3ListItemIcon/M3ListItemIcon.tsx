import React from "react";
import { ListItemIcon, ListItemIconProps } from "@mui/material";

export interface M3ListItemIconProps extends ListItemIconProps { children?: React.ReactNode }

export default function M3ListItemIcon(props: M3ListItemIconProps) {
  const { children } = props;

  return (
    <ListItemIcon>
      {children}
    </ListItemIcon>
  )
}