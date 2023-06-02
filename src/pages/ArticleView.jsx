import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineLike, AiOutlineFieldTime, AiFillLike, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { setWarningMessage } from '../redux/reducers/auth'
import { IoChevronBackOutline } from 'react-icons/io5';
import React from 'react';
import http from '../helper/http';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import defaultImage from '../assets/image/default.png'
import defaultImagePost from '../assets/image/article-image.png'
import ImageTemplate from '../components/ImageTemplate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ArticleView = () => {
    const { id } = useParams()
    const [articleView, setArticleView] = React.useState({})
    const [likesCount, setLikesCount] = React.useState(0)
    const [isLiked, setIsLiked] = React.useState(false);
    const [createdAt, setUpdatedAt] = React.useState(null);
    const token = useSelector(state => state.auth.token)
    const [profile, setProfile] = React.useState({})
    const [comment, setComment] = React.useState([])
    const [bookmarkButton, setBookmarkButton] = React.useState(false)

    const [errorMessage, setErrorMessage] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    React.useEffect(() => {
        const getProfile = async () => {
            const { data } = await http(token).get(`/profile`)
            setProfile(data.results)
        }
        getProfile()
    }, [token])
    const notifySuccessReq = (data) => toast.success(data);
    const HandleLikes = async () => {
        try {
            const articleId = { articleId: id }
            const qs = new URLSearchParams(articleId).toString()
            await http(token).post('/likes', qs)
            const updatedLikesCount = likesCount + 1;
            setLikesCount(updatedLikesCount);
            setIsLiked(true);
        } catch (err) {
            notifySuccessReq(err?.response?.data?.message)
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
            const { data } = await http().get(`/article/${id}`)
            setArticleView(data.results)
            // const storedLikesCount = localStorage.getItem(`likesCount_${id}`);
            const storedLikesCount = data.results.likeCount
            setUpdatedAt(data.results.createdAt);
            setLikesCount(storedLikesCount ? parseInt(storedLikesCount) : 0);
        }
        if (id) {
            getViewArticle(id)
        }
    }, [id])

    React.useEffect(() => {
        async function getDataComment() {
            try {
                const { data } = await http().get(`/comments/${id}?page=1&limit=5&sort=DESC&sortBy=createdAt`);
                setComment(data.results);
            } catch (err) {
                console.log(err)
            }
        }
        getDataComment();
    }, [id]);


    const updateStateComments = () => {
        async function getDataComment() {
            try {
                const { data } = await http().get(`/comments/${id}?page=1&limit=5&sort=DESC&sortBy=createdAt`);
                setComment(data.results);

            } catch (err) {
                console.log(err)
            }
        }
        getDataComment();
    };


    React.useEffect(() => {
        const checkBookmarks = async () => {
            const { data } = await http(token).get(`/bookmarks/check/${id}`)
            const btnStatus = data.results
            if (btnStatus) {
                setBookmarkButton(true)
            }else{
                setBookmarkButton()
            }
        }
        const checLikes = async () => {
            const { data } = await http(token).get(`/likes/check/${id}`)
            const btnStatus = data.results
            if (btnStatus) {
                setIsLiked(true);
            }else{
                setIsLiked();
            }
        }
        checkBookmarks()
        checLikes()
    }, [id, token]);

    const updateStateBookmarks = () => {
        const checkBookmarks = async () => {
            const { data } = await http(token).get(`/bookmarks/check/${id}`)
            const btnStatus = data.results
            if (btnStatus) {
                setBookmarkButton(true)
            }else{
                setBookmarkButton()
            }
        }
        checkBookmarks()
    }


    const addRemoveBookmark = async(event) => {
        event.preventDefault()
        if(!token){
            dispatch(setWarningMessage('You have to login first'))
            navigate('/auth/login')
        }

        try {
            const qs = new URLSearchParams({articleId:id}).toString()
            await http(token).post('/bookmarks/manage', qs)
            updateStateBookmarks()

        } catch (err) {
            const message = err?.response?.data?.message
            if (message) {
                console.log(message)
            }
        }
    }

    const formatUpdatedAt = (createdAt) => {
        return formatDistanceToNow(new Date(createdAt), { addSuffix: true, includeSeconds: false }).replace('about', '');

    };

    const doComment = async (event) => {
        event.preventDefault()
        setErrorMessage('')
        try {
            const { value: content } = event.target.content
            const qs = new URLSearchParams({ articleId: id, content }).toString()
            await http(token).post('/comments', qs)
            event.target.reset()
            setOpenModal(true)
            setTimeout(() => {
                setOpenModal(false)
                updateStateComments()
            }, 1000)

        } catch (error) {
            const message = error?.response?.data?.message
            setErrorMessage(message)
        }
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

            <div className="className='bg-white md:bg-[#F4F7FF]'">
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
                                    {<ImageTemplate className="h-[370px] w-full object-cover" src={articleView?.picture || null} defaultImg={defaultImagePost} />}
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
                                                <button type='button' onClick={addRemoveBookmark}>
                                                    {bookmarkButton ? (
                                                        <RiBookmarkFill size={40} /> 
                                                    ): (
                                                        <RiBookmarkLine size={40} /> 
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <button className="btn btn-primary w-full text-white capitalize">Share Article Link</button>
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
                        <div className="w-full py-16 flex flex-col gap-5 bg-white">
                            <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 text-black font-bold">Comments</div>
                            <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 text-black font-bold">
                                {errorMessage && <div className='alert alert-error'>{errorMessage}</div>}
                            </div>

                            <div className=" pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:px-56 w-full flex flex-col gap-7">
                                {token ?
                                    <div className="flex gap-5 items-center w-full lg:w-[50%]">
                                        <div className="overflow-hidden w-[55px] rounded-md">
                                            {<ImageTemplate className="w-full h-full object-cover" src={profile?.picture || null} defaultImg={defaultImage} />}
                                        </div>
                                        <div className="w-full ">

                                            <form onSubmit={doComment} className="flex gap-3 items-center ">
                                                <div className="w-full">
                                                    <input name='content' type="text" className="input input-bordered input-primary w-full text-black" />

                                                </div>
                                                <div>
                                                    <button type="submit" className="btn btn-ghost text-primary font-semibold capitalize">
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    :
                                    <div className=''>
                                        Please <Link to={"/auth/login"} className='font-bold text-[#03989E] hover:text-[#286090]'>login</Link> to comment
                                    </div>
                                }
                                <div className="flex flex-col gap-5">
                                    {comment.map(items => {
                                        return (
                                            <div className="flex gap-5 items-center" key={`comment-article${items.id}`}>

                                                <div className="overflow-hidden w-[55px] h-[55px] rounded-md">
                                                    {<ImageTemplate className='w-full h-full object-cover' src={items?.picture || null} defaultImg={defaultImage} />}
                                                </div>
                                                <div>
                                                    <div className="text-primary text-md font-semibold">{items.username} - {moment(items.createdAt).startOf('hour').fromNow()}</div>
                                                    <div className="text-black text-md">{items.comment}</div>

                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
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
                <div className='pt-24'>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default ArticleView;
