import React from "react";
import { Checkbox, CheckboxProps } from "@mui/material";

// Define additional props and modified props for M3Checkbox
interface M3CheckboxModifiedProps {}

// Merge the new/ props with CheckboxProps
export type M3CheckboxProps = M3CheckboxModifiedProps & CheckboxProps;

const M3Checkbox = (props: M3CheckboxProps) => {
  return <Checkbox {...props} />;
};

export default M3Checkbox;
