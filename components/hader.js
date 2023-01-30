// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";

export default function Header() {
  return (
    <header>
        <h1><Link href="/">Blog Title</Link></h1>
        <nav>
            <ul>
                <li><Link href="/">トップ</Link></li>
                <li><Link href="/category">カテゴリー</Link></li>
                <li><Link href="/tag">タグ</Link></li>
            </ul>
        </nav>
    </header>
  );
}
