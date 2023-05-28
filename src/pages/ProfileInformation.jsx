
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import Image from '../components/Image';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';



// icon
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import http from '../helper/http';
// import { fetchUserArticles } from 'actions';




const Profile = () => {
    const token = useSelector((state) => state.auth.token);
    const [profile, setProfile] = React.useState({});
    const [article, setArticle] = React.useState({});

    


   

    React.useEffect(() => {
        async function getDataProfile() {
            const { data } = await http(token).get('/profile')
            console.log(data)
            setProfile(data.results)
        }
        getDataProfile()

    }, [])

    React.useEffect(() => {
        async function getDataArticle() {
            try {
                const { data } = await http(token).get('/article/manage?page=1&limit=4');
                console.log(data);
                setArticle(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        getDataArticle();
    }, [token]);


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
                    <div className="flex justify-center lg:hidden pb-5 text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Notification</div>
                    <div className="flex items-center px-7 md:px-16 lg:px-20 xl:px-24 w-full">
                        <div className="flex-1  flex items-center gap-5">
                            <Link to='/article' className="btn btn-ghost border-none">
                                <IoChevronBackOutline className="text-black" size={35} />
                            </Link>
                            <div className="text-black hidden md:block text-lg font-semibold">Category</div>
                        </div>
                        <div className="flex-1 hidden lg:flex justify-center text-black text-lg font-semibold">Joe Daniel</div>
                    </div>
                </div>
                <div className='grid md:grid-cols-[40%_minmax(200px,_1fr)] text-black border-t-[1px]'>
                    <section className='hidden md:flex flex-col pt-10 border-r-[1px]'>
                        <div className='flex w-[67%] p-10 my-10 relative rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)] ml-14'>
                            <div className='flex flex-col'>
                                <div className='flex gap-[24px]'>
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
                            </div>
                            <div
                                className='flex flex-col justify-center text-white lg:absolute bg-primary rounded-xl shadow-[0_35px_50px_-15px_rgba(0,0,0,0.3)] lg:w-[27%] left-[90%]'
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
                                <div className="relative overflow-hidden min-w-[220px] h-[250px] rounded-xl shadow-xl">
                                    <img src={Image.covid} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID 19</div>
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
                                            <div className="text-black text-center text-sm">Why corona never ends? Let&apos;s see how its facts</div>
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