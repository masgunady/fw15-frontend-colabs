
import React from 'react'
import { useParams } from 'react-router-dom';


import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';
import moment from 'moment'
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import defaultImage from '../assets/image/default.png'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"




// icon
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import http from '../helper/http';
import ImageTemplate from '../components/ImageTemplate';


const Profile = () => {
    const { id } = useParams()
    const token = useSelector((state) => state.auth.token);
    const [profile, setProfile] = React.useState({});
    const [article, setArticle] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);
    const [totalPosts, setTotalPosts] = React.useState(0);

    React.useEffect(() => {
        async function getDataProfile() {
            const { data } = await http(token).get(`/profile/${id}`)
            setProfile(data.results)
        }
        getDataProfile()
    }, [])

    React.useEffect(() => {
        async function getTotalPosts() {
          try {
            const { data } = await http(token).get(`/article/by-user/${profile.id}`);
            setTotalPosts(data.results.length);
          } catch (error) {
            console.error(error);
          }
        }
        if (profile.id) {
          getTotalPosts();
        }
      }, [profile, token]);


    React.useEffect(() => {
        async function getDataArticle() {
            try {
                const { data } = await http(token).get(`/article/by-user/${id}?page=${currentPage}&limit=4`);
                console.log(data.pageInfo?.totalPage);
                setArticle(data.results);
                setTotalPages(data.pageInfo?.totalPage);
            } catch (error) {
                console.log(error);
            }
        }
        getDataArticle();
    }, [token, currentPage, id]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

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






    return (
        <>

            {/* helmet */}
            <div>
                <Helmet>
                    <title>Profile</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>
            <Header />
            <main className="bg-[#E5E5E5]">
                <div className="w-full pt-9  flex flex-col gap-5">
                    <div className="flex justify-center lg:hidden pb-5 text-2xl px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 text-black font-bold">Notification</div>
                    <div className="flex items-center px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                        <div className="flex-1  flex items-center gap-5">
                            <Link to='/article' className="btn btn-ghost border-none">
                                <IoChevronBackOutline className="text-black" size={35} />
                            </Link>
                            <div className="text-black hidden md:block text-lg font-semibold">Category</div>
                        </div>
                        <div className="flex-1 hidden lg:flex justify-center text-black text-lg font-semibold">Joe Daniel</div>
                    </div>
                </div>
                <div className='grid md:grid-cols-[40%_minmax(200px,_1fr)] text-black border-t-[1px] px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56'>
                    <section className='hidden md:flex flex-col pt-10 border-r-[1px]'>
                        <div className='flex w-[67%] p-10 my-10 relative rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)] ml-14'>
                            <div className='flex flex-col'>
                                <div className='flex gap-[24px]'>
                                    <div className='rounded-3xl w-20 h-20 p-[2px] bg-gradient-to-b from-green-400 to-primary'>
                                        <div className='bg-white h-full rounded-3xl p-2'>
                                            {/* <img className='rounded-2xl h-full w-full bg-cover' src={profile?.picture?.startsWith('https') ? profile.picture : (profile?.picture === null ? Image.profileAvatar : `http://${import.meta.env.VITE_BACKEND_URL}/uploads/${profile?.picture}`)} /> */}
                                            <ImageTemplate className='rounded-2xl h-full w-full bg-cover' src={profile?.picture || null} defaultImg={defaultImage} />
                                        </div>
                                    </div>
                                    <div
                                        className='flex flex-col items-center'>
                                        <span className='lg:text-lg text-primary'>
                                            {profile?.username}
                                        </span>
                                        <span className='lg:text-2xl font-extrabold'>
                                            {profile?.name}
                                        </span>
                                        <span className='lg:text-lg text-blue-500'>
                                            {profile?.role}
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-col my-5'>
                                    <span className='font-extrabold text-base'>About me</span>
                                    <span className='text-sm'>
                                        {profile?.about}
                                    </span>
                                </div>
                            </div>
                            <div
                                className='flex flex-col justify-center text-white lg:absolute bg-primary rounded-xl shadow-[0_35px_50px_-15px_rgba(0,0,0,0.3)] lg:w-[27%] left-[90%]'
                            >
                                <div className='flex flex-col justify-center items-center p-5 md:w-16 lg:w-24 h-16 rounded-xl bg-primary cursor-pointer text-sm hover:bg-[#0d696c]'>
                                    <span>{totalPosts}</span>
                                    <span>
                                        Post
                                    </span>
                                </div>
                                <div className='flex flex-col justify-center items-center p-5 md:w-16 lg:w-24 h-16 rounded-xl bg-primary cursor-pointer text-sm hover:bg-[#0d696c]'>
                                    <span>
                                        250
                                    </span>
                                    <span>
                                        Visitor
                                    </span>
                                </div>
                                <div className='flex flex-col justify-center items-center p-5 md:w-16 lg:w-24 h-16 rounded-xl bg-primary cursor-pointer text-sm hover:bg-[#0d696c]'>
                                    <span>
                                        4.5K
                                    </span>
                                    <span>
                                        Comment
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-[50%] text-lg font-extrabold my-24 mt-[60px] gap-[16px] ml-[100px]'>
                            <label className="btn btn-primary w-full text-white">
                                <span>Message</span>
                                <input name='message' className='hidden' type='submit' />
                            </label>
                            <label className="btn btn-secondary w-full text-white">
                                <span>Following</span>
                                <input name='message' className='hidden' type='submit' />
                            </label>
                        </div>
                    </section>
                    <section className='relative gap-10 pt-10 px-10 md:px-0'>
                        <div className='font-extrabold text-xl ml-10'>Post</div>
                        <div className='relative'>
                            <div className='grid p-10 lg:grid-cols-2 gap-5'>

                                {article.map(items => {
                                    return (
                                        <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                            {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                            <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                    <Link to={`/article-view/${items.id}`}>
                                                        <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                    </Link>
                                                    <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                    <div className="flex justify-between w-full text-sm text-black">
                                                        <div className="flex gap-2 items-center">
                                                            <div>
                                                                <AiOutlineLike />
                                                            </div>
                                                            <div> {getLikesCount(items.id)}</div>
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                            <div>
                                                                <AiOutlineFieldTime />
                                                            </div>
                                                            <div>{moment(items.createdAt).startOf('hour').fromNow()}</div>
                                                        </div>
                                                        <div>
                                                            <RiBookmarkFill />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="flex justify-center items-center gap-9 mb-10">
                                <div className="flex justify-center items-center">
                                    <div>
                                        <button className="btn btn-base-100 shadow-lg shadow-black-500/70"  onClick={handlePrevPage}><AiOutlineArrowLeft size={20} color="white" /></button>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div>
                                        <button className="btn btn-primary shadow-lg shadow-black-500/70"  onClick={handleNextPage}><AiOutlineArrowRight size={20} color="white" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}


export default Profile