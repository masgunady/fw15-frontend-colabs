/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { useNavigate, Link } from 'react-router-dom';


import Image from '../components/Image';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
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

    React.useEffect(() => {
        async function getDataBookmarks() {
            const { data } = await http(token).get('/bookmarks?page=1&limit=9')
            const sortedBookmarks = data.results.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt) });
            setBookmarks(sortedBookmarks);
        }
        getDataBookmarks()
    }, [token])

    React.useEffect(() => {
        async function getDataProfile() {
            const { data } = await http(token).get('/profile')
            setProfile(data.results)
        }
        getDataProfile()

    }, [token])


    const formatLikesCount = (count) => {
        if (count < 1000) {
            return count.toString(); 
        } else {
            const formattedCount = (count / 1000).toFixed(1); 
            return formattedCount.toString() + 'k'; 
        }
    };


    // React.useEffect(() => {
    //     async function getDataArticle() {
    //         const { data } = await http().get(`/article/${id}`);
    //         setArticle(data.results);
    //     }
    //     getDataArticle();
    // }, [id]);


    const doLogout = () => {
        dispatch(logoutAction()),
            navigate('/auth/login')
    }


    // const handleShow = () => {
    //     setShow(!show)
    // }


    return (
        <>
            <div>
                <Helmet>
                    <title>Profile | Saved Post</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>
            <Header />
            {/* <section>
                <div className="w-full pt-9 flex flex-col gap-5 bg-white">
                    <div className="text-black hidden md:block text-lg font-semibold">Profile</div>
                    <div className="flex text-primary hidden lg:flex justify-end text-lg font-semibold">Saved Post</div>
                </div>
            </section> */}
            <div className='grid md:grid-cols-[40%_minmax(200px,_1fr)] text-black border-t-[1px]'>
                <section className='hidden md:flex flex-col pt-10 border-r-[1px]'>
                    <span className='md:text-2xl font-extrabold pl-14'>Profile</span>
                    <div className='w-[67%] p-10 my-10 relative rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)] ml-14'>
                        <div className='flex md:flex-col lg:flex-col-2 gap-10 items-center'>
                            <div className='rounded-3xl w-20 h-20 p-[2px] bg-gradient-to-b from-green-400 to-primary'>
                                <div className='bg-white h-full rounded-3xl p-2'>
                                    {/* <img
                                        className='rounded-3xl h-full object-contain'
                                        src={Image.profileAvatar}
                                        alt="" /> */}
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
                                <span>52</span>
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
                    <div className='text-center mr-20 mt-5'>
                        <span className='text-primary text-lg font-bold hover:text-[#0d696c] cursor-pointer'>See Profile</span>
                    </div>
                    <div className='text-lg font-extrabold my-24'>
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
                <section className='text-lg flex flex-col items-center relative gap-10 mt-20 md:px-0'>
                    <div
                        onClick={() => navigate(-1)}
                        className='flex justify-center items-center self-start absolute top-10 left-10 gap-4 cursor-pointer md:hidden'>
                        <MdArrowBackIos className="font-bold" />
                        <span className='font-semibold'>Saved Post</span>
                    </div>
                    <div className='relative mt-10'>
                        <div className='grid my-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center'>
                            {bookmarks.map((items) => {
                                return (
                                    <>
                                        <div key={`bookmarks-${items.id}`} className="relative overflow-hidden min-w-[220px] h-[250px] rounded-xl shadow-xl">
                                            {/* <img src={Image.covid} className="absolute bottom-24 w-full" alt="" /> */}
                                            {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                            <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                    <Link to={`/article-view/${items?.articleId}`}>
                                                        <div className="text-primary text-xl font-bold">{items?.title}</div>
                                                    </Link>
                                                    <div className="text-black text-center text-sm">{items?.content}</div>
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
                                                            <div>{moment(items.createdAt).startOf('hour').fromNow()}</div>
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
                            {/* <div className="relative overflow-hidden min-w-[220px] h-[250px] rounded-xl shadow-xl">
                                <img src={Image.covid} className="absolute bottom-24 w-full" alt="" />
                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                        <Link>
                                            <div className="text-primary text-xl font-bold">COVID-19</div>
                                        </Link>
                                        <div className="text-black text-center text-sm">Why corona never ends? Let's see how its facts</div>
                                        <div className="flex justify-between w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineLike className='text-blue-600' />
                                                </div>
                                                <div>2.1K</div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime className='text-blue-600' />
                                                </div>
                                                <div>3m ago</div>
                                            </div>
                                            <div>
                                                <RiBookmarkFill className='text-blue-600' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden min-w-[220px] h-[250px] rounded-xl shadow-xl">
                                <img src={Image.covid} className="absolute bottom-24 w-full" alt="" />
                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                        <Link>
                                            <div className="text-primary text-xl font-bold">COVID-19</div>
                                        </Link>
                                        <div className="text-black text-center text-sm">Why corona never ends? Let's see how its facts</div>
                                        <div className="flex justify-between w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineLike className='text-blue-600' />
                                                </div>
                                                <div>2.1K</div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime className='text-blue-600' />
                                                </div>
                                                <div>3m ago</div>
                                            </div>
                                            <div>
                                                <RiBookmarkFill className='text-blue-600' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden min-w-[220px] h-[250px] rounded-xl shadow-xl">
                                <img src={Image.covid} className="absolute bottom-24 w-full" alt="" />
                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                        <Link>
                                            <div className="text-primary text-xl font-bold">COVID-19</div>
                                        </Link>
                                        <div className="text-black text-center text-sm">Why corona never ends? Let's see how its facts</div>
                                        <div className="flex justify-between w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineLike className='text-blue-600' />
                                                </div>
                                                <div>2.1K</div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime className='text-blue-600' />
                                                </div>
                                                <div>3m ago</div>
                                            </div>
                                            <div>
                                                <RiBookmarkFill className='text-blue-600' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden min-w-[220px] h-[250px] rounded-xl shadow-xl">
                                <img src={Image.covid} className="absolute bottom-24 w-full" alt="" />
                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                        <Link>
                                            <div className="text-primary text-xl font-bold">COVID-19</div>
                                        </Link>
                                        <div className="text-black text-center text-sm">Why corona never ends? Let's see how its facts</div>
                                        <div className="flex justify-between w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineLike className='text-blue-600' />
                                                </div>
                                                <div>2.1K</div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime className='text-blue-600' />
                                                </div>
                                                <div>3m ago</div>
                                            </div>
                                            <div>
                                                <RiBookmarkFill className='text-blue-600' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden min-w-[220px] h-[250px] rounded-xl shadow-xl">
                                <img src={Image.covid} className="absolute bottom-24 w-full" alt="" />
                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                        <Link>
                                            <div className="text-primary text-xl font-bold">COVID-19</div>
                                        </Link>
                                        <div className="text-black text-center text-sm">Why corona never ends? Let's see how its facts</div>
                                        <div className="flex justify-between w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineLike className='text-blue-600' />
                                                </div>
                                                <div>2.1K</div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime className='text-blue-600' />
                                                </div>
                                                <div>3m ago</div>
                                            </div>
                                            <div>
                                                <RiBookmarkFill className='text-blue-600' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <span className='hidden md:flex absolute top-0 right-[50%] cursor-pointer hover:text-primary'>Saved Post</span>
                        </div>
                    </div>
                    {/* <div className='flex flex-col items-center gap-5 pt-10'>
                        <div className='rounded-3xl w-32 h-32 p-[2px] bg-gradient-to-b from-green-400 to-primary'>
                            <div className='bg-white h-full rounded-3xl p-2'>
                                <img
                                    className='rounded-3xl h-full object-contain'
                                    src={Image.profileAvatar}
                                    alt="" />
                            </div>
                        </div>
                        <span className='text-cyan-600 cursor-pointer hover:text-cyan-700'>Choose profile picture</span>
                    </div>
                    <form
                        className='grid lg:grid-cols-2 py-5 px-10 md:justify-evenly w-full lg:pl-20 gap-5'>
                        <div className="form-control flex gap-2 mt-5">
                            <label htmlFor="username">
                                Username:
                            </label>
                            <input type="text" name="username" className='input input-bordered w-full md:w-96 lg:w-[90%]' />
                        </div>
                        <div className="form-control flex gap-2 mt-5">
                            <label htmlFor="email">
                                Email:
                            </label>
                            <input type="text" name="email" className='input input-bordered w-full md:w-96 lg:w-[90%]' />
                        </div>
                        <div className="form-control flex gap-2 mt-5">
                            <label htmlFor="job">
                                Job:
                            </label>
                            <input type="text" name="job" className='input input-bordered w-full md:w-96 lg:w-[90%]' />
                        </div>
                        <div className="form-control flex gap-2 mt-5">
                            <label htmlFor="name">
                                Name:
                            </label>
                            <input type="text" name="name" className='input input-bordered w-full md:w-96 lg:w-[90%]' />
                        </div>
                        <div className="form-control flex gap-2 mt-5 relative">
                            <label htmlFor="password">
                                Password:
                            </label>
                            <input type={show ? "text" : "password"} name="password" className='input input-bordered w-full md:w-96 lg:w-[90%]' />
                            <span
                                onClick={handleShow}
                                className='underline underline-offset-3 text-xs absolute top-12 md:right-5 right-5 lg:right-[15%] text-cyan-600 cursor-pointer hover:text-cyan-700'>Show</span>
                        </div>
                        <div className="form-control flex gap-2 mt-5">
                            <label htmlFor="about">
                                About:
                            </label>
                            <textarea name="about" className='input input-bordered w-full md:w-96 lg:w-[90%] h-40 p-2' />
                        </div>
                        <button className='absolute right-10 top-5 text-cyan-600 cursor-pointer hover:text-cyan-700'>Save Change</button>
                    </form>
                    <button className='hidden md:flex btn btn-primary h-14 w-full m-5 md:w-96 md:m-5'>Request to be an author</button> */}
                </section>
            </div>
            <Footer />
        </>
    )
}
