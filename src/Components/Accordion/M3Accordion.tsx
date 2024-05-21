import React from "react";
import { Accordion, AccordionProps } from "@mui/material";

// Define additional props and modified props for M3Accordion
interface M3AccordionModifiedProps {}

// Merge the new/ props with AccordionProps
export type M3AccordionProps = M3AccordionModifiedProps & AccordionProps;

const M3Accordion = (props: M3AccordionProps) => {
  const { children } = props;
  return <Accordion {...props}>{children}</Accordion>;
};

export default M3Accordion;
