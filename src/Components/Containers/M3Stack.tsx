import React from "react";
import { Stack, StackProps } from "@mui/material";

// Define additional props and modified props for M3Stack
interface M3StackModifiedProps {}

// Merge the new/ props with StackProps
export type M3StackProps = M3StackModifiedProps & StackProps;

const M3Stack = (props: M3StackProps) => {
  const { children } = props;
  return <Stack {...props}>{children}</Stack>;
};

export default M3Stack;
