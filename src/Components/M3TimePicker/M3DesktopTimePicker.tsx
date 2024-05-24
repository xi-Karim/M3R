import { DesktopTimePicker, DesktopTimePickerProps } from '@mui/x-date-pickers';
import React from 'react';

const M3DesktopTimePicker = (props: Omit<DesktopTimePickerProps<never, boolean>, 'children'> & { children: React.ReactNode }) => {
  return (
    <DesktopTimePicker {...props}/>
  );
};

export default M3DesktopTimePicker;
