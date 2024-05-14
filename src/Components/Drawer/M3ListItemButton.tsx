import React from "react";
import { ListItemButton } from "@mui/material";

interface M3ListItemButtonProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  sx?: object;
}

const M3ListItemButton = ({
  children,
  selected,
  onClick,
  sx,
}: M3ListItemButtonProps) => {
  return (
    <ListItemButton selected={selected} onClick={onClick} sx={sx}>
      {children}
    </ListItemButton>
  );
};

export default M3ListItemButton;
