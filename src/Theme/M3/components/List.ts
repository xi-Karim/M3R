import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3List {
  MuiList: {
    defaultProps?: ComponentsProps['MuiList'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiList'];
    variants?: ComponentsVariants['MuiList'];
  }
};

export const getList = (theme: Theme): M3List => {
  return {
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8,
        }
      }
    }
  }
}