import {
    Theme,
    ComponentsProps, ComponentsOverrides, ComponentsVariants
} from '@mui/material';

interface M3Menu {
    MuiMenu: {
        defaultProps?: ComponentsProps['MuiMenu'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiMenu'];
        variants?: ComponentsVariants['MuiMenu'];
    }
}

export const getMenu = (theme: Theme): M3Menu => {
    const { palette } = theme;
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                },
                paper: {
                    backgroundColor: palette.surfaceContainer.main,
                    boxShadow: theme.shadows[2],
                    color: palette.onSurface.main,
                    minWidth: '168px', // Calculated for hdpi screen.
                    maxWidth: '420px', // Calculated for hdpi screen.
                    borderRadius: '6px', // Calculated for hdpi screen.
                }
            }
        }
    };
}
