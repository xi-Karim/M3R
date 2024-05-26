import { StaticDatePicker, StaticDatePickerProps } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React from 'react';

const M3StaticDatePicker = (props: Omit<StaticDatePickerProps<dayjs.Dayjs>, 'children'> & { children: React.ReactNode }) => {
  return (
    <StaticDatePicker {...props}>{props.children}</StaticDatePicker>
  );
};

export default M3StaticDatePicker;
