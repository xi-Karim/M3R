import { Theme, } from '@mui/material';
import {
    getAccordion,
    getAlert,
    getAppBar,
    getBadge,
    getButton,
    getCard,
    getCssBaseline,
    getDivider,
    getDrawer,
    getFab,
    getListItem,
    getListItemButton,
    getListItemIcon,
    getMenu,
    getSwitch,
    getToggleButton,
    getToggleButtonGroup,
    getTooltip
} from '../components';
import { getList } from '../components/List';


type M3Components = { components: Theme['components'] };

export const getMUIComponents = (theme: Theme) => {
    //const { palette } = theme;
    return {
        components: {
            ...getCssBaseline(theme),
            ...getAccordion(theme),
            ...getAlert(theme),
            ...getAppBar(theme),
            ...getBadge(theme),
            ...getButton(theme),
            ...getCard(theme),
            ...getDrawer(theme),
            ...getFab(theme),
            ...getList(theme),
            ...getListItem(theme),
            ...getListItemButton(theme),
            ...getListItemIcon(theme),
            ...getMenu(theme),
            ...getSwitch(theme),
            ...getToggleButton(theme),
            ...getToggleButtonGroup(theme),
            ...getTooltip(theme),
            ...getDivider(theme),
        }
    } as M3Components;
};