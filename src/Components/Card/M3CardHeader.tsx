import React from "react";
import { Avatar, CardHeader, Typography } from "@mui/material";

interface M3CardHeaderProps {
  avatar?: React.ReactNode;
  title?: string;
  subheader?: string;
  sx?: object;
}

const M3CardHeader = ({ avatar, title, subheader, sx }: M3CardHeaderProps) => {
  return (
    <CardHeader
      avatar={avatar && <Avatar>{avatar}</Avatar>}
      title={title}
      subheader={subheader}
      sx={sx}
    />
  );
};

export default M3CardHeader;
