import React from "react";
import { CardContent, CardContentProps } from "@mui/material";

// Define additional props and modified props for M3CardContent
interface M3CardContentModifiedProps {}

// Merge the new/ props with CardContentProps
export type M3CardContentProps = M3CardContentModifiedProps & CardContentProps;

const M3CardContent = (props: M3CardContentProps) => {
  const { children } = props;
  return <CardContent {...props}>{children}</CardContent>;
};

export default M3CardContent;
