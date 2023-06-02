import Header from '../components/Header';
import Footer from '../components/Footer';

import { Helmet } from 'react-helmet';

import ArticleComponent from '../components/ArticleComponents';

const Article = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Article</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="className='bg-white md:bg-[#F4F7FF]'">
                <div className="header pb-24">
                    <Header />
                </div>
                <section>
                    <div className="relative p-7 md:p-11 lg:p-28 h-[750px] bg-article-banner bg-no-repeat bg-cover text-black">
                        <div className="absolute flex flex-col gap-7 w-[90%] max-w-[670px]">
                            <div className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold">Start Writing an Article</div>
                            <div className="w-[90%] max-w-[500px] text-base md:text-xl">You can be an author by being active in reading artciles in a month or you can request to be an author if you have been a member for three months.</div>
                        </div>
                    </div>
                </section>
                <main>
                    <ArticleComponent />
                    <div className="w-full pb-16 flex items-center justify-center">
                        <div className="text-black text-xl font-semibold underline">Load another 30+ category</div>
                    </div>
                </main>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Article;
