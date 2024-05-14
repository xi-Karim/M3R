import { Accordion } from "@mui/material";
import React from "react";

interface M3AccordionProps {
  children?: NonNullable<React.ReactNode>;
  disabled?: boolean;
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    expanded: boolean
  ) => void;
  sx?: object;
}

const M3Accordion = ({
  children,
  disabled,
  onChange,
  sx,
}: M3AccordionProps) => {
  return (
    <Accordion disabled={disabled} onChange={onChange} sx={sx}>
      {children}
    </Accordion>
  );
};

export default M3Accordion;
