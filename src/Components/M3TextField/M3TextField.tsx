import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

type M3Props = TextFieldProps & {
  variant?: "filled" | "outlined";
}

const M3TextField = ({ ...props }: M3Props) => {
  return <TextField  {...props}></TextField>;
};

export default M3TextField;