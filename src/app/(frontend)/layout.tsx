import '@radix-ui/themes/styles.css'
import 'react-day-picker/style.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'
import './globals.css'

import { Merriweather } from 'next/font/google'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { Providers } from '@/providers'
import { RadixThemeProvider } from '@/providers/RadixTheme'
import { Metadata } from 'next'
import { getServerSideURL } from '@/utilities/getURL'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { Header } from '@/globals/Header/Component'
import { Footer } from '@/globals/Footer/Component'
import { Box } from '@radix-ui/themes'
import { ScrollToTopButton } from '@/components/UI/ScrollToTopButton'

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: '400',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={merriweather.variable} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/cross-crown.ico" rel="icon" sizes="32x32" />
      </head>
      <body>
        <Providers>
          <RadixThemeProvider>
            <Box style={{ backgroundColor: 'var(--color-panel-solid)' }}>
              <Header />
              <Box minHeight="100vh" pb="1rem">
                {children}
              </Box>
              <Footer />
              <Box
                position="fixed"
                bottom={{ initial: '3', sm: '6' }}
                right={{ initial: '4', sm: '7' }}
                style={{ zIndex: 9999 }}
              >
                <ScrollToTopButton
                  radius="medium"
                  size="3"
                  style={{
                    boxShadow: 'var(--shadow-5)',
                    cursor: 'pointer',
                    background: 'var(--accent-10)',
                  }}
                />
              </Box>
            </Box>
          </RadixThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
}
