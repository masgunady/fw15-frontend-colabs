
import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import http from '../helper/http';
import ImageTemplate from '../components/ImageTemplate';
import ProfileInformationPagination from '../components/pagination/ProfileInformationPagination';
import defaultImage from '../assets/image/default.png'

const Profile = () => {
    const { id } = useParams()
    const token = useSelector((state) => state.auth.token);
    const [profile, setProfile] = React.useState({});
    const [article, setArticle] = React.useState([]);
    

    React.useEffect(() => {
        async function getDataProfile() {
            const { data } = await http(token).get(`/profile/${id}`)
            setProfile(data.results)
        }
        getDataProfile()
    }, [token, id])


    React.useEffect(() => {
        async function getDataArticle() {
            try {
                const { data } = await http(token).get(`/article/by-user/${id}?page=1&limit=1000`);
                
                setArticle(data.results);
                
            } catch (error) {
                console.log(error);
            }
        }
        getDataArticle();
    }, [token, id]);
    

    return (
        <>

            {/* helmet */}
            <div>
                <Helmet>
                    <title>Profile | </title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>
            <div className="header pb-24">
                <Header /> 
            </div>
            <div className="w-full pt-5 md:pt-11 md:pb-10  flex flex-col gap-5 bg-white">
                <div className="flex items-center justify-between gap-5 px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                    <div className="flex-1  flex items-center gap-5">
                        <Link to='/' className="btn btn-ghost border-none">
                            <IoChevronBackOutline className="text-black" size={30} />
                        </Link>
                        <div className="text-black hidden md:block text-lg font-semibold">Back</div>
                    </div>
                    <div className="flex-1 hidden  lg:flex justify-end lg:justify-start text-black text-lg font-semibold capitalize">{profile?.name}</div>
                </div>


            </div>
            <main className='flex flex-col justify-start md:flex-row text-black '>
                <section className='basis-1/3  flex flex-col justify-start items-center px-11 lg:border-r-[1px] w-full'>
                    <div className='w-full  min-h-[400px] min-w-[300px] max-w-[500px] p-5 lg:p-10 my-12 relative rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)]'>
                        <div className='flex flex-col gap-10 items-center'>
                            <div className='rounded-3xl w-20 h-20 p-[2px] bg-gradient-to-b from-green-400 to-primary'>
                                <div className='bg-white w-full h-full rounded-3xl p-2'>
                                    <ImageTemplate className='rounded-2xl h-full w-full bg-cover' src={profile?.picture || null} defaultImg={defaultImage} />

                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
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
                            className='flex flex-row lg:flex-col justify-between px-7 lg:px-2 text-white lg:absolute bg-primary rounded-xl shadow-[0_35px_50px_-15px_rgba(0,0,0,0.3)] lg:right-0 lg:mr-[-45px] xl:mr-[-35px] lg:top-28'
                        >
                            <div className='flex flex-col text-xs justify-center items-center p-5 md:w-16 lg:w-16 h-16 rounded-xl bg-primary w-20 cursor-pointer md:text-sm hover:bg-[#0d696c]'>
                                <span>{profile?.articleCountTotal}</span>
                                <span>
                                    Post
                                </span>
                            </div>
                            <div className='flex flex-col text-xs justify-center items-center p-5 md:w-16 lg:w-16 h-16 rounded-xl bg-primary w-20 cursor-pointer md:text-sm hover:bg-[#0d696c]'>
                                <span>
                                    {profile?.visitorCountTotal}
                                </span>
                                <span>
                                    Visitor
                                </span>
                            </div>
                            <div className='flex flex-col text-xs justify-center items-center p-5 md:w-16 lg:w-16 h-16 rounded-xl bg-primary w-20 cursor-pointer md:text-sm hover:bg-[#0d696c]'>
                                <span>
                                    {profile?.commentCountTotal}
                                </span>
                                <span>
                                    Comment
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[50%] text-lg font-extrabold my-24 mt-[60px] gap-[16px]'>
                        <label className="btn btn-primary w-full text-white capitalize">
                            <span>Message</span>
                            <input name='message' className='hidden' type='submit' />
                        </label>
                        <label className="btn btn-secondary w-full text-white capitalize">
                            <span>Following</span>
                            <input name='message' className='hidden' type='submit' />
                        </label>
                    </div>
                </section>
                <section className='basis-2/3 relative gap-10 pt-10 px-11'>
                        <div className='flex items-center justify-center lg:justify-start font-extrabold text-xl pb-11'>Post</div>
                        <div className='relative'>
                            <ProfileInformationPagination data={ article }/>
                            
                        </div>
                </section>
            </main>
            <Footer />
        </>
    )
}


export default Profile