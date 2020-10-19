import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/core";
import theme from "@/theme";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
