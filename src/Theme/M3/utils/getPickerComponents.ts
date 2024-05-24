import { PickersComponentNameToClassKey } from '@mui/x-date-pickers/themeAugmentation';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { CSSObject, CSSInterpolation } from '@mui/system';


export type PickerComponentsOverrides<Theme = unknown> = {
  [Name in keyof PickersComponentNameToClassKey]?: Partial<
    OverridesStyleRules<PickersComponentNameToClassKey[Name], Name, Theme>
  >;
} & {
  MuiCssBaseline?: CSSObject | string | ((theme: Theme) => CSSInterpolation);
};