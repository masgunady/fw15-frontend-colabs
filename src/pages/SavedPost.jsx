/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { useNavigate, Link } from 'react-router-dom';


import Image from '../components/Image';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { logout as logoutAction } from '../redux/reducers/auth';


// icon
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import http from '../helper/http';
import moment from 'moment';


export default function SavedPost() {
    // const [show, setShow] = React.useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector((state) => state.auth.token);
    const [profile, setProfile] = React.useState({})
    const [bookmarks, setBookmarks] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);
    const [totalPosts, setTotalPosts] = React.useState(0);


    React.useEffect(() => {
        async function getDataBookmarks() {
            const { data } = await http(token).get(`/bookmarks?page=${currentPage}&limit=3`)
            console.log(data)
            setBookmarks(data.results);
            setTotalPages(data.pageInfo?.totalPage);
        }
        getDataBookmarks()
    }, [token])

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

    React.useEffect(() => {
        async function getDataProfile() {
            const { data } = await http(token).get('/profile')
            setProfile(data.results)
        }
        getDataProfile()

    }, [token])

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


    const formatLikesCount = (count) => {
        if (count < 1000) {
            return count.toString(); 
        } else {
            const formattedCount = (count / 1000).toFixed(1); 
            return formattedCount.toString() + 'k'; 
        }
    };


    const doLogout = () => {
        dispatch(logoutAction()),
            navigate('/auth/login')
    }


    return (
        <>
            <div>
                <Helmet>
                    <title>Profile | Saved Post</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>
            <div className="header pb-24">
                <Header /> 
            </div>

            <div className='flex flex-col-reverse md:flex-row text-black border-t-[1px] px-2 md:px-16 lg:px-24 xl:px-28 2xl:px-56'>
                <section className='basis-1/3 flex flex-col justify-center items-center pt-16 px-7 border-t-2 lg:border-t-0 lg:border-r-[1px] w-full min-w-[400px]'>
                    <span className='lg:text-2xl font-extrabold'>Profile</span>
                    <div className='w-full p-10 my-12 relative rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)]'>
                        <div className='flex flex-col gap-10 items-center'>
                            <div className='rounded-3xl w-20 h-20 p-[2px] bg-gradient-to-b from-green-400 to-primary'>
                                <div className='bg-white h-full rounded-3xl p-2'>
                                    <img className='rounded-2xl h-full w-full bg-cover' src={profile?.picture?.startsWith('https') ? profile.picture : (profile?.picture === null ? Image.profileAvatar : `http://${import.meta.env.VITE_BACKEND_URL}/uploads/${profile?.picture}`)} />
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
                        <div
                            className='flex flex-col-3 justify-center text-white lg:absolute bg-primary rounded-xl shadow-[0_35px_50px_-15px_rgba(0,0,0,0.3)] lg:w-[79%] left-[10%]'
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
                    <div className='self-start pl-14 text-center'>
                        <span className='text-primary text-lg font-bold hover:text-[#0d696c] cursor-pointer'>See Profile</span>
                    </div>
                    <div className='w-full text-lg font-bold my-11'>
                        <ul>
                            <Link to='/profile/edit'>
                                <li className='flex justify-between px-14 py-5 hover:bg-slate-200 hover:text-primary'>
                                    <span>Edit Profile</span>
                                    <MdArrowForwardIos
                                        className='text-3xl font-bold transition-colors duration-100'
                                    />
                                </li>
                            </Link>
                            <Link to='/profile/saved-post'>
                                <li className='flex justify-between text-primary px-14 py-5 hover:bg-slate-200 hover:text-primary'>
                                    <span>Saved Post</span>
                                    <MdArrowForwardIos
                                        className='text-3xl font-bold transition-colors duration-100'
                                    />
                                </li>
                            </Link>
                            <li className='flex justify-between px-14 py-5 hover:bg-slate-200 hover:text-primary'>
                                <span>FAQ</span>
                                <MdArrowForwardIos
                                    className='text-3xl font-bold transition-colors duration-100'
                                />
                            </li>
                            <li className='flex justify-between px-14 py-5 hover:bg-slate-200 hover:text-primary'>
                                <span>Help</span>
                                <MdArrowForwardIos
                                    className='text-3xl font-bold transition-colors duration-100'
                                />
                            </li>
                            <li onClick={doLogout} className='flex justify-between px-14 py-5 hover:bg-red-200 hover:text-red-600'>
                                <span>Logout</span>
                                <MdArrowForwardIos
                                    className='text-3xl font-bold transition-colors duration-100'
                                />
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='basis-2/3 w-full flex flex-col gap-10 pt-10 px-7 md:px-2 '>
                    <div className='w-full flex items-center'>
                        <button  onClick={() => navigate(-1)} className='btn btn-ghost'>
                            <MdArrowBackIos className="font-bold" />
                        </button>
                        <span>Saved Post</span>
                    </div>
                    <div className='w-full px-2 xl:px-11'>
                        <div className='w-full pt-7 flex justify-center flex-wrap gap-5 xl:gap-9'>
                            {bookmarks.map((items) => {
                                return (
                                    <>
                                        <div key={`bookmarks-${items.id}`} className="relative overflow-hidden w-full md:max-w-[220px] h-[250px] rounded-xl shadow-xl">
                                            {/* <img src={Image.covid} className="absolute bottom-24 w-full" alt="" /> */}
                                            {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                            <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                    <Link to={`/article-view/${items?.id}`}>
                                                        <div className="text-primary text-xl font-bold">{(items.title).slice(0, 15) + `...`}</div>
                                                    </Link>
                                                    <div className="text-black text-center text-sm">{(items.content).slice(0, 50) + `...`}</div>
                                                    <div className="flex justify-between w-full text-sm text-black">
                                                        <div className="flex gap-2 items-center">
                                                            <div>
                                                                <AiOutlineLike className='text-blue-600' />
                                                            </div>
                                                            <div>{formatLikesCount(items?.likeCount)}</div>
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                            <div>
                                                                <AiOutlineFieldTime className='text-blue-600' />
                                                            </div>
                                                            <div>{moment(items.createdAt).add(7, 'hour').startOf('hour').fromNow()}</div>
                                                        </div>
                                                        <div>
                                                            <RiBookmarkFill className='text-blue-600' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                            <span className='hidden md:flex absolute top-0 right-[50%] cursor-pointer hover:text-primary'>Saved Post</span>
                        </div>
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
                </section>
            </div>
            <Footer />
        </>
    )
}
