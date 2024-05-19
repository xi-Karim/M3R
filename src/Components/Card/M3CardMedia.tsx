import React from "react";
import { CardMedia, CardMediaProps } from "@mui/material";

// Define additional props and modified props for M3CardMedia
interface M3CardMediaModifiedProps {}

// Merge the new/ props with CardMediaProps
export type M3CardMediaProps = M3CardMediaModifiedProps & CardMediaProps;

const M3CardMedia = (props: M3CardMediaProps) => {
  return <CardMedia {...props} />;
};

export default M3CardMedia;
