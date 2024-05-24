import { Theme } from "@mui/material";
import { PickerComponentsOverrides } from "../utils/getPickerComponents";
import { PickersComponentsPropsList, PickersComponentNameToClassKey } from '@mui/x-date-pickers/themeAugmentation';
import { Margin } from "@mui/icons-material";

interface M3DatePicker {

  MuiPickersPopper?: {
    defaultProps?: PickersComponentsPropsList['MuiPickersPopper'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiPickersPopper'];
  };

  MuiPickersCalendarHeader?: {
    defaultProps?: PickersComponentsPropsList['MuiPickersCalendarHeader'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiPickersCalendarHeader'];
  };

  MuiDayCalendar?: {
    defaultProps?: PickersComponentsPropsList['MuiDayCalendar'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiDayCalendar'];
  };

  MuiDateCalendar?: {
    defaultProps?: PickersComponentsPropsList['MuiDateCalendar'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiDateCalendar'];
  };

  MuiPickersDay?: {
    defaultProps?: PickersComponentsPropsList['MuiPickersDay'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiPickersDay'];
  };

}

export const getDatePicker = (theme: Theme): M3DatePicker => {
  const { palette } = theme;
  return {
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.surfaceContainerHigh.main,
          boxShadow: theme.shadows[3],
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          marginTop: '20px',
          marginBottom: '30px',
          paddingLeft: '12px',
          paddingRight: '12px',
        },
        labelContainer: {
          paddingLeft: "16px",
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        weekDayLabel: {
          height: 'auto',
          margin: '0 3px',
        },
        monthContainer: {
          marginTop: '16px',
        },
        slideTransition: {
          minHeight: '256px',
        },
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          maxHeight: 'none',
          height: 'auto',
        }
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          margin: '0 3px',
        },
      },
    },
  };
};
