// pages/index.js
import Link from "next/link";
import { client } from "../../libs/client";
import { Pagination } from '../../component/Pagination';
// import '@/styles/globals.css'

export default function Home({ blog, totalCount, category, tag }) {
  return (
    <div className="section-wrap">
      {/* <ul>
        {category.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {tag.map((tag) => (
          <li key={tag.id}>
            <Link href={`/tag/${tag.id}`}>{tag.name}</Link>
          </li>
        ))}
      </ul> */}
      <div className="hero-section-wrap">
        <div className="hero-wrap">
          <h1 className="hero-section-title">ブログ</h1>
          <h2 className="hero-section-text">UI/UX、デザイン、AI画像など、UIXHEROが日頃検索して調べたことなどを中心に情報を発信します。</h2>
          </div>
      </div>
      <div className="tag-section-wrap">
        <div  className="tag-wrap">
          <ul>
            <li className="is-selected">すべて</li>
            <li>UI</li>
            <li>UX</li>
            <li>デザイン</li>
            <li>AI画像</li>
            <li>Code</li>
          </ul>
        </div>
      </div>
      <div className="main-section">
        <div className="section-wrap-inner">
          <ul className="blog-card-wrap">
            {blog.map((blog) => (
              <li key={blog.id} className="blog-card-box">
                <Link href={`/blog/${blog.id}`}>
                  <div className="blog-card-number">00</div>
                  <div className="blog-card-image"><img src="/blog/001.png" /></div>
                  <div className="blog-card-body">
                    <div className="post-detail-category"><span>カテゴリー</span><span>8分で読めます</span></div>
                    <div className="blog-card-title">{blog.title}</div>
                    <div className="blog-card-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                  </div>
                  <div className="blog-card-footer">
                    <div className="post-detail-avator"><img src="/blog/305.png" /></div>
                    <div className="post-detail-author">UI Type layout</div>
                    <div className="post-detail-date">2023.01.30</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="section-wrap-inner">
          <Pagination totalCount={totalCount} />
        </div>
      </div>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  // const data = await client.get({ endpoint: "blog" });
  const data = await client.get({ endpoint: "blog", queries: { offset: 0, limit: 8 } });
  // カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "categories" });
  const tagData = await client.get({ endpoint: "tags" });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category: categoryData.contents,
      tag: tagData.contents,
    },
  };
};