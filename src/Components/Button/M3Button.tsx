import React, { MouseEventHandler } from "react";
import { Button } from "@mui/material";

interface M3ButtonProps {
  children?: React.ReactNode;
  variant?: "text" | "outlined" | "elevated" | "filled" | "tonal";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  sx?: object;
}

const M3Button = ({
  children,
  variant = "text",
  disabled,
  size,
  onClick,
  sx,
}: M3ButtonProps) => {
  return (
    <>
      <Button
        variant={variant}
        disabled={disabled}
        size={size}
        onClick={onClick}
        sx={sx}
      >
        {children}
      </Button>
    </>
  );
};
export default M3Button;
