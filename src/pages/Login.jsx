/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
// import Image from "../components/Image"
import LoginForm from "../components/LoginForm";

// icons
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";

export default function SingIn() {

    return (
        <div className="grid grid-cols-[1fr_minmax(500px,_1fr)] overflow-hidden font-Poppins gap-5 font-bold">
            <section className="flex flex-col bg-primary h-[41rem] gap-5 p-5">
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
                <div className="flex justify-center items-center gap-3 mb-8">
                    <hr className="w-36" />
                    <span>
                        Don't have an account?
                    </span>
                    <hr className="w-36" />
                </div>
                <button className="btn w-[83%] self-center rounded-2xl">Sign Up</button>
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
            <section className="flex flex-col pt-20 px-10 gap-5 font-normal text-black">
                <h1 className="font-bold text-2xl">Login</h1>
                <span className="font-thin text-sm text-gray-600">Hey, welcome back to News Today!</span>
                <LoginForm/>
                <div className="flex flex-col gap-5 self-center items-center mt-10">
                    <span>Or Login with</span>
                    <div className="flex gap-5 justify-center">
                        <FcGoogle className="text-4xl"/>
                        <BsFacebook className="text-[34px] text-sky-600" />
                        <AiFillTwitterCircle className="text-[39px] text-sky-300" />
                    </div>
                </div>
            </section>
        </div>
    )
}
