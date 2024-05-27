import {
    Theme,
    ComponentsProps, ComponentsOverrides, ComponentsVariants
} from '@mui/material';

interface M3MenuItem {
    MuiMenuItem: {
        defaultProps?: ComponentsProps['MuiMenuItem'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiMenuItem'];
        variants?: ComponentsVariants['MuiMenuItem'];
    }
}

export const getMenuItem = (theme: Theme): M3MenuItem => {
    const { palette } = theme;
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    minHeight: '72px', // Calculated for hdpi screen.
                },
            }
        }
    };
}
