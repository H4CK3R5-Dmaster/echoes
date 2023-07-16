import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/utils/chakra-theme'
import "../public/fonts.css"
import PublicLayout from '@/components/layouts/PublicLayout'

export default function App({ Component, pageProps }) {
  return (
    <PublicLayout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </PublicLayout>
  )
}
