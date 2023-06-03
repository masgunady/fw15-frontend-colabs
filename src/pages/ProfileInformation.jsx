
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
    
    const [totalPosts, setTotalPosts] = React.useState(0);

    React.useEffect(() => {
        async function getDataProfile() {
            const { data } = await http(token).get(`/profile/${id}`)
            setProfile(data.results)
        }
        getDataProfile()
    }, [token, id])

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
            <div className="w-full pt-5 pb-7 md:pt-11 md:pb-10  flex flex-col gap-5 bg-white">
                <div className="flex items-center justify-between gap-5 px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                    <div className="flex-1  flex items-center gap-5">
                        <Link to='/' className="btn btn-ghost border-none">
                            <IoChevronBackOutline className="text-black" size={30} />
                        </Link>
                        <div className="text-black hidden md:block text-lg font-semibold">Back</div>
                    </div>
                    <div className="flex-1 flex justify-end lg:justify-start text-black text-lg font-semibold">{profile?.name}</div>
                </div>


            </div>
            <main className='flex flex-col-reverse md:flex-row text-black px-2 md:px-11 xl:px-20 gap-11'>
                <section className='basis-1/3 flex flex-col justify-center items-center px-7 border-t-2 lg:border-t-0 lg:border-r-[1px] w-full min-w-[400px]'>
                    <div className='w-full p-10 my-12 relative rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)]'>
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
                            className='flex flex-col justify-center text-white lg:absolute bg-primary rounded-xl shadow-[0_35px_50px_-15px_rgba(0,0,0,0.3)] lg:w-[28%] left-[85%] mt-[-250px]'
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
                    <div className='flex flex-col w-[50%] text-lg font-extrabold my-24 mt-[60px] gap-[16px]'>
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
                            <ProfileInformationPagination data={ article }/>
                            
                        </div>
                </section>
            </main>
            <Footer />
        </>
    )
}


export default Profile