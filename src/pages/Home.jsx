import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';

import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import embedVideo from '../assets/image/embed-video.png';
import { Helmet } from 'react-helmet';
import { formatDistanceToNow } from 'date-fns';
// import homeBanner from '../assets/image/home-banner.png';

import React from 'react';
// import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import http from '../helper/http';

const Home = () => {
    const { id } = useParams()
    const [tagArticle, setTagArtcile] = React.useState([]);
    const [category, setCategory] = React.useState([]);
    const [article, setArticle] = React.useState([]);
    const [articleLatest, setArticleLatest] = React.useState([]);
    const [createdAt, setCreatedAt] = React.useState(null);


    const navigate = useNavigate()

    React.useEffect(() => {
        async function getDataTagArticle() {
            const { data } = await http().get('/tags?page=1&limit=15');
            setTagArtcile(data.results);

        }
        getDataTagArticle();
    }, []);

    React.useEffect(() => {
        async function getDataCategory() {
            const { data } = await http().get('/categories?page=1&limit=10');
            setCategory(data.results);
        }
        getDataCategory();
    }, []);

    React.useEffect(() => {
        async function getDataArticle() {
            const { data } = await http().get('/article?sort=DESC&sortBy=likeCount&page=1&limit=10');
            console.log(data.results)
            setArticle(data.results);
        }
        getDataArticle();
    }, [id]);


    const getLikesCount = (articleId) => {
        const storedLikesCount = localStorage.getItem(`likesCount_${articleId}`);
        if (storedLikesCount) {
            const likesCount = parseInt(storedLikesCount);
            if (likesCount < 1000) {
              return likesCount.toString();
            } else {
              const formattedCount = (likesCount / 1000).toFixed(1); 
              return formattedCount.toString() + 'k'; 
            }
          } else {
            return '0';
          }
    };

    const formatUpdatedAt = (createdAt) => {
        return formatDistanceToNow(new Date(createdAt), { addSuffix: true, includeSeconds: false }).replace('about', '');
        
      };


    React.useEffect(() => {
        async function getDataArticleLatest() {
            const { data } = await http().get('/article?sort=DESC&sortBy=createdAt&page=1&limit=4');
            setArticleLatest(data.results);
            setCreatedAt(data.results[0].createdAt);
        }
        getDataArticleLatest();
    }, []);

    const onSearch = (values) => {
        const qStrings = new URLSearchParams(values).toString()
        navigate(`/search-result?${qStrings}`)
    }

    return (
        <>
            {/* helmet */}
            <div>
                <Helmet>
                    <title>HOME | Log Pose</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="className='bg-white md:bg-[#F4F7FF]'">
                <div className="header pb-24">
                    <Header />
                </div>
                <section>
                    <div className="relative p-7 md:p-11 lg:p-28 h-[950px] bg-home-banner bg-no-repeat bg-cover text-black">
                        <div className="absolute flex flex-col gap-7 w-[90%] max-w-[670px]">
                            <div className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold">Share Information and Educate People</div>
                            <div className="w-[90%] max-w-[500px] text-base md:text-xl">
                                Everyone has their point of view of something, but just don&apos;t be afraid to express the facts. Be an author and share you prespective of something to the world.
                            </div>
                            <div>
                                <Link to="/article" className="btn btn-primary text-white capitalize w-[170px] text-md">
                                    Start Exploring
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <main>
                    <section>
                        <div className="w-full pt-16  flex flex-col gap-5 bg-white">
                            <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Search Article</div>
                            <div className=" pl-7 md:pl-16 lg:pl-24 xl:pl-28 w-full">
                               <Formik 
                                    initialValues={{
                                    searchName: '',
                                    }}
                                    onSubmit={onSearch}
                                >
                                    {({ handleBlur, handleChange, handleSubmit }) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-control w-full max-w-[500px]">
                                                <input type='text' name='searchName' onBlur={handleBlur} onChange={handleChange} className="input input-bordered input-primary" placeholder="Search" />
                                            </div>
                                        </form>
                                    )}
                               </Formik>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full py-16  flex flex-col gap-5 bg-white">
                            <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Popular Tags</div>
                            <div className=" pl-7 md:pl-16 lg:pl-24 xl:pl-28 w-full">
                                <div className="w-full  scrollbar-hide overflow-scroll">
                                    <div className="flex items-center gap-5">
                                        {tagArticle.map((item) => {
                                            return (
                                                <div key={`tagArticle-${item.id}`} className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                                    <Link className="text-primary" to="">
                                                        #{item.name}
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white pb-7 flex flex-col gap-5">
                            <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28  text-black font-bold">Category</div>
                            <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28  h-[260px]">
                                <div className="flex items-center gap-5 scrollbar-hide overflow-scroll h-full">
                                    {category.map((items) => {
                                        return (
                                            <div key={`category-${items.id}`} className="flex flex-col gap-5 justify-center items-center">
                                                <div className="w-[180px] h-[180px] hover:h-[190px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                                    {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="w-full h-full object-cover" alt="" />}
                                                </div>
                                                <div className="text-black text-xl font-semibold capitalize">{items.name}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Recomended</div>
                            <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {article.map((items) => {
                                        return (
                                            <div key={`article-${items.id}`} className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl ">
                                                <div></div>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 w-full h-full object-cover" alt="" />}
                                                <div className="w-full h-[50%] absolute bottom-0 bg-white py-3">
                                                    <div key={`article-${items.id}`} className="px-6 flex flex-col gap-2 items-center justify-between h-full">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{items.title}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{items.left}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 justify-center items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {items.likeCount}</div>
                                                            </div>
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineFieldTime />
                                                                </div>
                                                                <div> {createdAt && formatUpdatedAt(createdAt)}</div>
                                                            </div>
                                                            <div>
                                                                <RiBookmarkFill />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full min-h-[635px] px-7 md:px-16 lg:px-28 xl:px-36 bg-[#03999e5f] py-24">
                            <div className="flex flex-col-reverse md:flex-row gap-11 items-start justify-center">
                                <div className="flex flex-col gap-9 max-w-[400px]">
                                    <div className="font-serif text-4xl font-bold text-black">Lets hear about Kaylas success story</div>
                                    <div className="text-2xl font-semibold text-black">See how well News Today works in a real user’s life. </div>
                                    <Link to="/" className="btn btn-primary capitalize w-full text-white tracking-wider max-w-[180px]">
                                        Let&apos;s get started
                                    </Link>
                                </div>
                                <div>
                                    <div>
                                        <img src={embedVideo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white py-16 px-7 md:px-16 lg:px-24 xl:px-28 flex flex-col gap-5 border-b-2 border-primary ">
                            <div className="text-2xl text-black font-bold">Latest News</div>
                            {
                                articleLatest.map(item => {
                                    return (
                                        <div className="border-b-2 border-primary py-7" key={`item-article-latest-${item.id}`}>
                                            <div className=" flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5">
                                                <div className="flex flex-col sm:flex-row gap-9 items-start">
                                                    <div className="w-[260px] h-[176px] rounded-2xl overflow-hidden">
                                                        {item.picture && <img src={item.picture.startsWith('https') ? item.picture : `http://localhost:8888/uploads/${item.picture}`} className='w-full h-full object-cover' alt="" />}
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <Link to={`/article-view/${item.id}`} className="text-primary text-xl font-bold">{item.title}</Link>
                                                        <div className="text-black text-lg font-semibold">{item.content}</div>
                                                        <div className="text-lg capitalize">{item.author}</div>
                                                        <div className="flex items-center justify-start gap-5 w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {item.likeCount}</div>
                                                            </div>
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineFieldTime />
                                                                </div>
                                                                <div> {createdAt && formatUpdatedAt(createdAt)}</div>
                                                            </div>
                                                            <div>
                                                                <RiBookmarkFill />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to={`/article-view/${item.id}`} className="btn btn-primary text-white capitalize w-full max-w-[185px]">
                                                        Read now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }



                        </div>
                    </section>
                </main>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default Home;
