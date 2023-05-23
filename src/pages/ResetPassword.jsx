
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Image from "../components/Image"
import { useNavigate } from "react-router-dom";


// icons
// import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";
// import { AiFillTwitterCircle } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import ResetPasswordForm from "../components/ResetPasswordForm";


export default function ForgotPassword() {
    const navigate = useNavigate();



    return (
        <div className="block md:grid md:grid-cols-[50%_minmax(300px,_1fr)] overflow-hidden font-Poppins font-bold text-white">
            <section className="hidden md:flex md:flex-col bg-primary h-screen gap-5">
                <img src={Image.forgotImage} alt="Hero image" className="h-screen w-screen" />
            </section>
            <section className="flex flex-col pt-5 gap-2 md:gap-3 font-normal text-black h-screen">
                <div onClick={() => navigate(-1)} className="flex px-10 items-center gap-2 cursor-pointer">
                    <MdArrowBackIos className="font-bold" />
                    <span className="font-bold">Back</span>
                </div>
                <div className="px-16 flex flex-col gap-5 mb-2">
                    <div className="text-3xl">DON'T WORRY</div>
                    <span
                        className="font-thin text-sm text-gray-600">We are here to help you to recover your password.
                    </span>
                </div>
                <ResetPasswordForm/>
            </section>
        </div>
    )
}