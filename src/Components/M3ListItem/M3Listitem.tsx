import React from "react";
import { Divider, ListItem, ListItemProps, ListItemText, Stack, Typography } from "@mui/material";
import { ListItemAvatar, ListItemIcon, ListItemButton } from '@mui/material';

interface M3ListItemProps extends ListItemProps {
  children?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  headline?: string
  supportingText?: string;
  overlineText?: string;
  divider?: boolean;
  dividerVariant?: "fullWidth" | "inset" | "middle" | undefined;
}

export default function M3ListItem(props: M3ListItemProps) {
  const {
    children,
    divider = false,
    dividerVariant = "fullWidth",
    leading,
    trailing,
    headline,
    supportingText,
    overlineText,
  } = props;

  return (
    <ListItem>
      {leading}
      <Stack>
        <Typography variant="labelSmall">
          {overlineText}
        </Typography>
        <Typography variant="bodyLarge">
          {headline}
        </Typography>
        <Typography variant="bodyMedium">
          {supportingText}
        </Typography>
      </Stack>
      {trailing}
      {children}
      {divider && <Divider variant={dividerVariant} />}
    </ListItem>
  )
}