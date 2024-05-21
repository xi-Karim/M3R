import React from "react";
import { AccordionDetails, AccordionDetailsProps } from "@mui/material";

// Define additional props and modified props for M3AccordionDetails
interface M3AccordionDetailsModifiedProps {}

// Merge the new/ props with AccordionDetailsProps
export type M3AccordionDetailsProps = M3AccordionDetailsModifiedProps &
  AccordionDetailsProps;

const M3AccordionDetails = (props: M3AccordionDetailsProps) => {
  const { children } = props;
  return <AccordionDetails {...props}>{children}</AccordionDetails>;
};

export default M3AccordionDetails;
