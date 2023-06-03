import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";

import { IoChevronBackOutline } from 'react-icons/io5';
import { useSelector } from "react-redux";
import React from "react";
import http from "../helper/http";
import { Field, Formik } from "formik";
// import defaultProfile from '../assets/image/covid.jpeg'
import { AiOutlineLoading3Quarters, } from 'react-icons/ai'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Helmet } from "react-helmet";
import defaultImage from '../assets/image/default.png'
import ImageTemplate from "../components/ImageTemplate";


const WriteArticle = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const { id } = useParams()
    const token = useSelector(state => state.auth.token)
    const [article, setArticle] = React.useState({})
    const [category, setCategory] = React.useState([])
    const [selectedPicture, setSelectedPicture] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)
    const [pictureURI, setPictureURI] = React.useState('')

    React.useEffect(() => {
        async function getDataArticle() {
            const { data } = await http().get(`/article/${id}`)
            console.log(data)
            setArticle(data.results)
        }
        getDataArticle()
    }, [id])

    React.useEffect(() => {
        async function getDataCategory() {
            try {
                const { data } = await http(token).get('/categories')
                console.log(data)
                setCategory(data.results)
            } catch (err) {
                console.log(err)
            }
        }
        getDataCategory()
    }, [token])

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


    const editArticle = async (values) => {
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
            const { data } = await http(token).patch(`/article/manage/${id}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'

                }

            })
            console.log(data)
            setArticle(data.results)
        } catch (err) {
            console.log(err)
        }
        setOpenModal(false)
        navigate(`/admin/article-view/${id}`)
    }

    return (

        <>

            {/* helmet */}
            <div>
                <Helmet>
                    <title>Edit Article</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="bg-white">
                <div className="header pb-24">
                    <Header />
                </div>
                <section>
                    <div className="w-full pt-9  flex flex-col gap-5 bg-white">
                        <div className="flex justify-center lg:hidden pb-5 text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Notification</div>
                        <div className="flex items-center justify-between gap-5 px-7 md:px-16 lg:px-20 xl:px-24 w-full">
                            <div className="flex-1  flex items-center gap-5">
                                <Link to='/article' className="btn btn-ghost border-none">
                                    <IoChevronBackOutline className="text-black" size={35} />
                                </Link>
                                <div className="text-black hidden md:block text-lg font-semibold">Back</div>
                            </div>
                            <div className="flex-1 hidden lg:flex justify-end text-black text-lg font-semibold">Edit Article</div>
                        </div>
                    </div>
                </section>
                <main className="pt-11 px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56">

                    <Formik
                        initialValues={{
                            title: article?.title,
                            categoryId: article?.category,
                            content: article?.content
                        }}
                        onSubmit={editArticle}
                        enableReinitialize
                    >

                        {({ handleSubmit, handleChange, handleBlur, errors, touched, values }) => (
                            <form onSubmit={handleSubmit} className="flex flex-col-reverse md:flex-row gap-7 items-center min-h-[500px] pb-16">
                                <div className="flex flex-col justify-center items-center w-[300px] h-[505px] gap-8">
                                    <div className="w-[300px] h-full border-2 rounded-2xl p-3 border-primary">
                                        <div className="border-2 w-full h-full rounded-2xl flex items-center justify-center">
                                            {!selectedPicture && <ImageTemplate className='w-full h-full border-4 border-white rounded-xl object-cover' src={article?.picture || null} defaultImg={defaultImage} />}
                                            {selectedPicture && (
                                                <div className='overflow-hidden relative'>
                                                    <img className='object-cove' src={pictureURI} alt='profile' />
                                                    <div className='absolute bg-gray-400 w-full h-full top-0 left-0 opacity-50 text-white flex justify-center items-center'></div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    <div>
                                        <label className='btn btn-ghost w-full rounded-xl border-2 border-primary text-primary hover:text-primary text-sm font-semibold tracking-[1px]'>
                                            <span>Choose Cover photo</span>
                                            <input name='picture' onChange={changePicture} className='hidden' type='file' />
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-9">
                                    <div className="flex flex-col md:flex-row items-center gap-11">
                                        <div className="form-control w-full flex-1">
                                            <input
                                                name="title"
                                                type="text"
                                                className="input input-bordered input-primary text-black"
                                                placeholder="Article Tittle"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.title} />
                                        </div>
                                        <div className="form-control w-full flex-1">
                                            <select
                                                name="categoryId"
                                                className="select select-primary text-black"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.categoryId}
                                            >
                                                {/* <option disabled selected>Article Category</option> */}
                                                {category.map((item) => {
                                                    return (
                                                        <React.Fragment key={`category-${item.id}`} >
                                                            <option className='hidden' >Article Category</option>
                                                            <option value={item.id}>
                                                                {item.name}
                                                            </option>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full min-h-[320px] border-primary text-black font-normal">
                                            {/* <textarea
                                                className="textarea textarea-bordered resize-none w-full min-h-[320px] border-2 text-black"
                                                placeholder="Type the article"
                                                name="content"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.content}

                                            /> */}
                                            <Field name="content">
                                                {({ field, form }) => (
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        config={{
                                                            toolbar: {
                                                                items: [
                                                                    'bold', // Add the bold option to the toolbar
                                                                    'italic',
                                                                    'underline',
                                                                    'alignment',
                                                                    'undo',
                                                                    'redo',
                                                                ],
                                                            },
                                                        }}
                                                        data={field.value}
                                                        onChange={(event, editor) => {
                                                            const data = editor.getData();
                                                            form.setFieldValue(field.name, data); // Set the field value using form.setFieldValue
                                                        }}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary w-full text-white text-lg capitalize">request publish edit article</button>
                                    </div>
                                </div>
                            </form>
                        )}

                    </Formik>





                </main>
                <input type="checkbox" id="loading" className="modal-toggle" checked={openModal} />
                <div className="modal">
                    <div className="modal-box bg-transparent shadow-none">
                        <div className='justify-center flex '>
                            <AiOutlineLoading3Quarters className='animate-spin ' color='white' size={60} />
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
};
export default WriteArticle;