import Header from '@/components/hader'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="jp">
      <Head />
      <body>
        <Header />
        <div className='App'>
          <Main />
          <NextScript />
        </div>
        <footer>Footer</footer>
      </body>
    </Html>
  )
}
