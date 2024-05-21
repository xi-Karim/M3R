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
import { M3Button } from "../Button";

interface M3SideSheetProps extends DrawerProps {
  title: string;
  sheetStyle: "standard" | "modal";
  open?: boolean;
  onClose?: (event: React.SyntheticEvent, reason: string) => void;
  children?: React.ReactNode;
  sx?: object;
  PaperProps?: DrawerProps["PaperProps"];
  actions?: boolean;
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
  sheetStyle,
  actions = false,
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
      borderTopLeftRadius: sheetStyle === "modal" ? "16px" : "0px",
      borderBottomLeftRadius: sheetStyle === "modal" ? "16px" : "0px",
      borderLeft: sheetStyle === "standard" ? "1px solid #79747E" : "none",
      width,
    },
  };

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
        <Box
          style={{
            flexGrow: 1,
            overflowY: "auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            width: "100%",
          }}
        >
          {children}
        </Box>
        {actions && (
          <>
            <Divider />
            <Toolbar
              sx={{
                justifyContent: "flex-start",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            >
              <M3Button variant="filled" onClick={(event) => handleClose(event, 'saveButton')} sx={{ mr: 1 }}>
                Save
              </M3Button>
              <M3Button variant="outlined" onClick={(event) => handleClose(event, 'cancelButton')}>
                Cancel
              </M3Button>
            </Toolbar>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default M3SideSheet;
