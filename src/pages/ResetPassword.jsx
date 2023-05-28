
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Image from "../components/Image"
import { useNavigate} from "react-router-dom";
import http from '../helper/http';
import React from "react";
import { FiEye, FiEyeOff } from 'react-icons/fi'


// icons
// import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";
// import { AiFillTwitterCircle } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { Helmet } from "react-helmet";


export default function ForgotPassword() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState('')
    const [successMessage, setSuccessMessage] = React.useState('')
    const [iconEye, setIconEye] = React.useState(false)
    const [typePassword, setTypePassword] = React.useState(false)
    const [iconEyeCp, setIconEyeCp] = React.useState(false)
    const [typeConfirmPassword, setTypeConfirmPassword] = React.useState(false)

    const handleInputPassword = () => {
        setIconEye(!typePassword)
        setTypePassword(!iconEye)
    }
    const handleInputConfirmPassword = () => {
        setIconEyeCp(!typeConfirmPassword)
        setTypeConfirmPassword(!iconEyeCp)
    }

    const doReset = async (event) => {
        event.preventDefault()
        setErrorMessage('')
        try {
            const { value: code } = event.target.code
            const { value: email } = event.target.email
            const { value: password } = event.target.password
            const { value: confirmPassword } = event.target.confirmPassword
            const body = new URLSearchParams({ code, email, password, confirmPassword }).toString()

            const { data } = await http().post('/auth/reset-password', body)
            console.log(data)

            setSuccessMessage(data.message)
            setTimeout(() => {
                setSuccessMessage('')
            }, 1000)
            setTimeout(() => {
                navigate('/auth/login')
            }, 2000)
        } catch (error) {
            const message = error?.response?.data?.message
            setErrorMessage(message)
        }
    }


    return (
        <>
            {/* helmet */}
            <div>
                <Helmet>
                    <title>Reset Password</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

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
                    <form onSubmit={doReset} action="submit" className="flex flex-col gap-4 px-16">
                        {errorMessage && <div className='alert alert-error'>{errorMessage}</div>}
                        {successMessage && <div className='alert alert-success'>{successMessage}</div>}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="code">Insert Code :</label>
                            <input type="text" name="code" placeholder="Enter your Code" className="input input-bordered border-primary w-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email Adress :</label>
                            <input name="email" type="text" placeholder="Enter your email adress" className="input input-bordered border-primary w-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Password :</label>
                            <div className="flex relative">
                                <input
                                    name="password"
                                    type={typePassword ? 'text' : 'password'}
                                    placeholder="Enter your password "
                                    className="input input-bordered border-primary w-full"
                                />
                                <button type='button' onClick={handleInputPassword} className='absolute bottom-3 right-4 text-[#4c3f91]'>
                                    {iconEye ? (
                                        <i className=''>
                                            <FiEye size={20} />
                                        </i>
                                    ) : (
                                        <i className=''>
                                            <FiEyeOff size={20} />
                                        </i>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="confirmPassword">Confirm Password :</label>
                            <div className="flex relative">
                                <input
                                    type={typeConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    placeholder="Enter your phone number"
                                    className="input input-bordered border-primary w-full"
                                />
                                <button type='button' onClick={handleInputConfirmPassword} className='absolute bottom-3 right-4 text-[#4c3f91]'>
                                    {iconEyeCp ? (
                                        <i className=''>
                                            <FiEye size={20} />
                                        </i>
                                    ) : (
                                        <i className=''>
                                            <FiEyeOff size={20} />
                                        </i>
                                    )}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary text-white capitalize tracking-wider mt-5 md:mt-5">Reset password</button>
                    </form>
                </section>
            </div>
        </>
    )
}