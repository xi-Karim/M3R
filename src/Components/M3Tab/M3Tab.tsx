import React from "react";
import { Tab, TabProps } from "@mui/material";

interface M3TabModifiedProps { }

export type M3TabProps = M3TabModifiedProps & TabProps;

const M3Tab = (props: M3TabProps) => {
  const { children } = props;
  return <Tab {...props}>{children}</Tab>;
};

export default M3Tab;
