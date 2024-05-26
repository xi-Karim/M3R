import React from 'react';
import { LocalizationProvider, LocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';

const M3LocalizationProvider = <TDate extends never, TLocale>(props: LocalizationProviderProps<TDate, TLocale>) => {
  return (
    <LocalizationProvider<TDate, TLocale> {...props} />
  );
};

export default M3LocalizationProvider;
