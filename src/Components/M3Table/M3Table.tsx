import MUIDataTable, { MUIDataTableProps } from "mui-datatables";
import React from "react";

// Define additional props and modified props for M3Table
interface M3MUIDataTableModifiedProps {}

// Merge the new props with MUIDataTableProps
export type M3MUIDataTableProps = M3MUIDataTableModifiedProps &
  MUIDataTableProps;

const M3Table = (props: M3MUIDataTableProps) => {
  return <MUIDataTable {...props} />;
};

export default M3Table;
