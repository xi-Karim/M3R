import React from "react";
import { AccordionSummary, AccordionSummaryProps } from "@mui/material";

// Define additional props and modified props for M3AccordionSummary
interface M3AccordionSummaryModifiedProps {}

// Merge the new/ props with AccordionSummaryProps
export type M3AccordionSummaryProps = M3AccordionSummaryModifiedProps &
  AccordionSummaryProps;

const M3AccordionSummary = (props: M3AccordionSummaryProps) => {
  const { children } = props;
  return <AccordionSummary {...props}>{children}</AccordionSummary>;
};

export default M3AccordionSummary;
