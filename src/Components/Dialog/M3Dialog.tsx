import { Dialog, DialogProps } from "@mui/material";
import React, { MouseEventHandler, useState, useEffect } from "react";

export interface M3DialogProps extends DialogProps{
  children?: React.ReactNode;
  open: boolean;
  disableEscapeKeyDown?: boolean;
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false | undefined;
  TransitionComponent: React.ComponentType<any>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onClose?: () => void;
  scroll?: 'body' | 'paper';
  sx?: object;
}

const M3Dialog = ({
  children,
  disableEscapeKeyDown,
  fullScreen,
  fullWidth,
  maxWidth,
  onClose = () => {},
  scroll,
  open,
  sx,
  onClick,
  TransitionComponent
}: M3DialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(open);

  useEffect(() => {
    setDialogOpen(open);
  }, [open]);

  const handleClose = () => {
    setDialogOpen(false);
    onClose();
  }
  
  return (
    <Dialog
      disableEscapeKeyDown={disableEscapeKeyDown}
      fullScreen={fullScreen}
      open={dialogOpen}
      scroll={scroll}
      sx={sx}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      TransitionComponent={TransitionComponent}
      onClose={handleClose}
      onClick={onClick}
    >
      {children}
    </Dialog>
  );
};

export default M3Dialog;
