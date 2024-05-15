import React from "react";
import { ListItem } from "@mui/material";

interface M3ListItemProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  sx?: object;
}

const M3ListItem = ({ children, onClick, sx }: M3ListItemProps) => {
  return (
    <ListItem onClick={onClick} sx={sx}>
      {children}
    </ListItem>
  );
};

export default M3ListItem;
