import React from "react";
import { Chip, ChipProps } from "@mui/material";

interface M3ChipModifiedProps { }

export type M3ChipProps = M3ChipModifiedProps & ChipProps;

const M3Chip = (props: M3ChipProps) => {
  const { children, ...rest } = props;
  return (
    <Chip {...rest}>
      {children}
    </Chip>
  );
};

export default M3Chip;
