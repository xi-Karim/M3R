import { Badge } from "@mui/material";
import React from "react";

interface M3BadgeProps {
  children?: React.ReactNode;
  badgeContent?: React.ReactNode;
  max?: number;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  variant?: "dot" | "standard";
  invisible?: boolean;
  sx?: object;
}

const M3Badge = ({
  children,
  badgeContent,
  color,
  invisible,
  max,
  variant,
  sx,
}: M3BadgeProps) => {
  return (
    <Badge
      badgeContent={badgeContent}
      max={max}
      color={color}
      variant={variant}
      invisible={invisible}
      sx={sx}
    >
      {children}
    </Badge>
  );
};

export default M3Badge;
