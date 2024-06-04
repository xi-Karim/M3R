import React from "react";
import { ListItemIcon, ListItemIconProps } from "@mui/material";

export interface M3ListItemIconProps extends ListItemIconProps {
  children?: React.ReactNode;
}

class M3ListItemIcon extends React.Component<M3ListItemIconProps> {
  render() {
    const { children, ...rest } = this.props;

    return (
      <ListItemIcon {...rest}>
        {children}
      </ListItemIcon>
    );
  }
}

export default M3ListItemIcon;
