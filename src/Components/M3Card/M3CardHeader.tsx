import React from "react";
import { CardHeader, CardHeaderProps } from "@mui/material";

// Define additional props and modified props for M3CardHeader
interface M3CardHeaderModifiedProps {}

// Merge the new/ props with CardHeaderProps
export type M3CardHeaderProps = M3CardHeaderModifiedProps & CardHeaderProps;

const M3CardHeader = (props: M3CardHeaderProps) => {
  return <CardHeader {...props} />;
};
export default M3CardHeader;
