import React from "react";
import { Toolbar, ToolbarProps } from "@mui/material";

// Define additional props and modified props for M3Toolbar
interface M3ToolbarModifiedProps {}

// Merge the new/ props with ToolbarProps
export type M3ToolbarProps = M3ToolbarModifiedProps & ToolbarProps;

const M3Toolbar = (props: M3ToolbarProps) => {
  const { children } = props;
  return <Toolbar {...props}>{children}</Toolbar>;
};

export default M3Toolbar;
