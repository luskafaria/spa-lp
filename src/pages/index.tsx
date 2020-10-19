import React from "react";
import { Text } from "@chakra-ui/core";
import SEO from "@/components/SEO";

const Home: React.FC = () => (
  <div>
    <SEO title="Home" />
    <Text fontFamily="heading">Hello world!</Text>
  </div>
);

export default Home;
