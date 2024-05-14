import React from "react";
import { ListItem } from "@mui/material";

interface M3ListItemProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  sx?: object;
}

const M3ListItem = ({ children, selected, onClick, sx }: M3ListItemProps) => {
  return (
    <ListItem button selected={selected} onClick={onClick} sx={sx}>
      {children}
    </ListItem>
  );
};

export default M3ListItem;
