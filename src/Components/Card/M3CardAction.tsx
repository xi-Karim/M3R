import React from "react";
import { CardActionArea } from "@mui/material";

interface M3CardActionProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  sx?: object;
}

const M3CardAction = ({ children, onClick, sx }: M3CardActionProps) => {
  return <CardActionArea sx={sx}>{children}</CardActionArea>;
};

export default M3CardAction;
