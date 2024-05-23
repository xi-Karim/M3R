import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  alpha,
  colors,
} from "@mui/material";
import { StateLayer, getStateLayerColor } from "../..";

declare module "@mui/material/TextField" {
  interface TextFieldPropsVariantOverrides {
    filled: true;
    outlined: true;
  }
}

interface M3Button {
  MuiTextField: {
    defaultProps?: ComponentsProps["MuiTextField"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiTextField"];
    variants?: ComponentsVariants["MuiTextField"];
  };
}
export const getTextField = (theme: Theme): M3Button => {
  const { palette } = theme;
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          textTransform: "none",
          // border: `1px solid ${palette.outlineVariant.main}`,
          borderTopRightRadius: "4px",
          borderTopLeftRadius: "4px",
        },
      },
      variants: [
        {
          props: { variant: "filled" },
          style: {
            //# crate color
            caret: palette.onSurfaceVariant.main,
            label: {
              color: palette.onSurfaceVariant.main,
              fontSize: theme.typography.bodyLarge.fontSize,
              lineHeight: theme.typography.bodyLarge.lineHeight,
              fontWeight: theme.typography.bodyLarge.fontWeight,
              "&[data-shrink='true']": {
                fontSize: theme.typography.bodySmall.fontSize,
                lineHeight: theme.typography.bodySmall.lineHeight,
              },
            },
            color: palette.onPrimary.main,
            boxShadow: theme.shadows[0],
            "&.Mui-disabled": {
              backgroundColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.04),
              boxShadow: theme.shadows[0],
            },
            // referees to the help text color
            ".MuiFormHelperText-root": {
              //todo:add typography fonts from theme :
              //typeScale.body-Small
              //font-Roboto
              fontSize: theme.typography.bodyLarge.fontSize,
              lineHeight: theme.typography.bodyLarge.lineHeight,
              letterSpacing: theme.typography.bodyLarge.letterSpacing,
              color: palette.onSurfaceVariant.main,
            },

            "&:hover": {
              ".MuiFormHelperText-root": {
                color: palette.onSurfaceVariant.main,
              },

              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.surface.main,
                palette.onSurface.main
              ),

              color: palette.onSurface.main,

              boxShadow: theme.shadows[1],
            },
            "&:focus": {
              backgroundColor: getStateLayerColor(
                StateLayer.Focus,
                palette.primary.main,
                palette.onPrimary.main
              ),
              boxShadow: theme.shadows[0],
            },
            "&:active": {
              backgroundColor: getStateLayerColor(
                StateLayer.Press,
                palette.primary.main,
                palette.onPrimary.main
              ),
              boxShadow: theme.shadows[0],
            },
          },
        },

        {
          props: { variant: "outlined" },
          style: {
            //backgroundColor: palette.surface.main,
            color: palette.primary.main,
            borderColor: palette.outline.main,
            borderWidth: "1px",
            boxShadow: theme.shadows[0],
            "&.Mui-disabled": {
              borderColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
            },
            "&:hover": {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.surface.main,
                palette.primary.main
              ),
              borderColor: getStateLayerColor(
                StateLayer.Hover,
                palette.outline.main,
                palette.primary.main
              ),
            },
            "&:focus": {
              backgroundColor: getStateLayerColor(
                StateLayer.Focus,
                palette.surface.main,
                palette.primary.main
              ),
              borderColor: getStateLayerColor(
                StateLayer.Focus,
                palette.primary.main,
                palette.primary.main
              ),
            },
            "&:active": {
              backgroundColor: getStateLayerColor(
                StateLayer.Press,
                palette.surface.main,
                palette.primary.main
              ),
              borderColor: getStateLayerColor(
                StateLayer.Press,
                palette.outline.main,
                palette.primary.main
              ),
            },
          },
        },
      ],
    },
  };
};