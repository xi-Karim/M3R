import React from 'react';
import { TimePicker, TimePickerProps } from '@mui/x-date-pickers';

const M3TimePicker = (props: TimePickerProps<never, boolean>) => {
  return (
    <TimePicker {...props}/>
  );
};

export default M3TimePicker;
