/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
// import Image from "../components/Image"
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
// icons
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { Helmet } from "react-helmet";

export default function Login() {

    return (
        <>
            {/* helmet */}
            <div>
                <Helmet>
                    <title>Login</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="block md:grid md:grid-cols-[50%_minmax(300px,_1fr)] overflow-hidden font-Poppins gap-5 font-bold text-white">
                <section className="hidden md:flex md:flex-col bg-primary h-screen gap-5 p-5">
                    {/* <img src={Image.loginImage} alt="Hero image" className="h-[41rem] w-[40rem]" /> */}
                    <div className="flex items-center mb-5 gap-5">
                        <MdArrowBackIos />
                        <span>Home Page</span>
                    </div>
                    <div className="flex flex-col justify-self-center items-center gap-5 mb-10">
                        <span className="font-bold text-4xl">
                            News
                        </span>
                        <span className="font-bold text-4xl">
                            Today
                        </span>
                        <span className="text-base">newstoday@mail.com</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-center items-center gap-3 mb-8">
                            <hr className="md:w-20 lg:w-[25%]" />
                            <span className="text-center">
                                Don't have an account?
                            </span>
                            <hr className="md:w-20 lg:w-[25%]" />
                        </div>
                        <Link className="flex justify-center items-center" to="/register">
                            <button className="btn w-[83%] self-center rounded-2xl">Sign Up</button>
                        </Link>
                    </div>
                    <section className="flex gap-10 w-[83%] m-10 self-center text-base justify-between">
                        <div className="flex flex-col gap-6">
                            <span>Why News Today</span>
                            <span>Community</span>
                        </div>
                        <div className="flex flex-col gap-6">
                            <span>Be an author</span>
                            <span>FAQ</span>
                        </div>
                    </section>
                </section>
                <section className="flex flex-col pt-5 gap-2 md:pt-20 px-10 md:gap-5 font-normal text-black h-screen">
                    <h1 className="font-bold text-2xl">Login</h1>
                    <span className="font-thin text-sm text-gray-600">Hey, welcome back to News Today!</span>
                    <LoginForm />
                    <div className="flex flex-col md:gap-5 self-center items-center mt-5 md:mt-10">
                        <span>OR LOGIN WITH</span>
                        <div className="flex md:gap-5 justify-center mt-2">
                            <FcGoogle className="text-4xl" />
                            <BsFacebook className="text-[34px] text-sky-600" />
                            <AiFillTwitterCircle className="text-[39px] text-sky-300" />
                        </div>
                    </div>
                    <div className="flex flex-col mt-5 md:hidden">
                        <div className="flex justify-center items-center gap-3 mb-4 md:mb-8">
                            <hr className="md:w-20 lg:w-[23%]" />
                            <span className="text-center">
                                Don't have an account?
                            </span>
                            <hr className="md:w-20 lg:w-[23%]" />
                        </div>
                        <button className="btn rounded-2xl">Sign Up</button>
                        <Link to="/register" className="mt-5 self-center underline underline-offset-4 cursor-pointer">Back to Home Page</Link>
                    </div>
                </section>
            </div>
        </>
    )
}
