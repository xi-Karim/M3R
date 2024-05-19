import React from "react";
import { Card, CardProps } from "@mui/material";

// Define additional props and modified props for M3Card
interface M3CardModifiedProps {}

// Merge the new/ props with CardProps
export type M3CardProps = M3CardModifiedProps & CardProps;

const M3Card = (props: M3CardProps) => {
  const { children } = props;
  return <Card {...props}>{children}</Card>;
};

export default M3Card;
