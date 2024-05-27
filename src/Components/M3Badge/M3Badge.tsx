import React from "react";
import { Badge, BadgeProps } from "@mui/material";

// Define additional props and modified props for M3Badge
interface M3BadgeModifiedProps {}

// Merge the new/ props with BadgeProps
export type M3BadgeProps = M3BadgeModifiedProps & BadgeProps;

const M3Badge = (props: M3BadgeProps) => {
  const { children } = props;
  return <Badge {...props}>{children}</Badge>;
};

export default M3Badge;
