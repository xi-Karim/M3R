import React from "react";
import { ListItemText } from "@mui/material";

interface M3ListItemTextProps {
  primary?: string;
  secondary?: string;
  sx?: object;
}

const M3ListItemText = ({ primary, secondary, sx }: M3ListItemTextProps) => {
  return (
    <ListItemText
      primary={primary}
      secondary={secondary}
      sx={sx}
    ></ListItemText>
  );
};

export default M3ListItemText;
