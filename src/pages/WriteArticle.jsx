import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

import { IoChevronBackOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import http from "../helper/http";
import { Formik } from "formik";
import defaultProfile from '../assets/image/covid.jpeg'
import { AiOutlineLoading3Quarters,  } from 'react-icons/ai'


const WriteArticle = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const [article, setArticle] = React.useState({})
    const [category, setCategory] = React.useState([])
    const [selectedPicture, setSelectedPicture] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)

    React.useEffect(()=>{
        async function getDataArticle(){
            const {data} =await http().get('/article')
            console.log(data)
            setArticle(data.results)
        }
        getDataArticle()
    },[])

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

    React.useEffect(() => {
        console.log(selectedPicture)
    }, [selectedPicture])


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
            const { data } = await http(token).post('/article/manage', form, {
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
    }

    return (
        <div className="bg-white md:bg-[#F4F7FF]">
            <div>
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
                        <div className="flex-1 hidden lg:flex justify-center text-black text-lg font-semibold">Write Article</div>
                    </div>
                </div>
            </section>
            <main className="pl-[112px] pr-[134px] py-[75px]">
                <div className="flex gap-[24px]">
                    <div className="flex flex-col">
                        <div className="w-[342px]">
                            <div className="flex justify-center items-center border border-2 rounded-lg w-full h-[535px]">
                                <div className="flex justify-center items-center border-dashed border-2 rounded-lg w-[299px] h-[469px]">
                                    <img className='w-[299px] h-[469px] bg-cover rounded-lg' src={article?.picture?.startsWith('https') ? article.picture : (article?.picture === null ? defaultProfile : `http://${import.meta.env.VITE_BACKEND_URL}/uploads/${article?.picture}`)} />
                                    {(console.log(defaultProfile))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-[60px]">
                            <label className="btn btn-secondary w-full text-white">
                                <span>Choose Cover Photo</span>
                                <input name='picture'onChange={(e) => setSelectedPicture(e.target.files[0])} className='hidden' type='file' />
                            </label>
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            title: '',
                            categoryId: '',
                            content: ''
                        }}
                        onSubmit={editArticle}
                        enableReinitialize
                    >
                        {({ handleSubmit, handleChange, handleBlur, errors, touched, values }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="flex gap-[12px] ">
                                    <div>
                                        <div>
                                            <div className="form-control w-full max-w[408px]">
                                                <input
                                                    name="title"
                                                    type="text"
                                                    className="input input-bordered input-primary"
                                                    placeholder="Article Tittle"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.title} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <form>
                                            <div className="form-control w-full max-w[408px]">
                                                <select
                                                    name="categoryId"
                                                    className="select select-primary"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.categoryId}
                                                >
                                                    <option disabled selected>Article Category</option>
                                                    {category.map((item) => {
                                                        return (
                                                            <React.Fragment key={`category-${item.id}`} >
                                                                <option value={item.id}>
                                                                    {item.name}
                                                                </option>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-primary mt-[43px]">Attachment :</div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <form>
                                    <div className="form-control textarea overflow-hidden  w-[828px] h-[420px] ">
                                        <textarea
                                            className="textarea textarea-bordered resize-none w-[800px] h-[420px]"
                                            placeholder="Type the article"
                                            name="content"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.content}

                                        />
                                    </div>
                                </form>
                                <div className="mt-[60px]">
                                    <label className="text-white">
                                        <input
                                            name='picture'
                                            className='hidden'
                                            type='file'
                                        />
                                    </label>
                                </div>
                                <button className="btn btn-primary w-[828px]">Request Publish Article</button>
                            </form>
                        )}
                    </Formik>
                </div>
                <div>
                    <div></div>
                </div>
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
    )
};
export default WriteArticle;