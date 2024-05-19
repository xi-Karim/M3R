import React from "react";
import { ToggleButton, ToggleButtonProps } from "@mui/material";

// Define additional props and modified props for M3ToggleButton
interface M3ToggleButtonModifiedProps {}

// Merge the new/ props with ToggleButtonProps
export type M3ToggleButtonProps = M3ToggleButtonModifiedProps &
  ToggleButtonProps;

const M3ToggleButton = (props: M3ToggleButtonProps) => {
  const { children } = props;
  return <ToggleButton {...props}>{children}</ToggleButton>;
};

export default M3ToggleButton;
