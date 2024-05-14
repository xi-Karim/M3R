import { AccordionSummary } from "@mui/material";
import React from "react";

interface M3AccordionSummaryProps {
  children?: React.ReactNode;
  expandIcon?: React.ReactNode;
  sx?: object;
}

const M3AccordionSummary = ({
  children,
  expandIcon,
  sx,
}: M3AccordionSummaryProps) => {
  return (
    <AccordionSummary sx={sx} expandIcon={expandIcon}>
      {children}
    </AccordionSummary>
  );
};

export default M3AccordionSummary;
