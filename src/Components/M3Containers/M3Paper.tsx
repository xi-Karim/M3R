import React from "react";
import { Paper, PaperProps } from "@mui/material";

// Define additional props and modified props for M3Paper
interface M3PaperModifiedProps {}

// Merge the new/ props with PaperProps
export type M3PaperProps = M3PaperModifiedProps & PaperProps;

const M3Paper = (props: M3PaperProps) => {
  const { children } = props;
  return <Paper {...props}>{children}</Paper>;
};

export default M3Paper;
