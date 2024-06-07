import React, { ReactNode } from 'react';
import {
  ListItem,
  Typography,
  styled,
  ListItemProps,
  ButtonBase,
  ListItemIcon,
} from '@mui/material';

export interface M3ListItemProps extends ListItemProps {
  clickable?: boolean;
  onClick?: () => void;
};

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: '8px 16px',
  display: 'flex',
  backgroundColor: 'transparent',
}));

const HeadlineTypography = styled(Typography)(({ theme }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flexGrow: 1,
}));

const SupportingTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

const M3ListItem = ({
  children,
  secondaryAction,
  clickable = false,
  onClick,
  ...rest
}: M3ListItemProps) => {
  let icon: ReactNode = null;
  let avatar: ReactNode = null;
  let typography: ReactNode = null;
  let supportingText: ReactNode = null;
  const hasSecondaryAction = !secondaryAction;
  let secondaryActionChild: ReactNode = null;

  if (React.isValidElement(secondaryAction)) {
    secondaryActionChild = secondaryAction;
  }

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      let childType = child.type;
      let childTypeName = typeof childType === 'function' ? childType.name : childType;

      // If the child type is a forwarded component
      if (typeof childType === 'object' && childType !== null) {
        if (typeof (childType as any)?.render === 'function') {
          childTypeName = (childType as any)?.render.displayName || (childType as any)?.render.name || 'Unknown';
        }
      }

      switch (childTypeName) {
        case 'ListItemIcon':
        case 'M3ListItemIcon':
          icon = child.props.children;
          break;
        case 'ListItemAvatar':
        case 'M3ListItemAvatar':
          avatar = child;
          break;
        case 'ListItemText':
        case 'M3ListItemText':
          typography = child;
          supportingText = child.props.secondary;
          break;
      }
    }
  });

  const listItemContent = (
    <>
      {icon && <ListItemIcon sx={{
        marginTop: '0px',
        marginBottom: '0px',
        marginLeft: '0px',
        marginRight: '16px',
        padding: 0,
        width: '24px',
        height: '24px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        '& .MuiButtonBase-root': {
          padding: '0px',
        }
      }} > {icon} </ListItemIcon>}
      {avatar && React.cloneElement(avatar, {
        sx: {
          minWidth: 'auto',
          marginTop: '0px',
          marginBottom: '0px',
          marginLeft: '0px',
          marginRight: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
        }
      })}
      {typography && React.cloneElement(typography, {
        classes: {
          root: supportingText ? HeadlineTypography : SupportingTypography
        },
        sx: {
          margin: 0,
          marginRight: hasSecondaryAction ? 0 : '16px'
        }
      })}
      {secondaryActionChild && React.cloneElement(secondaryActionChild, {
        sx: {
          p: 0,
          m: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
        }
      })}
    </>
  );

  if (clickable) {
    return (
      <ButtonBase onClick={onClick}>
        <StyledListItem {...rest} alignItems={supportingText ? 'flex-start' : 'center'}>
          {listItemContent}
        </StyledListItem>
      </ButtonBase>
    );
  }

  return (
    <StyledListItem {...rest} alignItems={supportingText ? 'flex-start' : 'center'}>
      {listItemContent}
    </StyledListItem>
  );
};

export default M3ListItem;
