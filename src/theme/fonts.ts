import { theme as chakraUiTheme } from "@chakra-ui/core";

import { ThemeFonts } from "./types";

const fonts: ThemeFonts = {
  ...chakraUiTheme.fonts,
  heading: "Exo, sans-serif",
  body: "Raleway, sans-serif",
};

export default fonts;
