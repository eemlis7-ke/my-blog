import Header from '@/component/Header'
import Footer from '@/component/Footer'
import Offer from '@/component/offer/Offer'
import OfferBlog from '@/component/offer/OfferBlog'

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
        <OfferBlog />
        <Offer />
        <Footer />
      </body>
    </Html>
  )
}
