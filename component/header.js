import Link from "next/link";

export default function Header() {
  return (
    <header>
        <div className="header-logo"><Link href="/"><img src="/HeaderWrap/logo.svg" /></Link></div>
        <nav>
            <ul className="global-nav">
            <li className="global-nav-list">
                  <Link href="/category">
                    <div className="global-nav-titile">Appカテゴリ</div>
                    <div className="global-nav-subTitile">App Category</div>
                  </Link>
                </li>
                <li className="global-nav-list">
                  <Link href="/userflow">
                    <div className="global-nav-titile">ユーザーフロー</div>
                    <div className="global-nav-subTitile">User Flow</div>
                  </Link>
                </li>
                <li className="global-nav-list">
                  <Link href="/components">
                    <div className="global-nav-titile">コンポーネント</div>
                    <div className="global-nav-subTitile">Components</div>
                  </Link>
                </li>
                <li className="global-nav-list">
                  <Link href="/screen">
                    <div className="global-nav-titile">画面</div>
                    <div className="global-nav-subTitile">Screen</div>
                  </Link>
                </li>
                <li className="global-nav-list is-active">
                  <Link href="/blog">
                    <div className="global-nav-titile">ブログ一覧</div>
                    <div className="global-nav-subTitile">Blog</div>
                  </Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}
