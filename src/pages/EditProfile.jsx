import React from 'react'
import Image from '../components/Image';

import Header from '../components/Header'
import Footer from '../components/Footer'


// icon
import { MdArrowForwardIos } from "react-icons/md";


export default function EditProfile() {
const [show, setShow] = React.useState(false)


    const handleShow = () => {
        setShow(!show)
     }


    return (
        <>
            <Header />
            <container className='grid grid-cols-[40%_minmax(200px,_1fr)] text-black border-t-[1px]'>
                <section className='pt-10 border-r-[1px]'>
                    <span className='text-2xl font-extrabold pl-14'>Profile</span>
                    <div className='w-[67%] p-10 my-10 relative rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)] ml-14'>
                        <div className='flex flex-col-2 gap-10 items-center'>
                            <div className='rounded-3xl w-20 h-20 p-[2px] bg-gradient-to-b from-green-400 to-primary'>
                                <div className='bg-white h-full rounded-3xl p-2'>
                                    <img
                                        className='rounded-3xl h-full object-contain'
                                        src={Image.profileAvatar}
                                        alt="" />
                                </div>
                            </div>
                            <div
                                className='flex flex-col'>
                                <span className='text-lg text-primary'>
                                    @jonathan
                                </span>
                                <span className='text-2xl font-extrabold'>
                                    Joe Daniel
                                </span>
                                <span className='text-lg text-primary'>
                                    Member
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col my-5'>
                            <span className='font-extrabold text-base'>About me</span>
                            <span className='text-sm'>
                                Madison Blackstone is a director of publisher, with experience managing global teams.
                            </span>
                        </div>
                        <div
                            className='flex flex-col-3 justify-center text-white absolute bg-primary rounded-xl shadow-[0_35px_50px_-15px_rgba(0,0,0,0.3)]'
                        >
                            <div className='flex flex-col justify-center items-center w-24 h-16 rounded-xl bg-primary cursor-pointer hover:bg-[#0d696c]'>
                                <span>52</span>
                                <span>
                                    Post
                                </span>
                            </div>
                            <div className='flex flex-col justify-center items-center w-24 h-16 rounded-xl bg-primary cursor-pointer hover:bg-[#0d696c]'>
                                <span>
                                    250
                                </span>
                                <span>
                                    Visitor
                                </span>
                            </div>
                            <div className='flex flex-col justify-center items-center w-24 h-16 rounded-xl bg-primary cursor-pointer hover:bg-[#0d696c]'>
                                <span>
                                    4.5K
                                </span>
                                <span>
                                    Comment
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='text-lg font-extrabold my-24'>
                        <ul>
                            <li className='flex justify-between px-14 py-5 hover:bg-slate-200 hover:text-primary'>
                                <span>Edit Profile</span>
                                <MdArrowForwardIos
                                    className='text-3xl font-bold transition-colors duration-100'
                                />
                            </li>
                            <li className='flex justify-between px-14 py-5 hover:bg-slate-200 hover:text-primary'>
                                <span>Saved Post</span>
                                <MdArrowForwardIos
                                    className='text-3xl font-bold transition-colors duration-100'
                                />
                            </li>
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
                            <li className='flex justify-between px-14 py-5 hover:bg-slate-200 hover:text-primary'>
                                <span>Logout</span>
                                <MdArrowForwardIos
                                    className='text-3xl font-bold transition-colors duration-100'
                                />
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='text-lg flex flex-col items-center relative gap-10 pt-10'>
                    <div className='flex flex-col items-center gap-5'>
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
                        className='flex flex-col-2 justify-evenly w-full'>
                        <div>
                            <div className="form-control flex gap-2 mt-5">
                                <label htmlFor="username">
                                    Username:
                                </label>
                                <input type="text" name="username" className='input input-bordered w-72' />
                            </div>
                            <div className="form-control flex gap-2 mt-5">
                                <label htmlFor="email">
                                    Email:
                                </label>
                                <input type="text" name="email" className='input input-bordered w-72' />
                            </div>
                            <div className="form-control flex gap-2 mt-5">
                                <label htmlFor="job">
                                    Job:
                                </label>
                                <input type="text" name="job" className='input input-bordered w-72' />
                            </div>
                        </div>
                        <div>
                            <div className="form-control flex gap-2 mt-5">
                                <label htmlFor="name">
                                    Name:
                                </label>
                                <input type="text" name="name" className='input input-bordered w-72' />
                            </div>
                            <div className="form-control flex gap-2 mt-5 relative">
                                <label htmlFor="password">
                                    Password:
                                </label>
                                <input type={show ? "text":"password"} name="password" className='input input-bordered w-72' />
                                <span
                                onClick={handleShow}
                                    className='underline underline-offset-3 text-xs absolute top-12 right-5 text-cyan-600 cursor-pointer hover:text-cyan-700'>Show</span>
                            </div>
                            <div className="form-control flex gap-2 mt-5">
                                <label htmlFor="about">
                                    About:
                                </label>
                                <textarea name="about" className='input input-bordered w-72 h-40 p-2' />
                            </div>
                        </div>
                        <button className='absolute right-10 top-5 text-cyan-600 cursor-pointer hover:text-cyan-700'>Save Change</button>
                    </form>
                    <button className='btn btn-primary h-14 w-96 m-5'>Request to be an author</button>
                </section>
            </container>
            <Footer />
        </>
    )
}
