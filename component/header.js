// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";

export default function Header() {
  return (
    <header>
        <h1><Link href="/"><img src="/HeaderWrap/logo.svg" /></Link></h1>
        <nav>
            <ul>
                <li><Link href="/">Appカテゴリ</Link></li>
                <li><Link href="/category">ユーザーフロー</Link></li>
                <li><Link href="/tag">コンポーネント</Link></li>
                <li><Link href="/tag">画面</Link></li>
                <li><Link href="/tag">記事一覧</Link></li>
            </ul>
        </nav>
    </header>
  );
}
