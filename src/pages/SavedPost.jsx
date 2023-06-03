import { useNavigate, Link } from 'react-router-dom';
import Image from '../components/Image';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { logout as logoutAction } from '../redux/reducers/auth';
// icon
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import http from '../helper/http';
import ImageTemplate from '../components/ImageTemplate';
import SavedPostPagination from '../components/pagination/SavedPostPagination';


export default function SavedPost() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector((state) => state.auth.token);
    const [profile, setProfile] = React.useState({})
    const [bookmarks, setBookmarks] = React.useState([])
    
    React.useEffect(() => {
        async function getDataBookmarks() {
            const { data } = await http(token).get(`/bookmarks?page=1&limit=1000`)
            console.log(data)
            setBookmarks(data.results);
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
                                    <ImageTemplate className='rounded-2xl h-full w-full object-cover' src={profile?.picture || null} defaultImg={Image.profileAvatar} />
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
                                <span>{profile?.articleCountTotal}</span>
                                <span>
                                    Post
                                </span>
                            </div>
                            <div className='flex flex-col justify-center items-center p-5 md:w-16 lg:w-24 h-16 rounded-xl bg-primary cursor-pointer text-sm hover:bg-[#0d696c]'>
                                <span>
                                    {profile?.visitorCountTotal}
                                </span>
                                <span>
                                    Visitor
                                </span>
                            </div>
                            <div className='flex flex-col justify-center items-center p-5 md:w-16 lg:w-24 h-16 rounded-xl bg-primary cursor-pointer text-sm hover:bg-[#0d696c]'>
                                <span>
                                    {profile?.commentCountTotal}
                                </span>
                                <span>
                                    Comment
                                </span>
                            </div>
                        </div>
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
                    <SavedPostPagination data={ bookmarks }/>
                </section>
            </div>
            <Footer />
        </>
    )
}
