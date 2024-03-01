
import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxLanding } from "./pages/ParallaxLanding";
import { RouterWrapper } from "./pages/RouterWrapper";
import { theme } from './config/chakra';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterWrapper />
    </ChakraProvider>
  );
}
