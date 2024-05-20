import { LineWeight } from "@mui/icons-material";
import {
  Theme,
  DialogProps,
  BackdropProps,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

interface M3Dialog {
  MuiDialog: {
    defaultProps?: ComponentsProps["MuiDialog"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiDialog"];
    variants?: ComponentsVariants["MuiDialog"];
  };
}

export const getDialog = (theme: Theme): M3Dialog => {
  const { palette } = theme;

  return {
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiDialog-paper": {
            backgroundColor: palette.surfaceContainerHigh.main,
            color: palette.primary.main,
            borderRadius: "28px",
            padding: theme.spacing(3),
            boxShadow: theme.shadows[3],
          },
          "& .MuiDialogContentText-root": {
            color: palette.onSurfaceVariant.main,
            LineHeight: "20px",
            fontSize: "14px",
          },
          "& .MuiDialogTitle-root": {
            fontSize: "24px",
            LineHeight: "32px",
            color: palette.onSurface.main,
            padding: theme.spacing(0),
            marginBottom: theme.spacing(2),
          },
          "& .MuiDialogContent-root": {
            padding: theme.spacing(0),
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            marginBottom: theme.spacing(3),
          },
          "& .MuiDialog-paperFullScreen": {
            borderRadius: "0",
            backgroundColor: palette.surface.main,
            boxShadow: theme.shadows[0],
          },
          "& .MuiDialogActions-root": {
            fontSize: "14px",
            LineHeight: "14px",
            letterSpacing:"0.1px",
            color: palette.primary.main
          },
          "& .MuiDialogContent-dividers": {
            color: palette.outline.main,
          },
        },
      },
    },
  };
};
