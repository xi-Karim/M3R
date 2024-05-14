import React, { useState } from "react";
import { Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

interface M3DrawerProps {
  anchor: "left" | "top" | "bottom" | "right";
  open?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  sx?: object;
}

const M3Drawer = ({
  anchor,
  open = false,
  onClose,
  children,
  title,
  sx,
}: M3DrawerProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Drawer anchor={anchor} open={isOpen} onClose={handleClose} sx={sx}>
      {title && (
        <Toolbar>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      )}
      {children}
    </Drawer>
  );
};

export default M3Drawer;
