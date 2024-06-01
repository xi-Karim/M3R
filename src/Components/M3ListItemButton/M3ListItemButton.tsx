import React from "react";
import { ListItemButton, ListItemButtonProps } from "@mui/material";

interface M3ListItemButtonModifiedProps {}

export type M3ListItemButtonProps = M3ListItemButtonModifiedProps & ListItemButtonProps;

export default function M3ListItemButton(props: M3ListItemButtonProps) {
  const {
    children,
    onClick,
    ...rest
  } = props;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.blur();
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <ListItemButton {...rest} onClick={handleClick}>
      {children}
    </ListItemButton>
  );
}
