import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/image/logo-tosca.png';
import { Link } from 'react-router-dom';
// import Image from './Image/';
import ImageTemplate from '../components/ImageTemplate'
import {logout as logoutAction, setWarningMessage} from '../redux/reducers/auth'
import http from '../helper/http';
import defaultImage from '../assets/image/default.png'

import {GrArticle} from 'react-icons/gr'

import { FiHome, FiInfo, FiList, FiUnlock, FiSettings, FiLogOut, FiAlignJustify } from 'react-icons/fi';
import {MdNotificationsNone} from 'react-icons/md'


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [profile, setProfile] = React.useState({})
    const [menuMobile, setMenuMobile] = React.useState(false)
    const token = useSelector((state) => state.auth.token)
    
    React.useEffect(() => {
        async function getProfileData() {
            const fallback = (message) => {
                dispatch(logoutAction())
                dispatch(setWarningMessage(message))
                navigate('/auth/login')
            }
            const { data } = await http(token, fallback).get('/profile')
            setProfile(data.results)
        }
        if (token) {
            getProfileData()
        }
    }, [token, dispatch, navigate])


    const handleMenuMobile = () => {
        setMenuMobile(!menuMobile)
    }

    const doLogout = () => {
        dispatch(logoutAction())
        navigate('/auth/login')
    }

    return (
        <>
        <div className='w-full fixed z-10'>
        <nav className=" flex justify-between items-center w-[100%] h-24 px-9 lg:px-14 bg-white drop-shadow-sm">
                <div className="flex justify-start items-center gap-2 lg:gap-3.5 w-[200px]">
                    <Link to="/">
                        <img src={logo} className="w-28" alt="" />
                    </Link>
                </div>
                <div className='hidden md:block'>
                <ul className="flex gap-5 lg:gap-14 text-sm text-[#373a42] font-semibold tracking-[1px]">
                        <li className="cursor-pointer hover:border-b-2 border-primary">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="cursor-pointer hover:border-b-2 border-primary">
                            <Link to="/article">Article</Link>
                        </li>
                        <li className="cursor-pointer hover:border-b-2 border-primary">
                            <Link to="/category">Category</Link>
                        </li>
                        <li className="cursor-pointer hover:border-b-2 border-primary">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>


                {token ? (
                    <>
                        <div className='hidden md:block'>
                            <div className='flex justify-start items-center gap-[10px] lg:gap-[15px]'>
                                <div>
                                    {profile?.role === "superadmin" ? 
                                        (<Link to='/admin/notification-admin'>
                                            <MdNotificationsNone size={25} className='text-black'/>
                                        </Link>)
                                    :
                                        (<Link to='/user/notification-user'>
                                            <MdNotificationsNone size={25} className='text-black'/>
                                        </Link>)
                                    }
                                </div>

                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="m-1 cursor-pointer">
                                    <div className='inline-block rounded-full p-[2px] bg-gradient-to-b from-green-400 to-primary'>
                                        {<ImageTemplate className='w-12 h-12 border-4 border-white rounded-full object-cover' src={profile?.picture || null} defaultImg={defaultImage} />}
                                    </div>
                                    </label>
                                    <ul tabIndex={0} className='dropdown-content menu p-4 mt-5 shadow bg-base-100 rounded-box w-52'>
                                            <li>
                                                <i>
                                                    <FiHome className='text-secondary' />
                                                    <Link className='capitalize text-secondary not-italic w-full' to='/profile/edit'>
                                                        Profile
                                                    </Link>
                                                </i>
                                            </li>
                                            <li>
                                                <i>
                                                    <FiLogOut className='text-red-500' />
                                                    <button onClick={doLogout} className=' bg-transparent w-full text-left text-red-500 capitalize'>
                                                        Logout
                                                    </button>
                                                </i>
                                            </li>
                                        </ul>
                                </div>

                            </div>
                        </div>
                    </>
                ) : (
                    <>
                    <div className="hidden md:flex justify-end items-center gap-[1px] lg:gap-[15px]">
                        <div className="btn btn-ghost capitalize border-0 md:w-[90px] lg:w-[169px] h-[40px] flex items-center justify-center text-sm text-[#373a42] font-semibold cursor-pointer">
                            <Link to="/auth/login">Sign In</Link>
                        </div>
                        <div className="btn btn-primary capitalize md:w-[90px] shadow-xl lg:w-[169px] h-[40px] flex items-center justify-center text-sm text-[#fff] font-semibold cursor-pointer  rounded-lg">
                            <Link to="/auth/register">Sign Up</Link>
                        </div>
                    </div>

                    </>
                )}

                <div className="block md:hidden">
                    <div>
                        <button onClick={handleMenuMobile} id="btnShowNavMobile">
                            <i className="">
                                <FiAlignJustify size={25} />
                            </i>
                        </button>
                    </div>
                </div>
            </nav>
        </div>

        <div className='fixed z-10 top-24 w-full'>
        <div className={`${menuMobile ? 'flex' : 'md: hidden'}  justify-between items-center w-full px-7 md:px-9 lg:px-14 relative`}>
                {token? (
                    <div className="absolute flex flex-col items-center gap-7 z-40 bg-white w-full overflow-scroll left-0 top-0 py-7 rounded-b-2xl shadow-xl">
                            <div className="w-[85%] pt-5 flex justify-center border-b-2 py-3 relative">
                                <div className='inline-block rounded-full p-[2px] bg-gradient-to-tr from-[#3366FF] to-[#884DFF]'>
                                    {<ImageTemplate onClick={() => navigate("/profile/edit")}  className='w-36 h-36 border-4 border-white rounded-full' src={profile?.picture || null} defaultImg={defaultImage} />}
                                </div>
                                <div className='absolute w-full top-3 flex items-center justify-end md:gap-11'>
                                    <Link to='/admin/notification-admin'>
                                        <MdNotificationsNone size={30} className='text-black'/>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full px-7">
                                <div className="flex justify-start items-center gap-[1px]">
                                    <ul className="flex flex-col justify-center items-start gap-7 w-full text-sm text-[#373a42] font-semibold tracking-[1px] capitalize">
                                        <li className="flex items-center justify-start gap-3.5">
                                            <i className="">
                                                <FiHome />
                                            </i>
                                            <Link to="/">Profile</Link>
                                        </li>
                                        <li className="flex items-center justify-start gap-3.5">
                                            <i className="">
                                                <FiHome />
                                            </i>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="flex items-center justify-start gap-3.5">
                                            <i className="">
                                                <GrArticle />
                                            </i>
                                            <Link to="/article">Article</Link>
                                        </li>
                                        <li className="flex items-center justify-start gap-3.5">
                                            <i className="">
                                                <FiList />
                                            </i>
                                            <Link to="/category">Category</Link>
                                        </li>
                                        <li className="flex items-center justify-start gap-3.5">
                                            <i className="">
                                                <FiInfo />
                                            </i>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li className="flex items-center justify-start gap-3.5">
                                            <i className="">
                                                <FiUnlock />
                                            </i>
                                            <Link to="#" onClick={handleMenuMobile}>Change Password</Link>
                                        </li>
                                        <li className="flex items-center justify-start gap-3.5">
                                            <i className="">
                                                <FiSettings />
                                            </i>
                                            <Link to="#" onClick={handleMenuMobile}>setting</Link>
                                        </li>
                                        <li className="self-center text-[#F03800] my-7 flex items-center justify-start gap-3.5">
                                            <i className="">
                                                <FiLogOut />
                                            </i>
                                            <button type='button' onClick={doLogout}>Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                ) : (
                    <div className="absolute flex flex-col items-center gap-7 z-40 bg-white w-full overflow-scroll left-0 top-0 py-7 rounded-b-2xl shadow-xl">
                        <div className="w-[85%] border-b-2 py-3">
                            <div className="flex flex-col justify-center items-center gap-5">
                                <Link to="/auth/login" className="btn bg-[#03999e5f]  w-full max-w-[280px] text-primary border-0 text-lg capitalize font-semibold tracking-[1px]">
                                    sign in
                                </Link>
                                <Link to="/auth/register" className="btn btn-primary w-full  max-w-[280px] text-base text-white capitalize font-semibold tracking-[1px]">
                                    sign up
                                </Link>
                            </div>
                        </div>
                        <div className="w-full px-7">
                            <div className="flex justify-start items-center gap-[1px]">
                                <ul className="flex flex-col justify-center items-start gap-7 w-full text-sm text-[#373a42] font-semibold tracking-[1px] capitalize">
                                    <li className="flex items-center justify-start gap-3.5">
                                        <i className="">
                                            <FiHome />
                                        </i>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="flex items-center justify-start gap-3.5">
                                        <i className="">
                                            <GrArticle />
                                        </i>
                                        <Link to="/article">Article</Link>
                                    </li>
                                    <li className="flex items-center justify-start gap-3.5">
                                        <i className="">
                                            <FiList />
                                        </i>
                                        <Link to="/category">Category</Link>
                                    </li>
                                    <li className="flex items-center justify-start gap-3.5">
                                        <i className="">
                                            <FiInfo />
                                        </i>
                                        <Link to="/about">About</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>

        </>
    );
};

export default Header;
