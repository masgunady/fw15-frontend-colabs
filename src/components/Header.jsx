import React from 'react';
import logo from '../assets/image/logo-tosca.png';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusSquare, FiList, FiHeart, FiUnlock, FiSettings, FiLogOut, FiAlignJustify } from 'react-icons/fi';

const Header = () => {
    const [menuMobile, setMenuMobile] = React.useState(false);

    const handleMenuMobile = () => {
        setMenuMobile(!menuMobile);
    };
    return (
        <>
            <nav className="flex justify-between items-center w-[100%] h-24 px-9 lg:px-14 bg-white">
                <div className="flex justify-start items-center gap-2 lg:gap-3.5 w-[200px]">
                    <Link to="/">
                        <img src={logo} className="w-28" alt="" />
                    </Link>
                </div>
                <div className="hidden md:flex justify-center items-center w-full">
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
                            <Link to="/">About</Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:block basis-1/4">
                    <div className="flex justify-end items-center gap-[1px] lg:gap-[15px]">
                        <div className="btn bg-white capitalize border-0 md:w-[90px] lg:w-[169px] h-[40px] flex items-center justify-center text-sm text-[#373a42] font-semibold cursor-pointer">
                            <Link to="/login">Sign In</Link>
                        </div>
                        <div className="btn btn-primary capitalize md:w-[90px] shadow-xl lg:w-[169px] h-[40px] flex items-center justify-center text-sm text-[#fff] font-semibold cursor-pointer  rounded-lg">
                            <Link to="/register">Sign Up</Link>
                        </div>
                    </div>
                </div>

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

            <div className={`${menuMobile ? 'flex' : 'md: hidden'}  justify-between items-center w-full px-7 md:px-9 lg:px-14 relative`}>
                <div className="absolute flex flex-col items-center gap-7 z-40 bg-white w-full overflow-scroll left-0 top-0 py-7 rounded-b-2xl shadow-xl">
                    <div className="w-[85%] border-b-2 py-3">
                        <div className="flex flex-col justify-center items-center gap-5">
                            <Link to="/auth/login" className="btn btn-primary w-full max-w-[280px] text-base text-white capitalize font-semibold tracking-[1px]">
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
                                        <FiPlusSquare />
                                    </i>
                                    <Link to="/user/manage-event">Create Event</Link>
                                </li>
                                <li className="flex items-center justify-start gap-3.5">
                                    <i className="">
                                        <FiList />
                                    </i>
                                    <Link to="/user/reservation">my booking</Link>
                                </li>
                                <li className="flex items-center justify-start gap-3.5">
                                    <i className="">
                                        <FiHeart />
                                    </i>
                                    <Link to="/user/wishlist">my wishlist</Link>
                                </li>
                                <li className="flex items-center justify-start gap-3.5">
                                    <i className="">
                                        <FiUnlock />
                                    </i>
                                    <Link to="/user/change-password">Change Password</Link>
                                </li>
                                <li className="flex items-center justify-start gap-3.5">
                                    <i className="">
                                        <FiSettings />
                                    </i>
                                    <Link to="#">setting</Link>
                                </li>
                                <li className="self-center text-[#F03800] my-7 flex items-center justify-start gap-3.5">
                                    <i className="">
                                        <FiLogOut />
                                    </i>
                                    <button>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
