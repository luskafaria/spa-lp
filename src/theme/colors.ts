import { theme as chakraUiTheme } from "@chakra-ui/core";

import { ThemeColors } from "./types";

const PRIMARY_COLOR = "#B28530";
const PRIMARY_COLOR_LIGHT = "#CDAE8E";
const PRIMARY_COLOR_DISABLED = "#ECE0D4";

const SECONDARY_COLOR = "#828282";
const SECONDARY_COLOR_LIGHT = "#A6A6A6";
const SECONDARY_COLOR_DISABLED = "#DDDDDD";

const colors: ThemeColors = {
  ...chakraUiTheme.colors,
  black: "#000000",
  white: "#ffffff",
  background: "#fffff9",
  primary: {
    50: PRIMARY_COLOR_DISABLED,
    100: PRIMARY_COLOR_LIGHT,
    200: PRIMARY_COLOR,
    300: PRIMARY_COLOR,
    400: PRIMARY_COLOR,
    500: PRIMARY_COLOR,
    600: PRIMARY_COLOR,
    700: PRIMARY_COLOR,
    800: PRIMARY_COLOR,
    900: PRIMARY_COLOR,
  },
  secondary: {
    50: SECONDARY_COLOR_DISABLED,
    100: SECONDARY_COLOR_LIGHT,
    200: SECONDARY_COLOR,
    300: SECONDARY_COLOR,
    400: SECONDARY_COLOR,
    500: SECONDARY_COLOR,
    600: SECONDARY_COLOR,
    700: SECONDARY_COLOR,
    800: SECONDARY_COLOR,
    900: SECONDARY_COLOR,
  },
  gray: {
    ...chakraUiTheme.colors.gray,
    100: "#EAEAEA",
    200: "#D1D1D1",
    300: "#ADADAD",
    400: "#707070",
  },
  status: {
    success: "#489B4B",
    warning: "#CE7915",
    error: "#C11E1E",
    info: "#248EB4",
  },
};

export default colors;
