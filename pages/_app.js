import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/utils/chakra-theme";
import "../public/fonts.css";
import PublicLayout from "@/components/layouts/PublicLayout";
import { Analytics } from "@vercel/analytics/react";
import BackgroundMusic from "@/components/Backgroundmusic";
import  NextNProgress  from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <PublicLayout>
      <ChakraProvider theme={theme}>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <BackgroundMusic />
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </PublicLayout>
  );
}
