import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Image from '../components/Image';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';
import http from '../helper/http';
import { useDispatch, useSelector } from 'react-redux';
import { logout as logoutAction } from '../redux/reducers/auth';
import { AiOutlineLoading3Quarters, } from 'react-icons/ai'


// icon
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Formik } from 'formik';
import ImageTemplate from '../components/ImageTemplate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function EditProfile() {
    const [show, setShow] = React.useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const [profile, setProfile] = React.useState({})
    const [selectedPicture, setSelectedPicture] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)
    const [pictureURI, setPictureURI] = React.useState('')


    React.useEffect(() => {
        async function getDataProfile() { 
            const { data } = await http(token).get('/profile')
            // console.log(data)
            setProfile(data.results)
        }
        getDataProfile()

    }, [token])




    const updateDisplay = () => {
        async function getDataProfile() {
            const { data } = await http(token).get('/profile')
            setProfile(data.results)
        }
        getDataProfile()
    };



    const handleShow = () => {
        setShow(!show)
    }
    const fileToDataUrl = (file) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setPictureURI(reader.result)
        })
        reader.readAsDataURL(file)
    }

    const changePicture = (e) => {
        const file = e.target.files[0]
        setSelectedPicture(file)
        fileToDataUrl(file)
    }

    React.useEffect(() => {

    }, [selectedPicture])

    const editProfile = async (values) => {
        setOpenModal(true)
        const form = new FormData()
        Object.keys(values).forEach((key) => {
            if (values[key]) {
                form.append(key, values[key])
            }
        })
        if (selectedPicture) {
            form.append('picture', selectedPicture)
        }
        try {
            const { data } = await http(token).patch('/profile', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setProfile(data.results)
        } catch (err) {
            console.log(err)
        }
        setOpenModal(false)
        updateDisplay()
    }

    const doLogout = () => {
        dispatch(logoutAction()),
            navigate('/auth/login')
    }

    const notifyErrorReq = (data) => toast.error(data);
    const notifySuccessReq = (data) => toast.success(data);
    const requestAuthor = async () => {
        try {
            const {data} = await http(token).post('/request')
            setOpenModal(true)
            setTimeout(()=>{
                setOpenModal(false)
                notifySuccessReq(data?.message)
            },1500)
        } catch (error) {
            setOpenModal(true)
            setTimeout(()=>{
                setOpenModal(false)
                notifyErrorReq(error?.response?.data?.message)
            },1000)
        }
    }

    return (
        <>

            {/* helmet */}
            <div>
                <Helmet>
                    <title>Edit Profile</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>
            <div className="header pb-24">
                <Header /> 
            </div>

            <div className='flex flex-col-reverse md:flex-row text-black border-t-[1px] px-2 md:px-16 lg:px-24 xl:px-28 2xl:px-56'>
                <section className='basis-1/3 flex flex-col justify-center items-center pt-16 px-7 border-t-2 lg:border-t-0 lg:border-r-[1px] w-full min-w-[400px]'>
                    <span className='lg:text-2xl font-extrabold'>Profile</span>
                    <div className='w-full p-10 my-12 relative rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)]'>
                        <div className='flex flex-col gap-10 items-center'>
                            <div className='rounded-3xl w-20 h-20 p-[2px] bg-gradient-to-b from-green-400 to-primary'>
                                <div className='bg-white w-full h-full rounded-3xl p-2'>
                                    <ImageTemplate className='rounded-2xl h-full w-full onject-cover' src={profile?.picture || null} defaultImg={Image.profileAvatar} />
                                </div>
                            </div>
                            <div
                                className='flex flex-col items-center'>
                                <span className='lg:text-lg text-primary'>
                                    {profile?.username}
                                </span>
                                <span className='lg:text-2xl font-extrabold'>
                                    {profile?.name}
                                </span>
                                <span className='lg:text-lg text-blue-500'>
                                    {profile?.role}
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col my-5'>
                            <span className='font-extrabold text-base'>About me</span>
                            <span className='text-sm'>
                                {profile?.about}
                            </span>
                        </div>
                        <div
                            className='flex flex-col-3 justify-center text-white lg:absolute bg-primary rounded-xl shadow-[0_35px_50px_-15px_rgba(0,0,0,0.3)] lg:w-[79%] left-[10%]'
                        >
                            <div className='flex flex-col justify-center items-center p-5 md:w-16 lg:w-24 h-16 rounded-xl bg-primary cursor-pointer text-sm hover:bg-[#0d696c]'>
                                <span>52</span>
                                <span>
                                    Post
                                </span>
                            </div>
                            <div className='flex flex-col justify-center items-center p-5 md:w-16 lg:w-24 h-16 rounded-xl bg-primary cursor-pointer text-sm hover:bg-[#0d696c]'>
                                <span>
                                    250
                                </span>
                                <span>
                                    Visitor
                                </span>
                            </div>
                            <div className='flex flex-col justify-center items-center p-5 md:w-16 lg:w-24 h-16 rounded-xl bg-primary cursor-pointer text-sm hover:bg-[#0d696c]'>
                                <span>
                                    4.5K
                                </span>
                                <span>
                                    Comment
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='text-base md:text-lg font-extrabold my-24 w-full'>
                        <ul>
                            <Link className='bg-slate-200 text-primary' to='/profile/edit'>
                                <li className='flex justify-between px-14 py-5 hover:bg-slate-200 hover:text-primary'>
                                    <span>Edit Profile</span>
                                    <MdArrowForwardIos
                                        className='text-3xl font-bold transition-colors duration-100'
                                    />
                                </li>
                            </Link>
                            <Link to='/profile/saved-post'>
                                <li className='flex justify-between px-14 py-5 hover:bg-slate-200 hover:text-primary'>
                                    <span>Saved Post</span>
                                    <MdArrowForwardIos
                                        className='text-3xl font-bold transition-colors duration-100'
                                    />
                                </li>
                            </Link>
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
                            <li onClick={doLogout} className='flex justify-between px-14 py-5 hover:bg-red-200 hover:text-red-600'>
                                <span>Logout</span>
                                <MdArrowForwardIos
                                    className='text-3xl font-bold transition-colors duration-100'
                                />
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='basis-2/3 text-lg flex flex-col items-center relative gap-10 pt-10 px-10 md:px-0'>
                    <div
                        onClick={() => navigate(-1)}
                        className='flex justify-center items-center self-start absolute top-5 left-10 gap-4 cursor-pointer md:hidden'>
                        <MdArrowBackIos className="font-bold" />
                        <span>Edit Profile</span>
                    </div>

                    <Formik
                        initialValues={{
                            username: profile?.username,
                            fullName: profile?.name,
                            email: profile?.email,
                            password: profile?.password,
                            job: profile?.job,
                            about: profile?.about
                        }}
                        onSubmit={editProfile}
                        enableReinitialize>


                        {({ handleSubmit, handleChange, handleBlur, values }) => (
                            <form onSubmit={handleSubmit} className='lg:grid-cols-2 py-5 md:justify-evenly w-full lg:pl-20 gap-5'>
                                <div className='flex flex-col items-center gap-5 pt-10'>
                                    <div className='rounded-3xl w-32 h-32 p-[2px] bg-gradient-to-b from-green-400 to-primary'>
                                        {!selectedPicture && <ImageTemplate className='bg-white w-full h-full object-cover rounded-3xl p-2' src={profile?.picture || null} defaultImg={Image.profileAvatar} />}
                                        {selectedPicture && (
                                            <div className='bg-white w-full h-full rounded-3xl p-2 relative'>
                                                <img className='rounded-2xl h-full w-full object-cover' src={pictureURI} alt='profile' />
                                                <div className='absolute rounded-2xl bg-gray-400 w-full h-full top-0 left-0 opacity-50 text-white flex justify-center items-center'></div>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <label className='btn btn-ghost text-blue-500 normal-case text-lg'>
                                            <span className=''>Choose profile picture</span>
                                            <input name='picture' onChange={changePicture} type="file" className='hidden' />
                                        </label>
                                    </div>
                                </div>
                                <div className='grid lg:grid-cols-2'>
                                    <div>
                                        <div className="form-control flex gap-2 mt-5">
                                            <label htmlFor="username">
                                                Username:
                                            </label>
                                            <input
                                                type="text"
                                                name="username"
                                                className='input input-bordered border-primary w-full md:w-96 lg:w-[90%]'
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.username} />
                                        </div>
                                        <div className="form-control flex gap-2 mt-5">
                                            <label htmlFor="email">
                                                Email:
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className='input input-bordered border-primary w-full md:w-96 lg:w-[90%]'
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.email}
                                            />
                                        </div>
                                        <div className="form-control flex gap-2 mt-5">
                                            <label htmlFor="job">
                                                Job:
                                            </label>
                                            <input
                                                type="text"
                                                name="job"
                                                className='input input-bordered border-primary w-full md:w-96 lg:w-[90%]'
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.job}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-control flex gap-2 mt-5">
                                            <label htmlFor="name">
                                                Name:
                                            </label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                className='input input-bordered border-primary w-full md:w-96 lg:w-[90%]'
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.fullName}
                                            />
                                        </div>
                                        <div className="form-control flex gap-2 mt-5 relative">
                                            <label htmlFor="password">
                                                Password:
                                            </label>
                                            <input
                                                type={show ? "text" : "password"}
                                                name="password"
                                                className='input input-bordered border-primary w-full md:w-96 lg:w-[90%]'
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                                placeholder='********************'
                                            />
                                            <span
                                                onClick={handleShow}
                                                className='underline underline-offset-3 text-xs absolute top-12 md:right-5 right-5 lg:right-[15%] text-cyan-600 cursor-pointer hover:text-cyan-700'>Show</span>
                                        </div>
                                        <div className="form-control flex gap-2 mt-5">
                                            <label htmlFor="about">
                                                About:
                                            </label>
                                            <textarea
                                                name="about"
                                                className='input input-bordered border-primary w-full md:w-96 lg:w-[90%] h-40 p-2'
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.about}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className='absolute btn btn-ghost right-10 top-5 text-primary font-bold cursor-pointer capitalize hover:text-cyan-700'>Save Change</button>
                            </form>
                        )}
                    </Formik>
                        <div className='py-7 w-full flex justify-center'>
                            {profile?.role === "standard" && <button onClick={requestAuthor} className='btn btn-primary text-white normal-case h-14 w-full max-w-[400px]'>Request to be an author</button>}
                        </div>

                </section>
            </div>
            <input type="checkbox" id="loading" className="modal-toggle" checked={openModal} />
            <div className="modal">
                <div className="modal-box bg-transparent shadow-none">
                    <div className='justify-center flex '>
                        <AiOutlineLoading3Quarters className='animate-spin ' color='white' size={60} />
                    </div>
                </div>
            </div>
            <div className='pt-24'>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    />
            </div>
            <Footer />
        </>
    )
}
