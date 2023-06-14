import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
