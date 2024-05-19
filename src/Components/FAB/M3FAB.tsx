import React from "react";
import { Fab, FabProps } from "@mui/material";

// Define additional props and modified props for M3Fab
interface M3FabModifiedProps {}

// Merge the new/ props with FabProps
export type M3FabProps = M3FabModifiedProps & FabProps;

const M3Fab = (props: M3FabProps) => {
  const { children } = props;
  return <Fab {...props}>{children}</Fab>;
};

export default M3Fab;
