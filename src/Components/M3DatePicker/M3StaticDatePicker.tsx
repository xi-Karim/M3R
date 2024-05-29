import { StaticDatePicker, StaticDatePickerProps } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React from 'react';

const M3StaticDatePicker = (props: StaticDatePickerProps<dayjs.Dayjs> ) => {
  return (
    <StaticDatePicker {...props}/>
  );
};

export default M3StaticDatePicker;
