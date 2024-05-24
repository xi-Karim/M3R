import M3Menu, { M3MenuProps } from '../M3Menu/M3Menu';
import { M3MenuItemProps } from '../M3MenuItem/M3MenuItem';
import M3IconMenuItem from '../M3IconMenuItem/M3IconMenuItem';
import React, {
    forwardRef,
    HTMLAttributes,
    MouseEvent,
    ReactNode,
    RefAttributes,
    useRef,
    useState,
    Ref,
    useImperativeHandle,
} from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export interface M3NestedMenuItemProps extends Omit<M3MenuItemProps, 'button'> {
  parentMenuOpen: boolean;
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  renderLabel?: () => ReactNode;
  children?: ReactNode;
  className?: string;
  tabIndex?: number;
  ContainerProps?: HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement | null>;
  MenuProps?: Partial<Omit<M3MenuProps, 'children'>>;
}

const M3NestedMenuItem = forwardRef<HTMLLIElement | null, M3NestedMenuItemProps>(function NestedMenuItem(
    props,
    ref
) {
    const {
        parentMenuOpen,
        label,
        leftIcon = null,
        rightIcon = <ArrowRightIcon />,
        disabled = false,
        renderLabel,
        children,
        className,
        tabIndex: tabIndexProp,
        ContainerProps: ContainerPropsProp = {},
        MenuProps,
        ...MenuItemProps
    } = props;

    const { ref: containerRefProp, ...ContainerProps } = ContainerPropsProp;

    const menuItemRef = useRef<HTMLLIElement | null>(null);

    const containerRef = useRef<HTMLDivElement | null>(null);
    useImperativeHandle(containerRefProp as Ref<HTMLDivElement | null> | undefined, () => containerRef.current);

    const menuContainerRef = useRef<HTMLDivElement | null>(null);

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
            if (!props.disabled && menuItemRef.current) {
                setIsSubMenuOpen(true);
            }

            if (ContainerProps.onMouseEnter) {
                ContainerProps.onMouseEnter(e);
            }
    };

    const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
        setIsSubMenuOpen(false);

        if (ContainerProps.onMouseLeave) {
            ContainerProps.onMouseLeave(e);
        }
    };

    const open = isSubMenuOpen && parentMenuOpen;

    let tabIndex;
    if (!props.disabled) {
        tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }

    return (
        <div
            {...ContainerProps}
            ref={containerRef}
            tabIndex={tabIndex}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <M3IconMenuItem
                className={className}
                ref={menuItemRef}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                label={label}
                renderLabel={renderLabel}
            />

            {menuItemRef.current && (
                <M3Menu
                    style={{ pointerEvents: 'none' }}
                    anchorEl={menuItemRef.current}
                    anchorOrigin={{
                        horizontal: 'right',
                        vertical: 'top',
                    }}
                    transformOrigin={{
                        horizontal: 'left',
                        vertical: 'top',
                    }}
                    open={open}
                    autoFocus={false}
                    disableAutoFocus
                    disableEnforceFocus
                    onClose={() => {
                        setIsSubMenuOpen(false);
                    }}
                    {...MenuProps}
                >
                    <div ref={menuContainerRef} style={{ pointerEvents: 'auto' }}>
                        {children}
                    </div>
                </M3Menu>
            )}
        </div>
    );
});

export default M3NestedMenuItem;
