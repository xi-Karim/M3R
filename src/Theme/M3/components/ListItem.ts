import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";
import { getStateLayerColor, StateLayer } from "../utils/getStayeLayerColor";

interface M3ListItem {
    MuiListItem: {
        defaultProps?: ComponentsProps['MuiListItem'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiListItem'];
        variants?: ComponentsVariants['MuiListItem'];
    }
};

export const getListItem = (theme: Theme): M3ListItem => {
    const { palette } = theme;
    return {
        MuiListItem: {
            styleOverrides: {
                root: {
                    background: palette.surface.main,
                    color: palette.onSurface.main,

                    fontSize: theme.typography.bodyLarge.fontSize,
                    lineHeight: theme.typography.bodyLarge.lineHeight,
                    letterSpacing: theme.typography.bodyLarge.letterSpacing,

                    boxShadow: theme.shadows[0],

                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingX: 0,

                    overflow: 'hidden',

                    '& .MuiListItemText-root': {
                        marginInlineStart: '16px',
                    },

                    '& .MuiListItemIcon-root': {
                        marginInlineStart: '16px',
                        minWidth: '24px',
                        color: palette.onSurfaceVariant.main,
                    },

                    '& .MuiAvatar-root': {
                        marginInlineStart: '16px',
                        background: palette.primaryContainer.main,
                        color: palette.onPrimaryContainer.main,
                    },

                    '& .MuiDivider-root': {
                        color: palette.outline.main,
                        height: 1,
                        marginX: 16,
                    },

                    '& .MuiSupportingText-root': {
                        color: palette.onSurfaceVariant.main,
                        text: theme.typography.displayLarge
                    },

                    '&[line-count="3"]': {
                        alignItems: 'flex-start',
                        height: '88px',
                        maxHeight: '88px',
                        paddingY: '12px',
                    },

                    '&[line-count="2"]': {
                        maxHeight: '72px',
                    },

                    '&[line-count="1"]': {
                        maxHeight: '56px',
                    },

                }
            }
        }
    }
}