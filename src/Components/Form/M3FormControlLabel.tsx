import React from "react";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

interface M3FromControlLabelProps {
  label: string;
  control?: React.ReactElement;
  checked?: boolean;
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => void;
  sx?: object;
  disabled?: boolean;
}

const M3FormControlLabel = ({
  label,
  control = <Checkbox />,
  checked,
  onChange,
  sx,
  disabled,
}: M3FromControlLabelProps) => {
  return (
    <FormControlLabel
      label={label}
      control={control}
      checked={checked}
      onChange={onChange}
      sx={sx}
      disabled={disabled}
    />
  );
};

export default M3FormControlLabel;
