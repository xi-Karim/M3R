import { ToggleButtonGroup } from "@mui/material";
import React from "react";

interface M3ToogleButtonGroupProps {
  children?: React.ReactNode;
  exclusive?: boolean;
  value?: any;
  onChange?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any
  ) => void;
  sx?: object;
}

const M3ToggleButtonGroup = ({
  children,
  exclusive,
  value,
  onChange,
  sx,
}: M3ToogleButtonGroupProps) => {
  return (
    <ToggleButtonGroup
      exclusive={exclusive}
      value={value}
      onChange={onChange}
      sx={sx}
    >
      {children}
    </ToggleButtonGroup>
  );
};

export default M3ToggleButtonGroup;
