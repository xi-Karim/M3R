import React from "react";
import { Box, BoxProps } from "@mui/material";

// Define additional props and modified props for M3Box
interface M3BoxModifiedProps {}

// Merge the new/ props with BoxProps
export type M3BoxProps = M3BoxModifiedProps & BoxProps;

const M3Box = (props: M3BoxProps) => {
  const { children } = props;
  return <Box {...props}>{children}</Box>;
};

export default M3Box;
