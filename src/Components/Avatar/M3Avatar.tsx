import React from "react";
import { Avatar, AvatarProps } from "@mui/material";

// Define additional props and modified props for M3Avatar
interface M3AvatarModifiedProps {}

// Merge the new/ props with AvatarProps
export type M3AvatarProps = M3AvatarModifiedProps & AvatarProps;

const M3Avatar = (props: M3AvatarProps) => {
  const { children } = props;
  return <Avatar {...props}>{children}</Avatar>;
};

export default M3Avatar;
