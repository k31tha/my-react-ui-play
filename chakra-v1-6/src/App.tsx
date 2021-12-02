import * as React from "react";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="brand.700">Welcome</Box>
    </ChakraProvider>
  );
}

export default App;
