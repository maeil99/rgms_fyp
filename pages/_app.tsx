import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RgmsLayout from '../components/layout/RgmsLayout'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <RgmsLayout>
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        </RgmsLayout>
      </div>
      <Script
        src="https://kit.fontawesome.com/04aa5e1825.js"
        crossOrigin="anonymous"
      />
    </ThemeProvider>
  )
}

export default MyApp
