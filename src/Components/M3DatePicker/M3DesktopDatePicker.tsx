import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers';
import React from 'react';

const M3DesktopDatePicker = (props: Omit<DesktopDatePickerProps<never, boolean>, 'children'> & { children: React.ReactNode }) => {
  return (
    <DesktopDatePicker {...props}>{props.children}</DesktopDatePicker>
  );
};

export default M3DesktopDatePicker;
