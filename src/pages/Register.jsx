/* eslint-disable react/no-unescaped-entities */
// import Image from "../components/Image"
import React from 'react'
import { Link } from "react-router-dom";
import propTypes from 'prop-types';
import { Formik } from "formik";
import * as Yup from 'yup';
import { clearMessage } from "../redux/reducers/auth";
import { asyncRegisterAction } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// icons
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { Helmet } from "react-helmet";
import Image from '../components/Image';
import { FiEye, FiEyeOff } from 'react-icons/fi'


const validationSechema = Yup.object({
    email: Yup.string().email('Email is invalid'),
    password: Yup.string().required('Password is invalid')
})


const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
    const errorMessage = useSelector(state => state.auth.errorMessage)
    const warningMessage = useSelector(state => state.auth.warningMessage)
    const successMessage = useSelector((state) => state.auth.successMessage)

    const [iconEye, setIconEye] = React.useState(false)
    const [typePassword, setTypePassword] = React.useState(false)
    const handleInputPassword = () => {
        setIconEye(!typePassword)
        setTypePassword(!iconEye)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {errorMessage &&
                (<div>
                    <div className="alert alert-error danger text-[11px]">{errorMessage}</div>
                </div>)}
            {warningMessage &&
                (<div>
                    <div className="alert alert-warning danger text-[11px]">{warningMessage}</div>
                </div>)}
            {successMessage && <div className='alert alert-success'>{successMessage}</div>}
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email Adress :</label>
                <input
                    name="email"
                    type="text"
                    placeholder="Enter your email adress"
                    className="input input-bordered border-primary w-full"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email &&
                    (<label className="label">
                        <span className="label-text-left text-error text-xs ">{errors.email}</span>
                    </label>
                    )}
            </div>
            <div className="flex flex-col gap-2 relative">
                <label htmlFor="password">Password :</label>
                <div className='relative'>
                    <input
                        name="password"
                        type={typePassword ? 'text' : 'password'}
                        placeholder="Enter your password "
                        className="input input-bordered border-primary w-full"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
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
                {errors.password && touched.password && (
                    <label className="label">
                        <span className="label-text-left text-error text-xs ">{errors.password}</span>
                    </label>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber">Phone Number :</label>
                <input
                    name="phoneNumber"
                    type="tel"
                    placeholder="Enter your Phone Number "
                    className="input input-bordered border-primary w-full"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                />
                {errors.password && touched.password && (
                    <label className="label">
                        <span className="label-text-left text-error text-xs ">{errors.password}</span>
                    </label>
                )}
            </div>
            <button disabled={isSubmitting} className="btn btn-primary text-white text-lg capitalize mt-5 md:mt-5">Sign Up</button>
        </form>
    )
}

Form.propTypes = {
    values: propTypes.string,
    errors: propTypes.string,
    touched: propTypes.object,
    handleBlur: propTypes.func,
    handleChange: propTypes.func,
    handleSubmit: propTypes.func,
    isSubmitting: propTypes.bool,
}


export default function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const token = useSelector(state => state.auth.token)
    const successMessage = useSelector((state) => state.auth.successMessage)
    const formError = useSelector(state => state.auth.formError)


    const doLogin = async (values, { setSubmitting, setErrors }) => {
        dispatch(clearMessage())
        dispatch(asyncRegisterAction(values))

        if (formError.length) {
            setErrors({
                email: formError.filter(item => item.param === "email")[0].message,
                password: formError.filter(item => item.param === "password")[0].message,
            })
        }
        setSubmitting(false)


    }


    React.useEffect(() => {
        if (successMessage) {
            setTimeout(() => {
                navigate('/auth/login')
            }, 2000)
            setTimeout(() => {
                dispatch(clearMessage())
            }, 2000)
        }
    }, [successMessage, navigate, dispatch])


    return (
        <>
            {/* helmet */}
            <div>
                <Helmet>
                    <title>Register</title>
                </Helmet>
            </div>

            <div className="block md:grid md:grid-cols-[50%_minmax(300px,_1fr)] overflow-scroll py-5 md:py-0 font-Poppins gap-5 font-bold text-white">
                <section className="hidden md:flex md:flex-col bg-primary h-screen gap-5 p-5">
                    {/* <img src={Image.loginImage} alt="Hero image" className="h-[41rem] w-[40rem]" /> */}
                    <div className="flex items-center mb-5 gap-5">
                        <Link to="/">
                            <MdArrowBackIos />
                        </Link>
                        <span>Home Page</span>
                    </div>
                    <div className="flex flex-col justify-self-center items-center gap-5 mb-10">
                        <div className="h-[230px] flex flex-col items-center justify-end pb-7">
                            <img src={Image.logposeWhite} alt="" className="w-[170px]" />
                        </div>
                        <span className="text-base">logpose@mail.com</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-center items-center gap-3 mb-8">
                            <hr className="md:w-20 lg:w-[23%]" />
                            <span className="text-center">
                                Already have an account?
                            </span>
                            <hr className="md:w-20 lg:w-[23%]" />
                        </div>
                        <Link className="flex justify-center items-center" to="/auth/login">
                            <button className="btn w-[83%] btn-neutral text-white text-lg capitalize self-center">Login Here</button>
                        </Link>
                    </div>
                    <section className="flex gap-10 w-[83%] m-10 self-center text-base justify-between">
                        <div className="flex flex-col gap-6">
                            <span>Why Log Pose</span>
                            <span>Community</span>
                        </div>
                        <div className="flex flex-col gap-6">
                            <span>Be an author</span>
                            <span>FAQ</span>
                        </div>
                    </section>
                </section>
                <section className="flex flex-col pt-20 gap-5 md:pt-28 px-10 md:gap-5 font-normal text-black h-screen">
                    <h1 className="font-bold text-2xl">Sign Up</h1>
                    <span
                        className="font-thin text-sm text-gray-600">Hey, welcome to News Today! Create an account to enjoy our full feautres!
                    </span>

                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={validationSechema}
                        onSubmit={doLogin}
                    >
                        {(props) => (
                            <Form {...props} />
                        )}
                    </Formik>



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
