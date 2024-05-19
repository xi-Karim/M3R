import React from "react";
import { CardActionArea, CardActionAreaProps } from "@mui/material";

// Define additional props and modified props for M3CardActionArea
interface M3CardActionAreaModifiedProps {}

// Merge the new/ props with CardActionAreaProps
export type M3CardActionAreaProps = M3CardActionAreaModifiedProps &
  CardActionAreaProps;

const M3CardActionArea = (props: M3CardActionAreaProps) => {
  const { children } = props;
  return <CardActionArea {...props}>{children}</CardActionArea>;
};

export default M3CardActionArea;
