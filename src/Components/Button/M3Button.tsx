import React from "react";
import { Button, ButtonProps } from "@mui/material";

// Define additional props and modified props for M3Button
interface M3ButtonModifiedProps {}

// Merge the new/ props with ButtonProps
export type M3ButtonProps = M3ButtonModifiedProps & ButtonProps;

const M3Button = (props: M3ButtonProps) => {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
};

export default M3Button;
