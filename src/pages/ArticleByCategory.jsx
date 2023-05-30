import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

import { IoChevronBackOutline } from 'react-icons/io5';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';

// import { useSelector } from "react-redux";
// import React from "react";
// import http from "../helper/http";
import { Formik } from "formik";


const ArticleByCategory = () => {

    const navigate = useNavigate()
    const onSearch = (values) => {
        const qStrings = new URLSearchParams(values).toString()
        navigate(`/search-result?${qStrings}`)
    }
    return (
        <div className="bg-white">
            <div className="header pb-24">
                <Header />
            </div>
            <main className="px-[95px]">
                <section className="flex items-center">
                    <div className="flex items-center">
                        <Link to='/article' className="btn btn-ghost border-none">
                            <IoChevronBackOutline className="text-black" size={35} />
                        </Link>
                        <div className="text-black hidden md:block text-lg font-semibold mr-[410px]">Category</div>
                    </div>
                    <div className="text-black text-lg font-semibold">Goverment</div>
                </section>
                <section className="flex mt-[70px] ">
                    <div className="dropdown mr-[500px]">
                        <label tabIndex={0} className="btn btn-ghost">
                            <FaFilter className="text-black" size={30} />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Name (A-Z)</a></li>
                            <li><a>Name (Z-A)</a></li>
                            <li><a>Category</a></li>
                            <li><a>Last Added</a></li>
                            <li><a>Last Modified</a></li>
                        </ul>
                    </div>
                    <div className=" w-full bg-white">
                        <div className="">
                        <Formik 
                                initialValues={{
                                searchName: '',
                                }}
                                onSubmit={onSearch}
                            >
                                {({ handleBlur, handleChange, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="relative flex gap-[10px] form-control w-full max-w-[500px]">
                                            <i className="absolute top-3">
                                                <FaSearch size={20} />
                                            </i>
                                            <input className="input input-bordered input-primary" placeholder="Search" type='text' name='searchName' onBlur={handleBlur} onChange={handleChange} />
                                        </div>
                                    </form>
                                )}
                        </Formik>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                        <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                            <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold"> </div>
                                            </Link>
                                            <div className="text-black text-center text-sm"></div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1k</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
};
export default ArticleByCategory;