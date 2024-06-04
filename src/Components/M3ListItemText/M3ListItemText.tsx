import React from "react";
import { ListItemText, ListItemTextProps } from "@mui/material";

export interface M3ListItemTextProps extends ListItemTextProps {
  children?: React.ReactNode;
}

class M3ListItemText extends React.Component<M3ListItemTextProps> {
  render() {
    const { children, ...rest } = this.props;

    return (
      <ListItemText {...rest}>
        {children}
      </ListItemText>
    );
  }
}

export default M3ListItemText;
