import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/utils/chakra-theme";
import "../public/fonts.css";
import PublicLayout from "@/components/layouts/PublicLayout";
import { Analytics } from "@vercel/analytics/react";
import BackgroundMusic from "@/components/Backgroundmusic";

export default function App({ Component, pageProps }) {
  return (
    <PublicLayout>
      <ChakraProvider theme={theme}>
        <BackgroundMusic />
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </PublicLayout>
  );
}
