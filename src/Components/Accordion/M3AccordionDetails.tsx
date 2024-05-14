import { AccordionDetails } from "@mui/material";
import React from "react";

interface M3AccordionDetailsProps {
  children?: NonNullable<React.ReactNode>;
  sx?: object;
}

const M3AccordionDetails = ({ children, sx }: M3AccordionDetailsProps) => {
  return <AccordionDetails sx={sx}>{children}</AccordionDetails>;
};

export default M3AccordionDetails;
