import React, { useState, useEffect } from "react";
import {
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  DrawerProps,
  Divider,
  Box,
} from "@mui/material";
import { Close } from "@mui/icons-material";

export interface M3SideSheetProps extends DrawerProps {
  title: string;
  isModal?: boolean;
  open?: boolean;
  onClose?: (event: React.SyntheticEvent, reason: string) => void;
  children?: React.ReactNode;
  sx?: object;
  PaperProps?: DrawerProps["PaperProps"];
  width?: string | number;
}

const M3SideSheet = ({
  anchor = "right",
  open = false,
  onClose = (event: React.SyntheticEvent, reason: string) => {},
  children,
  title,
  sx,
  PaperProps,
  isModal = true,
  width = 350,
}: M3SideSheetProps) => {
  const [isSheetOpen, setSheetOpen] = useState(open);
  
  useEffect(() => {
    setSheetOpen(open);
  }, [open]);

  const handleClose = (event: React.SyntheticEvent, reason: string) => {
    setSheetOpen(false);
    onClose(event, reason);
  };

  const computedPaperProps = {
    ...PaperProps,
    sx: {
      ...(PaperProps?.sx || {}),
      borderTopLeftRadius: isModal ? "16px" : "0px",
      borderBottomLeftRadius: isModal ? "16px" : "0px",
      borderLeft: isModal ? "none" : "1px solid #79747E",
      width,
    },
  };

  // Convert children to an array
  const childrenArray = React.Children.toArray(children);
  const actions = childrenArray.find((child: any) => child.type?.displayName === 'M3SideSheetActions');
  const content = childrenArray.filter((child: any) => child.type?.displayName !== 'M3SideSheetActions');

  return (
    <Drawer
      anchor={anchor}
      open={isSheetOpen}
      onClose={handleClose}
      sx={sx}
      PaperProps={computedPaperProps}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {title && (
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {title}
            </Typography>
            <IconButton onClick={(event) => handleClose(event, 'iconClick')}>
              <Close sx={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        )}
        <Box sx={{ flexGrow: 1, overflowY: "auto", padding: "24px", width: "100%" }}>
          {content}
        </Box>
        <Box sx={{ flexShrink: 0 }}>
          {actions}
        </Box>
      </Box>
    </Drawer>
  );
};

export default M3SideSheet;
