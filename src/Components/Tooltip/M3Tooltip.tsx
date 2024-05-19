import React from "react";
import { Tooltip, TooltipProps } from "@mui/material";

// Define additional props and modified props for M3Tooltip
interface M3TooltipModifiedProps {}

// Merge the new/ props with TooltipProps
export type M3TooltipProps = M3TooltipModifiedProps & TooltipProps;

const M3Tooltip = (props: M3TooltipProps) => {
  const { children } = props;
  return <Tooltip {...props}>{children}</Tooltip>;
};

export default M3Tooltip;
