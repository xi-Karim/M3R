import { Autocomplete, AutocompleteProps } from "@mui/material";
import React from "react";

// Define additional props and modified props for M3Autocomplete
interface M3AutocompleteModifiedProps {}

// Merge the new props with AutocompleteProps
export type M3AutocompleteProps = AutocompleteProps<
  string,
  boolean,
  boolean,
  boolean
> &
  M3AutocompleteModifiedProps;

function M3Autocomplete(props: M3AutocompleteProps) {
  return <Autocomplete {...props} options={props.options} />;
}

export default M3Autocomplete;
