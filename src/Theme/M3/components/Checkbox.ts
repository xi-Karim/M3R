import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  alpha,
} from "@mui/material";
import { StateLayer, getStateLayerColor } from "../..";

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    tertiary: true;
    surface: true;
  }
}

interface M3Checkbox {
  MuiCheckbox: {
    defaultProps?: ComponentsProps["MuiCheckbox"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiCheckbox"];
    variants?: ComponentsVariants["MuiCheckbox"];
  };
}

export const getCheckbox = (theme: Theme): M3Checkbox => {
  const { palette } = theme;

  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: palette.primary.main,
          },
          "&.Mui-checked:hover": {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surface.main,
              palette.primary.main
            ),
          },
          "&.Mui-checked.Mui-focusVisible": {
            backgroundColor: getStateLayerColor(
              StateLayer.Focus,
              palette.surface.main,
              palette.primary.main
            ),
          },
          "&.Mui-checked.Mui-disabled": {
            color: alpha(palette.primary.main, 0.38),
          },
          "&.Mui-disabled": {
            color: alpha(palette.onSurface.main, 0.38),
          },
          "&.Mui-error": {
            color: palette.error.main,
          },
          "&.Mui-error:hover": {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surface.main,
              palette.error.main
            ),
          },
          "&.Mui-error.Mui-focusVisible": {
            backgroundColor: getStateLayerColor(
              StateLayer.Focus,
              palette.surface.main,
              palette.error.main
            ),
          },
          "&.Mui-error.Mui-disabled": {
            color: alpha(palette.error.main, 0.38),
          },
        },
        indeterminate: {
          color: palette.primary.main,
          "&.Mui-checked:hover": {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surface.main,
              palette.primary.main
            ),
          },
          "&.Mui-checked.Mui-focusVisible": {
            backgroundColor: getStateLayerColor(
              StateLayer.Focus,
              palette.surface.main,
              palette.primary.main
            ),
          },
          "&.Mui-checked.Mui-disabled": {
            color: alpha(palette.primary.main, 0.38),
          },
        },
      },
      variants: [
        {
          props: { color: "tertiary" },
          style: {
            "&.Mui-checked": {
              color: palette.tertiary.main,
            },
            "&.Mui-checked:hover": {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.surface.main,
                palette.tertiary.main
              ),
            },
            "&.Mui-checked.Mui-focusVisible": {
              backgroundColor: getStateLayerColor(
                StateLayer.Focus,
                palette.surface.main,
                palette.tertiary.main
              ),
            },
            "&.Mui-checked.Mui-disabled": {
              color: alpha(palette.tertiary.main, 0.38),
            },
          },
        },
        {
          props: { color: "surface" },
          style: {
            "&.Mui-checked": {
              color: palette.surface.main,
            },
            "&.Mui-checked:hover": {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.surface.main,
                palette.surface.main
              ),
            },
            "&.Mui-checked.Mui-focusVisible": {
              backgroundColor: getStateLayerColor(
                StateLayer.Focus,
                palette.surface.main,
                palette.surface.main
              ),
            },
            "&.Mui-checked.Mui-disabled": {
              color: alpha(palette.surface.main, 0.38),
            },
          },
        },
      ],
    },
  };
};

// export const getCheckbox = (theme: Theme): M3Checkbox => {
//   const { palette } = theme;
//   return {
//     MuiCheckbox: {
//       styleOverrides: {
//         root: {
//           color: palette.primary.main,
//           "&:hover": {
//             backgroundColor: getStateLayerColor(
//               StateLayer.Hover,
//               palette.surface.main,
//               palette.primary.main
//             ),
//           },
//           "&.Mui-checked": {
//             color: palette.primary.main,
//           },
//           "&.MuiCheckbox-indeterminate": {
//             color: palette.primary.main,
//           },
//           "&.Mui-error": {
//             color: palette.error.main,
//             "&.Mui-checked": {
//               color: palette.error.main,
//             },
//             "&.MuiCheckbox-indeterminate": {
//               color: palette.error.main,
//             },
//           },
//           "&.Mui-disabled": {
//             color: alpha(palette.onSurface.main, 0.38),
//           },
//         },
//       },
//       variants: [
//         {
//           props: { color: "tertiary" },
//           style: {
//             color: palette.tertiary.main,
//             "&.Mui-checked": {
//               color: palette.tertiary.main,
//             },
//             "&.MuiCheckbox-indeterminate": {
//               color: palette.tertiary.main,
//             },
//             "&.Mui-error": {
//               color: palette.error.main,
//               "&.Mui-checked": {
//                 color: palette.error.main,
//               },
//               "&.MuiCheckbox-indeterminate": {
//                 color: palette.error.main,
//               },
//             },
//             "&.Mui-disabled": {
//               color: alpha(palette.tertiary.main, 0.38),
//             },
//           },
//         },
//         {
//           props: { color: "surface" },
//           style: {
//             color: palette.surface.main,
//             "&.Mui-checked": {
//               color: palette.surface.main,
//             },
//             "&.MuiCheckbox-indeterminate": {
//               color: palette.surface.main,
//             },
//             "&.Mui-error": {
//               color: palette.error.main,
//               "&.Mui-checked": {
//                 color: palette.error.main,
//               },
//               "&.MuiCheckbox-indeterminate": {
//                 color: palette.error.main,
//               },
//             },
//             "&.Mui-disabled": {
//               color: alpha(palette.surface.main, 0.38),
//             },
//           },
//         },
//       ],
//     },
//   };
// };
