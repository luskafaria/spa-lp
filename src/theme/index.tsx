import { extendTheme } from "@chakra-ui/core";

import { Theme } from "./types";
import fonts from "./fonts";
import colors from "./colors";

const theme: Theme = extendTheme({
  fonts,
  colors,
});

export default theme;
