import React from "react";
import { Menu, MenuProps } from "@mui/material";

export interface M3MenuProps extends MenuProps {}

const M3Menu = (props: M3MenuProps) => {
  const { children } = props;
  return <Menu {...props}>{children}</Menu>;
};

export default M3Menu;
