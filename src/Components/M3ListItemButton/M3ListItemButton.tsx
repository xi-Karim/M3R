import React from "react";
import { Divider, ListItemButton, ListItemButtonProps, Stack, Typography } from "@mui/material";

export interface M3ListItemButtonProps extends ListItemButtonProps {
  children?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  headline?: string
  supportingText?: string;
  overlineText?: string;
  divider?: boolean;
  dividerVariant?: "fullWidth" | "inset" | "middle" | undefined;
}

export default function M3ListItemButton(props: M3ListItemButtonProps) {
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
    <ListItemButton>
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
    </ListItemButton>
  )
}