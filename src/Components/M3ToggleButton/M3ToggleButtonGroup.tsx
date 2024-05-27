import React from "react";
import { ToggleButtonGroup, ToggleButtonGroupProps } from "@mui/material";

// Define additional props and modified props for M3ToggleButtonGroup
interface M3ToggleButtonGroupModifiedProps {}

// Merge the new/ props with ToggleButtonGroupProps
export type M3ToggleButtonGroupProps = M3ToggleButtonGroupModifiedProps &
  ToggleButtonGroupProps;

const M3ToggleButtonGroup = (props: M3ToggleButtonGroupProps) => {
  const { children } = props;
  return <ToggleButtonGroup {...props}>{children}</ToggleButtonGroup>;
};

export default M3ToggleButtonGroup;
