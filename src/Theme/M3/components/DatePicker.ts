import { LineWeight } from "@mui/icons-material";
import { Theme } from "@mui/material";
import { DatePickerProps, DatePickerToolbarClassKey } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface M3DatePicker {
  MuiDatePicker: {
    defaultProps?: Partial<DatePickerProps<dayjs.Dayjs>>;
    styleOverrides?: Partial<Record<DatePickerToolbarClassKey, unknown>>;
  };
}

export const getDatePicker = (theme: Theme): M3DatePicker => {
  const { palette } = theme;
  return {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
  };
};