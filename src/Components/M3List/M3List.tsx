import React from 'react';
import { ListProps, List, styled } from "@mui/material";

export interface M3ListProps extends ListProps {
    transparent?: boolean,
}

const CustomList = styled(List, {
    shouldForwardProp: (prop) => prop !== 'transparent',
})<{ transparent: boolean }>(({ theme, transparent }) => ({
    background: transparent ? 'transparent' : theme.palette.surface.main,
}));

const M3List = ({
    children,
    transparent = false,
    ...rest
}: M3ListProps) => {
    return (
        <CustomList transparent={transparent} {...rest}>
            {children}
        </CustomList>
    );
}

export default M3List;
