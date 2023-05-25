/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
// import Image from "../components/Image"
import RegisterForm from "../components/RegisterForm";
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
                    <title>Register</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="block md:grid md:grid-cols-[50%_minmax(300px,_1fr)] overflow-scroll py-5 md:py-0 font-Poppins gap-5 font-bold text-white">
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
                            <hr className="md:w-20 lg:w-[23%]" />
                            <span className="text-center">
                                Already have an account?
                            </span>
                            <hr className="md:w-20 lg:w-[23%]" />
                        </div>
                        <Link className="flex justify-center items-center" to="/login">
                            <button className="btn w-[83%] self-center rounded-2xl">Login Here</button>
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
                <section className="flex flex-col pt-5 gap-2 md:pt-14 px-10 md:gap-5 font-normal text-black h-screen">
                    <h1 className="font-bold text-2xl">Sign Up</h1>
                    <span
                        className="font-thin text-sm text-gray-600">Hey, welcome to News Today! Create an account to enjoy our full feautres!
                    </span>


                    <RegisterForm />


                    <div className="flex flex-col gap-2 md:gap-5 self-center items-center">
                        <span>OR SIGN UP WITH</span>
                        <div className="flex gap-5 justify-center">
                            <FcGoogle className="text-4xl" />
                            <BsFacebook className="text-[34px] text-sky-600" />
                            <AiFillTwitterCircle className="text-[39px] text-sky-300" />
                        </div>
                    </div>
                    <div className="flex flex-col md:hidden">
                        <div className="flex justify-center items-center gap-3 mb-4 md:mb-8">
                            <hr className="md:w-20 lg:w-[25%]" />
                            <span className="text-center">
                                Don't have an account?
                            </span>
                            <hr className="md:w-20 lg:w-[25%]" />
                        </div>
                        <Link to="/register" className="rounded-2xl self-center font-bold hover:text-cyan-700">Sign Up</Link>
                        <Link to="/" className="mt-5 self-center underline underline-offset-4 cursor-pointer hover:text-cyan-700">Back to Home Page</Link>
                    </div>
                </section>
            </div>
        </>
    )
}
