import { StaticTimePicker, StaticTimePickerProps } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React from 'react';

const M3StaticTimePicker = (props: StaticTimePickerProps<dayjs.Dayjs>) => {
  return (
    <StaticTimePicker {...props}/>
  );
};

export default M3StaticTimePicker;
