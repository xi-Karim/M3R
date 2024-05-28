import { DesktopTimePicker, DesktopTimePickerProps } from '@mui/x-date-pickers';
import React from 'react';

const M3DesktopTimePicker = (props: DesktopTimePickerProps<never, boolean>) => {
  return (
    <DesktopTimePicker {...props}/>
  );
};

export default M3DesktopTimePicker;
