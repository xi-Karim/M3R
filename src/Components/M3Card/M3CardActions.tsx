import React from "react";
import { CardActions, CardActionsProps } from "@mui/material";

// Define additional props and modified props for M3CardActions
interface M3CardActionsModifiedProps {}

// Merge the new/ props with CardActionsProps
export type M3CardActionsProps = M3CardActionsModifiedProps & CardActionsProps;

const M3CardActions = (props: M3CardActionsProps) => {
  const { children } = props;
  return <CardActions {...props}>{children}</CardActions>;
};

export default M3CardActions;
