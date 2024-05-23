import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import React, { forwardRef, RefObject } from 'react';

const FlexBox = styled(Box)({
    display: 'flex',
    gap: '12px',
    marginRight: '12px',
    width: '100%',
});

export interface M3IconMenuItemProps {
    MenuItemProps?: MenuItemProps;
    className?: string;
    disabled?: boolean;
    label?: string;
    renderLabel?: () => React.ReactNode;
    leftIcon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    ref?: RefObject<HTMLLIElement>;
    rightIcon?: React.ReactNode;
    sx?: SxProps;
};

export const M3IconMenuItem = forwardRef<HTMLLIElement, M3IconMenuItemProps>(function M3IconMenuItem(
    { MenuItemProps, className, label, leftIcon, renderLabel, rightIcon, ...props },
    ref
) {
    return (
        <MenuItem {...MenuItemProps} ref={ref} className={className} {...props}>
            <FlexBox>
                {leftIcon}
                {renderLabel ? renderLabel() : label}
            </FlexBox>
            {rightIcon}
        </MenuItem>
    );
});

export default M3IconMenuItem;
