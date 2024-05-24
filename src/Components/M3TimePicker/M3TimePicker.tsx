import React from 'react';
import { TimePicker, TimePickerProps } from '@mui/x-date-pickers';

const M3TimePicker = (props: Omit<TimePickerProps<never, boolean>, 'children'> & { children?: React.ReactNode }) => {
  return (
    <TimePicker {...props}/>
  );
};

export default M3TimePicker;
