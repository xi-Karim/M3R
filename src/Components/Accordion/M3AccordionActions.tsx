import React from "react";
import { AccordionActions, AccordionActionsProps } from "@mui/material";

// Define additional props and modified props for M3AccordionActions
interface M3AccordionActionsModifiedProps {}

// Merge the new/ props with AccordionActionsProps
export type M3AccordionActionsProps = M3AccordionActionsModifiedProps &
  AccordionActionsProps;

const M3AccordionActions = (props: M3AccordionActionsProps) => {
  const { children } = props;
  return <AccordionActions {...props}>{children}</AccordionActions>;
};

export default M3AccordionActions;
