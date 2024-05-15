import React from "react";
import { ListItemButton } from "@mui/material";

interface M3ListItemButtonProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  sx?: object;
  href: string;
}

const M3ListItemButton = ({
  children,
  selected,
  onClick,
  sx,
  href,
}: M3ListItemButtonProps) => {
  return (
    <ListItemButton href={href} selected={selected} onClick={onClick} sx={sx}>
      {children}
    </ListItemButton>
  );
};

export default M3ListItemButton;
