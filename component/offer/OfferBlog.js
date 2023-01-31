import Link from "next/link";
import { client } from "../../libs/client";

export default function OfferBlog({ blog }){
  return (
    <div className='offer-wrap'>
         <div className="main-section">
            <div className="section-wrap-inner">
                <ul className="blog-card-wrap">
                <li className="blog-card-box">
                        <Link href={/blog/}>
                            <div className="blog-card-number">00</div>
                            <div className="blog-card-image"><img src="/blog/004.png" /></div>
                            <div className="blog-card-body">
                            <div className="post-detail-category"><span>カテゴリー</span><span>8分で読めます</span></div>
                            <div className="blog-card-title">タイトルタイトルタイトル</div>
                            <div className="blog-card-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                            </div>
                            <div className="blog-card-footer">
                            <div className="post-detail-avator"><img src="/blog/305.png" /></div>
                            <div className="post-detail-author">UI Type layout</div>
                            <div className="post-detail-date">2023.01.30</div>
                            </div>
                        </Link>
                    </li>
                    <li className="blog-card-box">
                        <Link href={/blog/}>
                            <div className="blog-card-number">00</div>
                            <div className="blog-card-image"><img src="/blog/004.png" /></div>
                            <div className="blog-card-body">
                            <div className="post-detail-category"><span>カテゴリー</span><span>8分で読めます</span></div>
                            <div className="blog-card-title">タイトルタイトルタイトル</div>
                            <div className="blog-card-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                            </div>
                            <div className="blog-card-footer">
                            <div className="post-detail-avator"><img src="/blog/305.png" /></div>
                            <div className="post-detail-author">UI Type layout</div>
                            <div className="post-detail-date">2023.01.30</div>
                            </div>
                        </Link>
                    </li>
                    <li className="blog-card-box">
                        <Link href={/blog/}>
                            <div className="blog-card-number">00</div>
                            <div className="blog-card-image"><img src="/blog/004.png" /></div>
                            <div className="blog-card-body">
                            <div className="post-detail-category"><span>カテゴリー</span><span>8分で読めます</span></div>
                            <div className="blog-card-title">タイトルタイトルタイトル</div>
                            <div className="blog-card-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                            </div>
                            <div className="blog-card-footer">
                            <div className="post-detail-avator"><img src="/blog/305.png" /></div>
                            <div className="post-detail-author">UI Type layout</div>
                            <div className="post-detail-date">2023.01.30</div>
                            </div>
                        </Link>
                    </li>
                    <li className="blog-card-box">
                        <Link href={/blog/}>
                            <div className="blog-card-number">00</div>
                            <div className="blog-card-image"><img src="/blog/004.png" /></div>
                            <div className="blog-card-body">
                            <div className="post-detail-category"><span>カテゴリー</span><span>8分で読めます</span></div>
                            <div className="blog-card-title">タイトルタイトルタイトル</div>
                            <div className="blog-card-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                            </div>
                            <div className="blog-card-footer">
                            <div className="post-detail-avator"><img src="/blog/305.png" /></div>
                            <div className="post-detail-author">UI Type layout</div>
                            <div className="post-detail-date">2023.01.30</div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    // const data = await client.get({ endpoint: "blog" });
    const data = await client.get({ endpoint: "blog", queries: { offset: 0, limit: 8 } });
  
    return {
      props: {
        blog: data.contents
      },
    };
  };