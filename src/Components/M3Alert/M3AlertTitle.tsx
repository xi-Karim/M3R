import React from "react";
import { AlertTitle, AlertTitleProps } from "@mui/material";

// Define additional props and modified props for M3AlertTitle
interface M3AlertTitleModifiedProps {}

// Merge the new/ props with AlertTitleProps
export type M3AlertTitleProps = M3AlertTitleModifiedProps & AlertTitleProps;

const M3AlertTitle = (props: M3AlertTitleProps) => {
  const { children } = props;
  return <AlertTitle {...props}>{children}</AlertTitle>;
};

export default M3AlertTitle;
