import React from "react";
import { MenuItem, MenuItemProps } from "@mui/material";

export interface M3MenuItemProps extends MenuItemProps {}

const M3MenuItem = (props: M3MenuItemProps) => {
  const { children } = props;
  return <MenuItem {...props}>{children}</MenuItem>;
};

export default M3MenuItem;
