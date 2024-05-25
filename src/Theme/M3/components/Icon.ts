import {
    Theme,
    ComponentsProps, ComponentsOverrides, ComponentsVariants
} from '@mui/material';

interface M3Icon {
    MuiSvgIcon: {
        defaultProps?: ComponentsProps['MuiSvgIcon'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiSvgIcon'];
        variants?: ComponentsVariants['MuiSvgIcon'];
    }
}

export const getIcon = (theme: Theme): M3Icon => {
    const { palette } = theme;
    return {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: palette.onSurface.main,
                },
            }
        }
    };
}
