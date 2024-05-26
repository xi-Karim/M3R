declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayLarge: React.CSSProperties;
    displayMedium: React.CSSProperties;
    displaySmall: React.CSSProperties;
    headlineLarge: React.CSSProperties;
    headlineMedium: React.CSSProperties;
    headlineSmall: React.CSSProperties;
    titleLarge: React.CSSProperties;
    titleMedium: React.CSSProperties;
    titleSmall: React.CSSProperties;
    labelLarge: React.CSSProperties;
    labelMedium: React.CSSProperties;
    labelSmall: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodySmall: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    displayLarge?: React.CSSProperties;
    displayMedium?: React.CSSProperties;
    displaySmall?: React.CSSProperties;
    headlineLarge?: React.CSSProperties;
    headlineMedium?: React.CSSProperties;
    headlineSmall?: React.CSSProperties;
    titleLarge?: React.CSSProperties;
    titleMedium?: React.CSSProperties;
    titleSmall?: React.CSSProperties;
    labelLarge?: React.CSSProperties;
    labelMedium?: React.CSSProperties;
    labelSmall?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true,
    displayMedium: true,
    displaySmall: true,
    headlineLarge: true,
    headlineMedium: true,
    headlineSmall: true,
    titleLarge: true,
    titleMedium: true,
    titleSmall: true,
    labelLarge: true,
    labelMedium: true,
    labelSmall: true,
    bodyLarge: true,
    bodyMedium: true,
    bodySmall: true,
  }
}
export const getTypography = () => {
  return {
    typography: {
      displayLarge: {
        fontFamily: 'Roboto',
        fontSize: '57px',
        lineHeight: '64px',
        letterSpacing: '-0.25px',
        fontWeight: '400',
      },
      displayMedium: {
        fontFamily: 'Roboto',
        fontSize: '45px',
        lineHeight: '52px',
        letterSpacing: '0px',
        fontWeight: '400',
      },
      displaySmall: {
        fontFamily: 'Roboto',
        fontSize: '36px',
        lineHeight: '44px',
        letterSpacing: '0px',
        fontWeight: '400',
      },
      headlineLarge: {
        fontFamily: 'Roboto',
        fontSize: '32px',
        lineHeight: '40px',
        letterSpacing: '0px',
        fontWeight: '400',
      },
      headlineMedium: {
        fontFamily: 'Roboto',
        fontSize: '28px',
        lineHeight: '36px',
        letterSpacing: '0px',
        fontWeight: '400',
      },
      headlineSmall: {
        fontFamily: 'Roboto',
        fontSize: '24px',
        lineHeight: '32px',
        letterSpacing: '0px',
        fontWeight: '400',
      },
      titleLarge: {
        fontFamily: 'Roboto',
        fontSize: '22px',
        lineHeight: '28px',
        letterSpacing: '0px',
        fontWeight: '400',
      },
      titleMedium: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.15px',
        fontWeight: '400',
      },
      titleSmall: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.1px',
        fontWeight: '400',
      },
      labelLarge: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.1px',
        fontWeight: '400',
      },
      labelMedium: {
        fontFamily: 'Roboto',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.5px',
        fontWeight: '400',
      },
      labelSmall: {
        fontFamily: 'Roboto',
        fontSize: '11px',
        lineHeight: '16px',
        letterSpacing: '0.5px',
        fontWeight: '400',
      },
      bodyLarge: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1px',
        fontWeight: '400',
      },
      bodyMedium: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.25px',
        fontWeight: '400',
      },
      bodySmall: {
        fontFamily: 'Roboto',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.4px',
        fontWeight: '400',
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            displayLarge: 'h1',
            displayMedium: 'h1',
            displaySmall: 'h1',
            headlineLarge: 'h2',
            headlineMedium: 'h2',
            headlineSmall: 'h2',
            titleLarge: 'h3',
            titleMedium: 'h3',
            titleSmall: 'h3',
            labelLarge: 'span',
            labelMedium: 'span',
            labelSmall: 'span',
            bodyLarge: 'span',
            bodyMedium: 'span',
            bodySmall: 'span',
          },
        },
      },
    },
  }
}