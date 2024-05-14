import React from "react";
import { CardMedia } from "@mui/material";

interface M3CardMediaProps {
  image?: string;
  sx?: object;
}

const M3CardMedia = ({ image, sx }: M3CardMediaProps) => {
  return <CardMedia image={image} sx={sx} />;
};

export default M3CardMedia;
