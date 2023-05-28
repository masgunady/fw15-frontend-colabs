import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineLike, AiOutlineFieldTime, AiFillLike, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { IoChevronBackOutline } from 'react-icons/io5';
import React from 'react';
import http from '../helper/http';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';

import defaultImage from '../assets/image/default.png'
import ImageTemplate from '../components/ImageTemplate';





const ArticleView = () => {
    const { id } = useParams()
    const [articleView, setArticleView] = React.useState({})
    const [likesCount, setLikesCount] = React.useState(0)
    const [isLiked, setIsLiked] = React.useState(false);
    const [createdAt, setUpdatedAt] = React.useState(null);
    const token = useSelector(state => state.auth.token)
    const [profile, setProfile] = React.useState({})
    const [comment, setComment] = React.useState([])

    const [errorMessage, setErrorMessage] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)


    React.useEffect(() => {
        const getProfile = async () => {
            const { data } = await http(token).get(`/profile`)
            setProfile(data.results)
        }
        getProfile()
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
            const { data } = await http().get(`/article/${id}`)
            console.log(data.results)
            setArticleView(data.results)
            const storedLikesCount = localStorage.getItem(`likesCount_${id}`);
            setUpdatedAt(data.results.createdAt);
            setLikesCount(storedLikesCount ? parseInt(storedLikesCount) : data.results.likesCount || 0);
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


    const updateComments = () => {
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

    

    const formatUpdatedAt = (createdAt) => {
        return formatDistanceToNow(new Date(createdAt), { addSuffix: true, includeSeconds: false }).replace('about', '');
        
    };

    const doComment = async(event) => {
        event.preventDefault()
        setErrorMessage('')
        try {
            
            const {value : content} = event.target.content

            const qs = new URLSearchParams({articleId: id, content}).toString()
            const {data} = await http(token).post('comments', qs)
            event.target.reset()
            setOpenModal(true)
            setTimeout(() => {
                setOpenModal(false)
                updateComments()
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
                                <div className="flex flex-wrap items-center justify-center gap-7 h-full text-xl text-black">
                                    {articleView?.content}
                                </div>
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
                                        {profile.picture && <img src=
                                            {profile.picture.startsWith("https")? profile?.picture : 
                                                (profile.picture.startsWith("http://localhost")? `http://localhost:8888/uploads/${profile?.picture}` : {defaultImage})} 
                                             alt={profile?.fullName}/>
                                        }
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
                                                {/* {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} alt={items.picture} />} */}
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
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default ArticleView;
