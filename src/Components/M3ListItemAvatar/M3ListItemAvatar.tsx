import React from "react";
import { ListItemAvatar, ListItemAvatarProps } from "@mui/material";

export interface M3ListItemAvatarProps extends ListItemAvatarProps {
  children?: React.ReactNode;
}

class M3ListItemAvatar extends React.Component<M3ListItemAvatarProps> {
  render() {
    const { children, ...rest } = this.props;

    return (
      <ListItemAvatar {...rest}>
        {children}
      </ListItemAvatar>
    );
  }
}

export default M3ListItemAvatar;
