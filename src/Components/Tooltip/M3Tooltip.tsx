import { Tooltip } from "@mui/material";
import React from "react";

interface M3TooltipProps {
  children: React.ReactElement;
  title?: React.ReactNode;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  arrow?: boolean;
  open?: boolean;
  sx?: object;
}

const M3Tooltip = ({
  children,
  arrow,
  open,
  placement,
  title,
  sx,
}: M3TooltipProps) => {
  return (
    <Tooltip
      arrow={arrow}
      open={open}
      placement={placement}
      title={title}
      sx={sx}
    >
      {children}
    </Tooltip>
  );
};

export default M3Tooltip;
