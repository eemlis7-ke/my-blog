import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="goTop-wrap">
        {/* <Link href={""}>↑</Link> */}
        <a href="#">↑</a>
      </div>
      <div className='footer-wrap'>
        <div className="footer-logo"><Link href="/"><img src="/HeaderWrap/logo_1c.svg" /></Link></div>  
      </div>
      <div className='copyright-wrap'>© 2022 UIXHERO. All rights reserved.</div>
    </footer>
  );
}
