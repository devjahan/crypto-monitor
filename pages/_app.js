import { ChakraProvider } from "@chakra-ui/react";
import themeConfig from "../components/themeConfig";
import RootLayout from "../components/RootLayout";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themeConfig}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  );
}

export default App;
