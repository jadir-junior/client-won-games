import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { Provider as AuthProvider } from 'next-auth/client'
import { CartProvider } from 'hooks/use-cart'
import { DefaultSeo } from 'next-seo'
import GlobalStyles from 'styles/global'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import SEO from '../../next-seo.config'
import { ThemeProvider } from 'styled-components'
import { WishlistProvider } from 'hooks/use-wishlist'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>Won Games</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                  name="description"
                  content="The best Game Store in the world!"
                />
              </Head>
              <DefaultSeo {...SEO} />
              <GlobalStyles />
              <NextNprogress
                color="#F231A5"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
              />
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
