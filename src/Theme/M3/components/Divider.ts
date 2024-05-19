import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3Divider {
  MuiDivider: {
    defaultProps?: ComponentsProps['MuiDivider'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiDivider'];
    variants?: ComponentsVariants['MuiDivider'];
  }
};

export const getDivider = (theme: Theme): M3Divider => {
  const { palette } = theme;
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          color: palette.outlineVariant.main,
        }
      },
      variants: [
        {
          props: { variant: 'fullWidth' },
          style: {
            margin: 0,
          }
        },
        {
          props: { variant: 'inset' },
          style: {
            marginInlineStart: '16px',
          }
        },
        {
          props: { variant: 'middle' },
          style: {
            marginX: '16px',
          }
        },
      ]
    }
  }
}