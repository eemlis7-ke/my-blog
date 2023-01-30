import Header from '@/component/header'
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
        <div className='offer-wrap'>
          <div className='offer-wrap-inner'>
            <div className='offer-wrap-title'>Let's XD together.</div>
            <div className='offer-wrap-text'>Where teams create the world’s best experiences at scale, powered by the leader in creative tools.</div>
            <div className='offer-wrap-link'><a href="">Start Free XD Trial</a></div>
            </div>
        </div>
        <footer>
          <div className='footer-wrap'>footer</div>
          <div className='copyright-wrap'>Copyright © 2019-2021 Adobe. All Rights Reserved. / Privacy / Terms of use / Cookie Preferences / Do not sell or share my personal information</div>
        </footer>
      </body>
    </Html>
  )
}
