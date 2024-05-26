import { Theme, colors } from "@mui/material";
import { PickerComponentsOverrides } from "../utils/getPickerComponents";
import { PickersComponentsPropsList, PickersComponentNameToClassKey } from '@mui/x-date-pickers/themeAugmentation';

interface M3DatePicker {

  MuiTimePickerToolbar?: {
    defaultProps?: PickersComponentsPropsList['MuiPickersPopper'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiTimePickerToolbar'];
  };

  MuiPickersPopper?: {
    defaultProps?: PickersComponentsPropsList['MuiPickersPopper'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiPickersPopper'];
  };

  MuiDialog?: {
    defaultProps?: PickersComponentsPropsList['MuiDialog'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiDialog'];
  };
  MuiClockPointer?: {
    defaultProps?: PickersComponentsPropsList['MuiClockPointer'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiClockPointer'];
  };
  MuiClockNumber?: {
    defaultProps?: PickersComponentsPropsList['MuiClockNumber'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiClockNumber'];
  };
  MuiTimeClock?: {
    defaultProps?: PickersComponentsPropsList['MuiTimeClock'];
    styleOverrides?: PickerComponentsOverrides<Theme>['MuiTimeClock'];
  };
}

export const getTimePicker = (theme: Theme): M3DatePicker => {
  const { palette } = theme;
  return {
    MuiTimePickerToolbar: {
      styleOverrides: {
        separator: {
          color: palette.onSurface.main,
          lineHeight: "64px",
          fontSize: "57px",
          letterSpacing: "-0.25px",
          margin: "0",
          padding: "0px 5px"
        },
        hourMinuteLabel: {
          color: palette.surfaceTintColor.main,
          width: "216px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          '& > button': { // Targeting the button directly inside hourMinuteLabel
            backgroundColor: palette.surfaceContainerHighest.main,
            height: "100%",
            width: "100%",
            borderRadius: "8px"
          },
          "& .Mui-selected": {
            backgroundColor: palette.primaryContainer.main,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          },
        },
        ampmSelection: {
          borderRadius: "8px",
          color: palette.onSurface.main,
          height: "100%",
          width: "52px",
          outlineColor: palette.outline.main,
          outlineWidth: "1px",
          outlineStyle: "solid",
          '& > button': { // Targeting the button directly inside hourMinuteLabel
            height: "100%",
            width: "100%",
            borderRadius: "8px",
          },
          "& .Mui-selected": {
            backgroundColor: palette.tertiaryContainer.main,
            color: palette.onTertiaryContainer.main,
            width: "100%",
            justifyContent: "center",
            display: "flex",
            height: "100%",
            borderRadius: "inherit",
            alignItems: "center"
          },
        }
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
        
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
       borderRadius:"28px",
       backgroundColor: palette.surfaceContainerHigh.main
        },
      },
    },
    MuiClockPointer: {
      styleOverrides: {
        root: {
  backgroundColor:palette.primary.main,
  color:palette.onPrimary.main
        },
        thumb: {
  backgroundColor:"transparent",
        },
      },
    },
    MuiClockNumber: {
      styleOverrides: {
        root: {
  color:palette.onSurface.main
        },
        selected: {
  color:palette.onPrimary.main
        }
      },
    },
    MuiTimeClock: {
      styleOverrides: {
        arrowSwitcher: {
 display:"none"
        },
      },
    },
  };
};
