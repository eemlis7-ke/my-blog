import Link from "next/link";
import { client } from "../../libs/client";
// import styles from '../../styles/Home.module.scss';

export default function BlogId({ blog }) {
  return (
    <main>
      <div className="section-wrap">
        <div className="hero-section-wrap">
          <div className="hero-wrap">
            <h1 className="hero-section-title">{blog.title}</h1>
            <h2 className="hero-section-text">UIエレメントとは、UI（ユーザーインターフェース）において、ユーザーが直接操作する要素や情報を表示するためのものを指します。これらのUIエレメントを使用することで、ユーザーはアプリケーションやサイトを操作したり、情報を入力することができるようになります。また、UIエレメントは、アプリケーションやサイトのデザインやインターフェースを構成する重要な要素であるため、その使い勝手やデザインにも注意が払われます。</h2>
            <div className="post-detail-category"><span>{blog.category && blog.category.name}</span><span>8分で読めます</span></div>
          </div>
        </div>
        <div className="breadCrumbs-section-wrap">
          <div  className="breadCrumbs-wrap">
            <ul>
              <li>Home</li>
              <li>記事一覧</li>
              <li>UX</li>
              <li>{blog.title}</li>
            </ul>
          </div>
        </div>
        <div className="main-contetns-wrap">
        {/* <div className="main-contetns-index">index</div> */}
          <div className="main-contetns-body">
            <div className="post-header">
              <div className="post-detail-box">
                <div className="post-detail-avator"><img src="/blog/305.png" /></div>
                <div className="post-detail-author">UI Type layout</div>
                <div className="post-detail-date">
                <span>更新日：{blog.publishedAt}</span>
                <span>投稿日：{blog.publishedAt}</span>
                </div>
              </div>
            </div>
            <div className="post-hero-wrap">
              <img src="/blog/001.png" />
            </div>
            <div className="post-body">
              {/* <div
                dangerouslySetInnerHTML={{
                  __html: `${blog.body}`,
                }}
              /> */}
              <div className="post-section">
                <h3>タイトルタイトルタイトル</h3>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
              <div className="post-section">
                <h4>タイトルタイトルタイトル</h4>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                <div className="post-image-wrap">
                  <figure>
                    <img src="/blog/004.png" />
                    <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
                  </figure>
                </div>
                {/* <div className="post-image-wrap">
                  <img src="/blog/002.png" />
                </div> */}
              </div>
              <div className="post-section">
                <h5>タイトルタイトルタイトル</h5>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                <div className="post-link-wrap">
                  <div className="post-link-title">タイトルタイトルタイトル</div>
                  <div className="link__url">
                    <a href="#">https://ejje.weblio.jp/content/%E6%8A%95%E7%A8%BF%E8%80%85</a>
                  </div>
                </div>
                <div className="post-list-wrap">
                  <ul className="list__example">
                    <li>Create visual interest. Cinemagraphs can add visual interest and improve visitor engagement. Because it’s a dynamic element, it can grab the viewer’s attention and keep them engaged in browsing.</li>
                    <li>Conveys a sense of movement. Cinemagraphs can be used to create a sense of movement or bring a sense of life to an otherwise static     website.</li>
                    <li>Communicating the key message of the web page. Cinemagraphs can also be used to showcase products or services in a creative way.</li>
                    <li>Cinemagraps don’t impact website performance. Cinemagraphs don’t impact website performance since they are basically a few-second looped videos.</li>
                  </ul>
                  <ul className="list__disc">
                    <li>Create visual interest. Cinemagraphs can add visual interest and improve visitor engagement. Because it’s a dynamic element, it can grab the viewer’s attention and keep them engaged in browsing.</li>
                    <li>Conveys a sense of movement. Cinemagraphs can be used to create a sense of movement or bring a sense of life to an otherwise static     website.</li>
                    <li>Communicating the key message of the web page. Cinemagraphs can also be used to showcase products or services in a creative way.</li>
                    <li>Cinemagraps don’t impact website performance. Cinemagraphs don’t impact website performance since they are basically a few-second looped videos.</li>
                  </ul>
                  <ul className="list__check">
                    <li>Create visual interest. Cinemagraphs can add visual interest and improve visitor engagement. Because it’s a dynamic element, it can grab the viewer’s attention and keep them engaged in browsing.</li>
                    <li>Conveys a sense of movement. Cinemagraphs can be used to create a sense of movement or bring a sense of life to an otherwise static     website.</li>
                    <li>Communicating the key message of the web page. Cinemagraphs can also be used to showcase products or services in a creative way.</li>
                    <li>Cinemagraps don’t impact website performance. Cinemagraphs don’t impact website performance since they are basically a few-second looped videos.</li>
                  </ul>
                </div>
                <div className="highlight-wrap">
                  <div className="highlight-heading">メモ</div>
                  <ul className="list__example">
                    <li>Create visual interest. Cinemagraphs can add visual interest and improve visitor engagement. Because it’s a dynamic element, it can grab the viewer’s attention and keep them engaged in browsing.</li>
                    <li>Conveys a sense of movement. Cinemagraphs can be used to create a sense of movement or bring a sense of life to an otherwise static     website.</li>
                    <li>Communicating the key message of the web page. Cinemagraphs can also be used to showcase products or services in a creative way.</li>
                    <li>Cinemagraps don’t impact website performance. Cinemagraphs don’t impact website performance since they are basically a few-second looped videos.</li>
                  </ul>
                </div>
                <div className="highlight-wrap">
                  <div className="highlight-heading">おすすめのポイント</div>
                  <ul className="list__check">
                    <li>Create visual interest. Cinemagraphs can add visual interest and improve visitor engagement. Because it’s a dynamic element, it can grab the viewer’s attention and keep them engaged in browsing.</li>
                    <li>Conveys a sense of movement. Cinemagraphs can be used to create a sense of movement or bring a sense of life to an otherwise static     website.</li>
                    <li>Communicating the key message of the web page. Cinemagraphs can also be used to showcase products or services in a creative way.</li>
                    <li>Cinemagraps don’t impact website performance. Cinemagraphs don’t impact website performance since they are basically a few-second looped videos.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="main-contetns-footer"></div>
          </div>
          <div className="main-contetns-side">side</div>
        </div>
      </div>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};