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
        fontSize: 57,
        lineHeight: 64,
        letterSpacing: -0.25,
      },
      displayMedium: {
        fontFamily: 'Roboto',
        fontSize: 45,
        lineHeight: 52,
        letterSpacing: 0,
      },
      displaySmall: {
        fontFamily: 'Roboto',
        fontSize: 36,
        lineHeight: 44,
        letterSpacing: 0,
      },
      headlineLarge: {
        fontFamily: 'Roboto',
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0,
      },
      headlineMedium: {
        fontFamily: 'Roboto',
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0,
      },
      headlineSmall: {
        fontFamily: 'Roboto',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0,
      },
      titleLarge: {
        fontFamily: 'Roboto',
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0,
      },
      titleMedium: {
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
      },
      titleSmall: {
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
      },
      labelLarge: {
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
      },
      labelMedium: {
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
      labelSmall: {
        fontFamily: 'Roboto',
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
      bodyLarge: {
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
      },
      bodyMedium: {
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
      },
      bodySmall: {
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
      },
    }
  }
}