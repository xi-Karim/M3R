import React from "react";
import { Drawer, DrawerProps } from "@mui/material";

// Define additional props and modified props for M3Drawer
interface M3DrawerModifiedProps {}

// Merge the new/ props with DrawerProps
export type M3DrawerProps = M3DrawerModifiedProps & DrawerProps;

const M3Drawer = (props: M3DrawerProps) => {
  const { children } = props;
  return <Drawer {...props}>{children}</Drawer>;
};

export default M3Drawer;
