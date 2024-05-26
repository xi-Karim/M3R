import React from "react";
import { Toolbar, Divider, Box } from "@mui/material";

const M3SideSheetActions = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Divider />
      <Toolbar
        sx={{
          justifyContent: "flex-start",
          paddingLeft: "0px",
          paddingRight: "0px",
          gap: "12px"
        }}
      >
        {children}
      </Toolbar>
    </Box>
  );
};

M3SideSheetActions.displayName = 'M3SideSheetActions';

export default M3SideSheetActions;
