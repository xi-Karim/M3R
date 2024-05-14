import { AccordionActions } from "@mui/material";
import React from "react";

interface M3AccordionActionsProps {
  children?: NonNullable<React.ReactNode>;
  sx?: object;
}

const M3AccordionActions = ({ children, sx }: M3AccordionActionsProps) => {
  return <AccordionActions sx={sx}>{children}</AccordionActions>;
};

export default M3AccordionActions;
