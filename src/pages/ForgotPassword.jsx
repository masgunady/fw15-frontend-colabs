
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Image from "../components/Image"
import { useNavigate } from "react-router-dom";


// icons
// import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";
// import { AiFillTwitterCircle } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";


export default function ForgotPassword() {
    const navigate = useNavigate();



    return (
        <div className="block md:grid md:grid-cols-[50%_minmax(300px,_1fr)] overflow-hidden font-Poppins font-bold text-white">
            <section className="hidden md:flex md:flex-col bg-primary h-screen gap-5">
                <img src={Image.forgotImage} alt="Hero image" className="h-screen w-screen" />
            </section>
            <section className="flex flex-col pt-5 gap-2 md:pt-10 md:gap-5 font-normal text-black h-screen">
                <div onClick={() => navigate(-1)} className="flex px-10 items-center gap-2 cursor-pointer">
                    <MdArrowBackIos className="font-bold" />
                    <span className="font-bold">Back</span>
                </div>
                <div className="px-16 flex flex-col gap-5 mb-5">
                    <div className="text-3xl">DON'T WORRY</div>
                    <span
                        className="font-thin text-sm text-gray-600">We are here to help you to recover your password. Enter your email adress that you used to register and we'll give you instructions to reset your password.
                    </span>
                </div>
                <form action="" className="flex flex-col px-16 gap-6">
                    <div className="flex flex-col gap-2">
                        <input type="text" placeholder="Enter your email adress" className="input input-bordered w-full" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="btn btn-primary">Send Link</button>
                        <button className="btn btn-secondary">Resend link</button>
                    </div>
                </form>
                <div className="h-screen bg-primary text-white pt-2 mt-2 flex flex-col-2 justify-between px-16 md:mt-5 py-5 lg:py-10 md:text-xs lg:text-normal">
                    <div className="flex flex-col gap-2 md:gap-4">
                        <div>Why News Today</div>
                        <div>Community</div>
                        <div>Be an author</div>
                        <div>FAQ</div>
                    </div>
                    <div className="text-end w-72 flex flex-col gap-2">
                        <div>News Today</div>
                        <div>
                            Jendral Sudirman Street No. 23
                            Jakarta, Indonesia
                        </div>
                        <div>(621)989898934</div>
                        <div>newstoday@mail.com</div>
                    </div>
                </div>
            </section>
        </div>
    )
}