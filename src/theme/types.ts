import { Theme as ChakraTheme, ProgressProps as ChakraProgressProps } from "@chakra-ui/core";

export type ColorHues = {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
};

export type ThemeFonts = ChakraTheme["fonts"] & {
  heading: string;
  body: string;
};

export type ThemeSizes = ChakraTheme["sizes"] & {
  xxs: string;
};

export type ThemeFontSizes = ChakraTheme["fontSizes"] & {
  xxs: string;
};

export type ThemeColors = ChakraTheme["colors"] & {
  primary: ColorHues;
  secondary: ColorHues;
  background: string;
  status: {
    error: string;
    warning: string;
    success: string;
    info: string;
  };
};

export type ColorScheme = keyof ThemeColors;

export interface Theme extends ChakraTheme {
  fonts: ThemeFonts;
  colors: ThemeColors;
}

export interface ProgressBaseStyleProps extends ChakraProgressProps {
  theme: Theme;
}

export type ThemeSizeKey = keyof ThemeSizes;
