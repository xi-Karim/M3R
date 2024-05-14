import React from "react";
import { List } from "@mui/material";

interface M3ListProps {
  children?: React.ReactNode;
  dense?: boolean;
  sx?: object;
}

const M3List = ({ children, dense, sx }: M3ListProps) => {
  return (
    <List dense={dense} sx={sx}>
      {children}
    </List>
  );
};

export default M3List;
