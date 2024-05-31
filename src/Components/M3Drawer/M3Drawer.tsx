import React from "react";
import { Drawer, DrawerProps, styled } from "@mui/material";

// Define additional props and modified props for M3Drawer
interface M3DrawerModifiedProps {}

// Merge the new props with DrawerProps
export type M3DrawerProps = M3DrawerModifiedProps & DrawerProps;

const CustomDrawer = styled(Drawer)(({ theme }) => {
  return {
    '& .MuiPaper-root': {
      background: theme.palette.surfaceContainerLow.main,
    }
  };
});

const M3Drawer: React.FC<M3DrawerProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <CustomDrawer {...otherProps}>
      {children}
    </CustomDrawer>
  );
};

export default M3Drawer;
