import { StaticTimePicker, StaticTimePickerProps } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React from 'react';

const M3StaticTimePicker = (props: Omit<StaticTimePickerProps<dayjs.Dayjs>, 'children'> & { children: React.ReactNode }) => {
  return (
    <StaticTimePicker {...props}/>
  );
};

export default M3StaticTimePicker;
