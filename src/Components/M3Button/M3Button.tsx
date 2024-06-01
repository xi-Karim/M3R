import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface M3ButtonModifiedProps {}

export type M3ButtonProps = M3ButtonModifiedProps & ButtonProps;

const M3Button = (props: M3ButtonProps) => {
  const { children, onClick, ...rest } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button {...rest} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default M3Button;
