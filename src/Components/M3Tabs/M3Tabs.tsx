import React from "react";
import { Tabs, TabsProps } from "@mui/material";

interface M3TabsModifiedProps { }

export type M3TabsProps = M3TabsModifiedProps & TabsProps;

const M3Tabs = (props: M3TabsProps) => {
  const { children } = props;
  return <Tabs {...props}>{children}</Tabs>;
};

export default M3Tabs;
