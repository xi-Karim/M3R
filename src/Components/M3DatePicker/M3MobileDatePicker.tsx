import {MobileDatePicker, MobileDatePickerProps } from '@mui/x-date-pickers';
import React from 'react';

const M3MobileDatePicker = (props: Omit<MobileDatePickerProps<never, boolean>, 'children'> & { children: React.ReactNode }) => {
  return (
    <MobileDatePicker {...props}>{props.children}</MobileDatePicker>
  );
};

export default M3MobileDatePicker;
