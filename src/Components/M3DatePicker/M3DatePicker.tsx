import React from 'react';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers';

const M3DatePicker = (props: Omit<DatePickerProps<never, boolean>, 'children'> & { children?: React.ReactNode }) => {
  return (
    <DatePicker showDaysOutsideCurrentMonth fixedWeekNumber={6} {...props}/>
  );
};

export default M3DatePicker;
