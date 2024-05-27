import React from "react";
import { AppBar, AppBarProps } from "@mui/material";

// Define additional props and modified props for M3AppBar
interface M3AppBarModifiedProps {}

// Merge the new/ props with AppBarProps
export type M3AppBarProps = M3AppBarModifiedProps & AppBarProps;

const M3AppBar = (props: M3AppBarProps) => {
  const { children } = props;
  return <AppBar {...props}>{children}</AppBar>;
};

export default M3AppBar;
