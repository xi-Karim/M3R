
import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants, alpha } from '@mui/material';
import { StateLayer, getStateLayerColor } from '../..';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    filled: false,
    outlined: true,
    elevated: true,
  }
}

interface M3Chip {
  MuiChip: {
    defaultProps?: ComponentsProps['MuiChip'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiChip'];
    variants?: ComponentsVariants['MuiChip'];
  }
}
export const getChip = (theme: Theme): M3Chip => {
  const { palette } = theme;
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          fontWeight: 'bold',
          '&:has(>svg)': {
            padding: '8px',
            borderRadius: '50%',
            minWidth: '1em',
            minHeight: '1em'
          }
        }
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            height: '32px',
            border: 'none',
            boxShadow: theme.shadows[0],
            color: palette.onSurface.main,
            outline: `${palette.outline.main} solid 1px`,
            fontSize: theme.typography.labelLarge.fontSize,
            lineHeight: theme.typography.labelLarge.lineHeight,
            letterSpacing: theme.typography.labelLarge.letterSpacing,
            fontWeight: theme.typography.labelLarge.fontWeight,
            "& .MuiSvgIcon": {
              color: palette.primary.main,
              height: '18px',
            },
            "& .Mui-disabled": {
              outline: `${alpha(palette.onSurface.main, 0.12)} solid 1px`,
              color: alpha(palette.onSurface.main, 0.38),
            },
            "&:hover": {
              color: palette.onSurface.main,
              outline: `${getStateLayerColor(StateLayer.Hover, palette.onSurface.main, palette.surface.main)} solid 1px`,
            },
            "& .Mui-focused": {
              outline: `${palette.onSurface.main} solid 1px`,
              backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surfaceContainer.main, palette.surface.main),

            },
          }
        },
        {
          props: { variant: "elevated" },
          style: {
            height: '32px',
            boxShadow: theme.shadows[1],
            color: palette.onSurface.main,
            backgroundColor: palette.surfaceContainerLow.main,
            fontSize: theme.typography.labelLarge.fontSize,
            lineHeight: theme.typography.labelLarge.lineHeight,
            letterSpacing: theme.typography.labelLarge.letterSpacing,
            fontWeight: theme.typography.labelLarge.fontWeight,
            "& .MuiSvgIcon": {
              color: palette.primary.main,
              height: '18px',
            },
            "& .Mui-disabled": {
              background: alpha(palette.onSurface.main, 0.12),
              boxShadow: theme.shadows[0],
            },
            "&:hover": {
              boxShadow: theme.shadows[2],
              color: palette.onSurface.main,
              backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surfaceContainer.main, palette.surface.main),
            },
          }
        },
      ]
    }
  }
}
