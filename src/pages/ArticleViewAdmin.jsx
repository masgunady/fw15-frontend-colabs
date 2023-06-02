import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineLike, AiOutlineFieldTime, AiFillLike, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { IoChevronBackOutline } from 'react-icons/io5';
import React from 'react';
import http from '../helper/http';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';

const ArticleViewAdmin = () => {
    const { id } = useParams()
    const [articleView, setArticleView] = React.useState({})
    const [likesCount, setLikesCount] = React.useState(0)
    const [isLiked, setIsLiked] = React.useState(false);
    const [createdAt, setUpdatedAt] = React.useState(null);
    const [openModal, setOpenModal] = React.useState(false)
    const [category, setCategory] = React.useState([])
    const token = useSelector(state => state.auth.token)
    const location = useLocation();
    const reqData = location.state;
    const navigate = useNavigate()


    React.useEffect(() => {
        async function getDataCategory() {
            const { data } = await http().get('/categories')
            console.log(data)
            setCategory(data.results)
        }
        getDataCategory()
    }, [])




    const HandleLikes = async () => {
        try {
            const articleId = { articleId: id }
            const qs = new URLSearchParams(articleId).toString()
            await http(token).post('/likes', qs)
            const updatedLikesCount = likesCount + 1;
            setLikesCount(updatedLikesCount);
            setIsLiked(true);
            localStorage.setItem(`likesCount_${id}`, updatedLikesCount.toString());
        } catch (err) {
            console.log(err)
        }
    }

    const formatLikesCount = (count) => {
        if (count < 1000) {
            return count.toString();
        } else {
            const formattedCount = (count / 1000).toFixed(1);
            return formattedCount.toString() + 'k';
        }
    };



    React.useEffect(() => {
        const getViewArticle = async (id) => {
            const { data } = await http(token).get(`/article/${id}`)
            setArticleView(data.results)
            const storedLikesCount = localStorage.getItem(`likesCount_${id}`);
            setUpdatedAt(data.results.createdAt);
            setLikesCount(storedLikesCount ? parseInt(storedLikesCount) : data.results.likesCount || 0);
        }
        if (id) {
            getViewArticle(id)
        }
    }, [id])

    const formatUpdatedAt = (createdAt) => {
        return formatDistanceToNow(new Date(createdAt), { addSuffix: true, includeSeconds: false }).replace('about', '');

    };

    const accRequestArticle = async () => {
        const qs = new URLSearchParams(reqData).toString()
        await http(token).post('/request/acc-article', qs)
        setOpenModal(true)
        setTimeout(() => {
            setOpenModal(false)
            navigate('/', { replace: true })
        }, 1000)
    }

    const rejectRequestArticle = async () => {
        const qs = new URLSearchParams(reqData).toString()
        await http(token).post('/request/reject-article', qs)
        setOpenModal(true)
        setTimeout(() => {
            setOpenModal(false)
            navigate('/', { replace: true })
        }, 1000)
    }


    return (
        <>

            {/* helmet */}
            <div>
                <Helmet>
                    <title>Article View</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="bg-white">
                <div className="header pb-24">
                    <Header />
                </div>
                <section>
                    <div className="w-full pt-5 pb-7 md:pt-11 md:pb-16  flex flex-col gap-5 bg-white">
                        <div className="flex items-center justify-between gap-5 px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                            <div className="flex-1  flex items-center gap-5">
                                <Link to='/' className="btn btn-ghost border-none">
                                    <IoChevronBackOutline className="text-black" size={30} />
                                </Link>
                                <div className="text-black hidden md:block text-lg font-semibold">Back</div>
                            </div>
                            <div className="flex-1 flex justify-end lg:justify-start text-black text-lg font-semibold">Article Viewer</div>
                        </div>
                    </div>
                </section>
                <main>
                    <section>
                        <div className="w-full min-h-[370px] flex flex-col gap-5 ">
                            <div className="flex flex-col lg:flex-row items-start justify-center gap-5 px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                                <div className="flex-1 min-h-[370px]  flex items-start overflow-hidden object-cover gap-5">
                                    {/* <img className="min-h-[370px] object-cover" src={articleImage} alt="" /> */}
                                    {articleView.picture && <img src={articleView.picture.startsWith('https') ? articleView.picture : `http://localhost:8888/uploads/${articleView.picture}`} className="h-[370px] w-full object-cover" alt="" />}
                                </div>
                                <div className="flex-1  h-full min-h-[370px]  text-black text-lg font-semibold">
                                    <div className="px-6  h-full min-h-[370px] flex flex-col gap-7 items-start justify-between">
                                        <Link>
                                            <div className="text-black text-4xl font-bold">{articleView?.title}</div>
                                        </Link>
                                        <Link to={`/profile-information/${articleView.authorId}`} className="text-black text-center text-lg hover:text-primary">{articleView?.author} - {articleView.role}</Link>
                                        <div className="text-black text-center text-sm">{moment(articleView?.createdAt).format('LLLL')}</div>
                                        <div className="flex justify-start gap-5 w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <button onClick={HandleLikes} className={`btn btn-ghost ${isLiked ? 'text-blue-500' : ''}`}>
                                                        {isLiked ? <AiFillLike size={40} /> : <AiOutlineLike size={40} />}
                                                    </button>

                                                </div>
                                                {likesCount !== null && !isNaN(likesCount) && (
                                                    <div className="text-lg">{formatLikesCount(likesCount)}</div>
                                                )}
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime size={40} />
                                                </div>
                                                <p>{createdAt && formatUpdatedAt(createdAt)}</p>
                                            </div>
                                            <div>
                                                <RiBookmarkFill size={40} />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <Link to={`/edit-article/${articleView.id}`} className='w-full btn btn-secondary normal-case'>Edit Article</Link>
                                        </div>
                                        <div className='w-full'>
                                            <div className="dropdown w-full">
                                                <label tabIndex="0" className="btn normal-case w-full flex">
                                                    <div>Add to Category</div>
                                                </label>
                                                <ul tabIndex="0" className="w-full dropdown-content menu p-2 shadow bg-base-100 rounded-box">
                                                    {category.map(items => {
                                                        return (
                                                            <li key={`category=${items.id}`}>
                                                                <a>{items?.name}</a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="w-full bg-white py-16 flex flex-col gap-5">
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56">
                                {/* <div className="flex flex-wrap items-center justify-center gap-7 h-full text-xl text-black">
                                    {articleView?.content}
                                </div> */}
                                <div className="flex flex-wrap items-center justify-center gap-7 h-full text-xl text-black" dangerouslySetInnerHTML={{ __html: articleView.content }} />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="w-full py-16 flex justify-center px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 gap-5 bg-white">
                            <button onClick={accRequestArticle} className='w-full max-w-[300px] btn btn-primary text-xl  font-bold capitalize text-white'>Publish Article</button>
                            <button onClick={rejectRequestArticle} className='w-full max-w-[300px] btn bg-[#03999e5f] text-xl  font-bold capitalize text-black hover:text-white border-0'>Decline Article Request</button>
                        </div>
                    </section>
                </main>
                <input type="checkbox" id="loading" className="modal-toggle" checked={openModal} />
                <div className="modal">
                    <div className="modal-box bg-transparent shadow-none">
                        <div className='justify-center flex '>
                            <AiOutlineLoading3Quarters className='animate-spin ' color='white' size={60} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div >
        </>
    );
};
export default ArticleViewAdmin;
