import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <header>
          <a href="/">
            <Image alt="Isaiah Bullard Logo" src="/IBLogo.png" width="100" height="100" />
          </a>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
