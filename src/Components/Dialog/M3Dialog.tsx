import { Dialog, DialogProps } from "@mui/material";
import React, { MouseEventHandler, RefObject } from "react";

interface M3DialogProps extends DialogProps{
  children?: React.ReactNode;
  open: boolean;
  disableEscapeKeyDown?: boolean;
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false | undefined;
  TransitionComponent: React.ComponentType<any>;
  onClick?: MouseEventHandler<HTMLDivElement>; // Corrected type
  onClose?: (event: React.SyntheticEvent, reason: string) => void; // Corrected type
  scroll?: 'body' | 'paper';
  sx?: object;
}

const M3Dialog = ({
  children,
  disableEscapeKeyDown,
  fullScreen,
  fullWidth,
  maxWidth,
  onClose,
  scroll,
  open,
  sx,
  onClick,
  TransitionComponent
}: M3DialogProps) => {
  return (
    <Dialog
      disableEscapeKeyDown={disableEscapeKeyDown}
      fullScreen={fullScreen}
      open={open}
      scroll={scroll}
      sx={sx}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      TransitionComponent={TransitionComponent}
      onClose={onClose} // Passing onClose
      onClick={onClick} // Passing onClick
    >
      {children}
    </Dialog>
  );
};

export default M3Dialog;
