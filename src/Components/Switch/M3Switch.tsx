import { Switch } from "@mui/material";
import React from "react";

interface M3SwitchProps {
  checked?: boolean;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  sx?: object;
}

const M3Switch = ({ checked, name, onChange, sx }: M3SwitchProps) => {
  return <Switch checked={checked} name={name} onChange={onChange} sx={sx} />;
};

export default M3Switch;
