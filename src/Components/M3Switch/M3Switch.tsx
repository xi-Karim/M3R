import React from "react";
import { Switch, SwitchProps } from "@mui/material";

// Define additional props and modified props for M3Switch
interface M3SwitchModifiedProps {}

// Merge the new/ props with SwitchProps
export type M3SwitchProps = M3SwitchModifiedProps & SwitchProps;

const M3Switch = (props: M3SwitchProps) => {
  return <Switch {...props} />;
};

export default M3Switch;
