import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  alpha,
} from "@mui/material";
import { StateLayer, getStateLayerColor } from "../..";

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsColorOverrides {
    tertiary: true;
    surface: true;
  }
}

interface M3Autocomplete {
  MuiAutocomplete: {
    defaultProps?: ComponentsProps["MuiAutocomplete"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiAutocomplete"];
    variants?: ComponentsVariants["MuiAutocomplete"];
  };
}

export const getAutocomplete = (theme: Theme): M3Autocomplete => {
  const { palette, shape, typography } = theme;

  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          borderRadius: shape.borderRadius,
          "& .MuiOutlinedInput-root": {
            borderRadius: shape.borderRadius,
            "& fieldset": {
              borderColor: palette.primary.main,
            },
            "&:hover fieldset": {
              borderColor: getStateLayerColor(
                StateLayer.Hover,
                palette.surface.main,
                palette.primary.main
              ),
            },
            "&.Mui-focused fieldset": {
              borderColor: getStateLayerColor(
                StateLayer.Focus,
                palette.surface.main,
                palette.primary.main
              ),
            },
            "&.Mui-error fieldset": {
              borderColor: palette.error.main,
            },
            "&.Mui-disabled fieldset": {
              borderColor: alpha(palette.onSurface.main, 0.38),
            },
          },
          "& .MuiInputBase-input": {
            ...typography.body1,
            color: palette.primary.main,
            "&.Mui-disabled": {
              color: alpha(palette.onSurface.main, 0.38),
            },
          },
        },
        option: {
          ...typography.body1,
          color: palette.primary.main,
          borderRadius: shape.borderRadius,
          "&:hover": {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surface.main,
              palette.primary.main
            ),
          },
          "&.Mui-focused": {
            backgroundColor: getStateLayerColor(
              StateLayer.Focus,
              palette.surface.main,
              palette.primary.main
            ),
          },
          "&.Mui-selected": {
            backgroundColor: palette.primary.main,
            color: palette.onPrimary.main,
            "&:hover": {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.primary.main,
                palette.onPrimary.main
              ),
            },
            "&.Mui-disabled": {
              backgroundColor: alpha(palette.primary.main, 0.38),
              color: alpha(palette.onPrimary.main, 0.38),
            },
          },
        },
      },
      variants: [
        {
          props: { color: "tertiary" },
          style: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: palette.tertiary.main,
              },
              "&:hover fieldset": {
                borderColor: getStateLayerColor(
                  StateLayer.Hover,
                  palette.surface.main,
                  palette.tertiary.main
                ),
              },
              "&.Mui-focused fieldset": {
                borderColor: getStateLayerColor(
                  StateLayer.Focus,
                  palette.surface.main,
                  palette.tertiary.main
                ),
              },
              "&.Mui-error fieldset": {
                borderColor: palette.error.main,
              },
              "&.Mui-disabled fieldset": {
                borderColor: alpha(palette.tertiary.main, 0.38),
              },
            },
            "& .MuiInputBase-input": {
              color: palette.tertiary.main,
              "&.Mui-disabled": {
                color: alpha(palette.tertiary.main, 0.38),
              },
            },
          },
        },
        {
          props: { color: "surface" },
          style: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: palette.surface.main,
              },
              "&:hover fieldset": {
                borderColor: getStateLayerColor(
                  StateLayer.Hover,
                  palette.surface.main,
                  palette.surface.main
                ),
              },
              "&.Mui-focused fieldset": {
                borderColor: getStateLayerColor(
                  StateLayer.Focus,
                  palette.surface.main,
                  palette.surface.main
                ),
              },
              "&.Mui-error fieldset": {
                borderColor: palette.error.main,
              },
              "&.Mui-disabled fieldset": {
                borderColor: alpha(palette.surface.main, 0.38),
              },
            },
            "& .MuiInputBase-input": {
              color: palette.surface.main,
              "&.Mui-disabled": {
                color: alpha(palette.surface.main, 0.38),
              },
            },
          },
        },
      ],
    },
  };
};
