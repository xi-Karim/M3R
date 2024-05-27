import React from "react";
import { FormControlLabel, FormControlLabelProps } from "@mui/material";

// Define additional props and modified props for M3FormControlLabel
interface M3FormControlLabelModifiedProps {}

// Merge the new/ props with FormControlLabelProps
export type M3FormControlLabelProps = M3FormControlLabelModifiedProps &
  FormControlLabelProps;

const M3FormControlLabel = (props: M3FormControlLabelProps) => {
  return <FormControlLabel {...props} />;
};

export default M3FormControlLabel;
