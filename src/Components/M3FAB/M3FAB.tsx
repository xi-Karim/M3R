import React from "react";
import { Fab, FabProps } from "@mui/material";

interface M3FabModifiedProps {}

export type M3FabProps = M3FabModifiedProps & FabProps;

const M3Fab = (props: M3FabProps) => {
  const { children, onClick, ...rest } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Fab {...rest} onClick={handleClick}>
      {children}
    </Fab>
  );
};

export default M3Fab;
