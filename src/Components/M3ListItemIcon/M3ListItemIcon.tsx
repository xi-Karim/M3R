import React from "react";
import { ListItemIcon, ListItemIconProps } from "@mui/material";

interface M3ListItemProps extends ListItemIconProps { children?: React.ReactNode }

export default function M3ListItem(props: M3ListItemProps) {
  const { children } = props;

  return (
    <ListItemIcon>
      {children}
    </ListItemIcon>
  )
}