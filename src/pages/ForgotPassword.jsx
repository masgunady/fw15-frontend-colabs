
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Image from "../components/Image"
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import http from "../helper/http"
import React from "react";



// icons
// import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";
// import { AiFillTwitterCircle } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
// import { event } from "process";


export default function ForgotPassword() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');

    const doForgot = async (event) => {
        event.preventDefault()
        setErrorMessage('')
        try {
            const { value: email } = event.target.email
            const body = new URLSearchParams({ email }).toString()
            const { data } = await http().post('/auth/forgot-password', body)
            console.log(data)

            setSuccessMessage(data.message)
            setTimeout(() => {
                setSuccessMessage('')
            }, 1000);
            setTimeout(() => {
                navigate('/reset-password')
            }, 2000);
        } catch (err) {
            const message = err?.response?.data?.message
            setErrorMessage(message)
        }
    }



    return (
        <>

            {/* helmet */}
            <div>
                <Helmet>
                    <title>Forgot Password</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="block md:grid md:grid-cols-[50%_minmax(300px,_1fr)] overflow-hidden font-Poppins font-bold text-white">
                <section className="hidden md:flex md:flex-col bg-primary h-screen gap-5">
                    <img src={Image.forgotImage} alt="Hero image" className="h-screen w-screen" />
                </section>
                <section className="flex flex-col pt-5 gap-2 md:pt-10 md:gap-5 font-normal text-black h-screen">
                    <Link to="/auth/login">
                        <div onClick={() => navigate(-1)} className="flex px-10 items-center gap-2 cursor-pointer">
                            <MdArrowBackIos className="font-bold" />
                            <span className="font-bold">Back</span>
                        </div>
                    </Link>
                    <div className="px-16 flex flex-col gap-5 mb-5">
                        <div className="text-3xl">DON'T WORRY</div>
                        <span
                            className="font-thin text-sm text-gray-600">We are here to help you to recover your password. Enter your email adress that you used to register and we'll give you instructions to reset your password.
                        </span>
                    </div>
                    <form onSubmit={doForgot} action="" className="flex flex-col px-16 gap-6">
                        {errorMessage && <div className='alert alert-error'>{errorMessage}</div>}
                        {successMessage && <div className='alert alert-success'>{successMessage}</div>}
                        <div className="flex flex-col gap-2">
                            <input name="email" type="email" placeholder="Enter your email adress" className="input input-bordered border-primary w-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <button type="submit" className="btn btn-primary text-white capitalize tracking-wider">Send Link</button>
                            <button className="btn btn-secondary text-white capitalize tracking-wider">Resend link</button>
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
                            <div>Log Pose</div>
                            <div>
                                Jendral Sudirman Street No. 23
                                Jakarta, Indonesia
                            </div>
                            <div>(621)989898934</div>
                            <div>logpose@mail.com</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}