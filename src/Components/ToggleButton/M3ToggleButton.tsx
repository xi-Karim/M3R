import { ToggleButton } from "@mui/material";
import React from "react";

interface M3ToogleButtonProps {
  children?: React.ReactNode;
  value?: any;
  selected?: boolean;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  onChange?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any
  ) => void;
  sx?: object;
}

const M3ToggleButton = ({
  children,
  value,
  selected,
  color,
  onChange,
  sx,
}: M3ToogleButtonProps) => {
  return (
    <ToggleButton
      value={value}
      selected={selected}
      color={color}
      onChange={onChange}
      sx={sx}
    >
      {children}
    </ToggleButton>
  );
};

export default M3ToggleButton;
