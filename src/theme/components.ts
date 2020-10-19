import { theme as chakraUiTheme } from "@chakra-ui/core";

import { ProgressBaseStyleProps } from "./types";

/**
 * HACK: We need to build the each component's base style because the function "extendTheme"
 * exported by Chakra UI does not merge the styles correctly, erasing all other styles that
 * are not defined in the "components" object below.
 *
 * TODO: Check if this has been fixed in newer Chakra UI versions.
 */
const progressBaseStyle = chakraUiTheme.components.Progress.baseStyle(
  chakraUiTheme,
);

const components = {
  Progress: {
    defaultProps: {
      colorScheme: "",
    },
    baseStyle: (props: ProgressBaseStyleProps): Record<string, unknown> => ({
      ...progressBaseStyle,
      filledTrack: {
        bg: props.colorScheme || "primary.100",
      },
    }),
  },
};

export default components;
