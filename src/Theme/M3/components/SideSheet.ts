import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

interface M3SideSheet {
  MuiDrawer: {
    defaultProps?: ComponentsProps["MuiDrawer"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiDrawer"];
    variants?: ComponentsVariants["MuiDrawer"];
  };
}

export const getSideSheet = (theme: Theme): M3SideSheet => {
  const { palette } = theme;
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "0px",
          background: palette.surfaceContainer.main,
          color: palette.onSurfaceVariant.main,
        },
      },
    },
  };
};
