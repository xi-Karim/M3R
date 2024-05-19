import React from "react";
import { Alert, AlertProps } from "@mui/material";

// Define additional props and modified props for M3Alert
interface M3AlertModifiedProps {}

// Merge the new/ props with AlertProps
export type M3AlertProps = M3AlertModifiedProps & AlertProps;

const M3Alert = (props: M3AlertProps) => {
  const { children } = props;
  return <Alert {...props}>{children}</Alert>;
};

export default M3Alert;
