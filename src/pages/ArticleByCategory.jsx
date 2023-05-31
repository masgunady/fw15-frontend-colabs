import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link} from "react-router-dom";

import { IoChevronBackOutline } from 'react-icons/io5';
import { FaFilter } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';

// import { useSelector } from "react-redux";
// import React from "react";
// import http from "../helper/http";
// import { Formik } from "formik";
import moment from "moment";
import React from "react";
import http from "../helper/http";


const ArticleByCategory = () => {
    const [articleCategory, setArticleCategory] = React.useState([])
    const [activeTabCategory, setActiveTabCategory] = React.useState('maritim')
    const [tabArticle, setTabArticle] = React.useState(1)
    const Categories = ['maritim', 'entertainment', 'coffee', 'studies', 'pokemons', 'indonesians', 'economy', 'eports', 'festivals', 'music', 'transportation', 'forest', 'journey', 'innovation', 'history', 'accident', 'maestro', 'animals', 'narcotics', 'sea']



    React.useEffect(() => {
        async function getArticleCategory() {
            try {
                const { data } = await http().get(`/article?category=${activeTabCategory}&page=${tabArticle}&limit=9`)
                // setTotalPage(data.totalPage)
                console.log(data)
                setArticleCategory(data.results)
            } catch (error) {
                console.error(error);
            }
        }
        getArticleCategory();
    }, [activeTabCategory, tabArticle]);

    const handleTabClick = (category) => {
        setActiveTabCategory(category)
        setTabArticle(1)
    };


    return (
        <div className="bg-white">
            <div className="header pb-24">
                <Header />
            </div>
            <main className="px-[95px] gap-5 flex flex-col mt-10">
                <section className="flex items-center">
                    <div className="flex items-center">
                        <Link to='/article' className="btn btn-ghost border-none">
                            <IoChevronBackOutline className="text-black" size={35} />
                        </Link>
                        <div className="text-black hidden md:block text-lg font-semibold mr-[410px]">Category</div>
                    </div>
                    {/* <div className="text-black text-lg font-semibold">Goverment</div> */}

                </section>
                <>
                    <div className="grid grid-cols-10 items-center justify-center gap-3">
                        {Categories.map(category => {
                            return (
                                <>
                                    <div className="flex justify-center items-center">
                                        <button
                                            key={category}
                                            className={`font-semibold px-4 py-2 hover:border-red-500  hover:text-red-500 ${activeTabCategory === category ? 'flex gap-10 activ border-b-2 border-red-500 text-red-600 ' : 'opacity-60'} px-4 py-2`}
                                            onClick={() => handleTabClick(category)}
                                        >
                                            {category}

                                            {console.log(category)}
                                        </button>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </>
                <section className="flex mt-[70px] ">
                    <div className="dropdown mr-[500px]">
                        <label tabIndex={0} className="btn btn-ghost">
                            <FaFilter className="text-black" size={30} />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Name (A-Z)</a></li>
                            <li><a>Name (Z-A)</a></li>
                            <li><a>Category</a></li>
                            <li><a>Last Added</a></li>
                            <li><a>Last Modified</a></li>
                        </ul>
                    </div>
                    {/* <div className=" w-full bg-white">
                        <div className="">
                            <Formik
                                initialValues={{
                                    searchName: '',
                                }}
                                onSubmit={onSearch}
                            >
                                {({ handleBlur, handleChange, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="relative flex gap-[10px] form-control w-full max-w-[500px]">
                                            <i className="absolute top-3">
                                                <FaSearch size={20} />
                                            </i>
                                            <input className="input input-bordered input-primary" placeholder="Search" type='text' name='searchName' onBlur={handleBlur} onChange={handleChange} />
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div> */}
                </section>
                <section className="pb-20">
                    <div className="bg-white grid grid-cols-5 gap-5 justify-center items-center ">
                        {articleCategory.map((article) => {
                            return (
                                <>
                                    <div className=" flex justify-center items-center relative overflow-hidden max-w-[260px] min-h-[293px] rounded-xl shadow-xl" key={`article-category-${article.id}`}>
                                        {article.picture && <img src={article.picture.startsWith('https') ? article.picture : `http://localhost:8888/uploads/${article.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                        <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                            <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                <Link to={`/article-view/${article.id}`}>
                                                    <div className="text-primary text-xl font-bold">{(article.title).slice(0, 15) + `...`}</div>
                                                </Link>
                                                <div className="text-black text-center text-sm">{(article.content).slice(0, 50) + `...`}</div>
                                                <div className="flex justify-between w-full text-sm text-black">
                                                    <div className="flex gap-2 items-center">
                                                        <div>
                                                            <AiOutlineLike />
                                                        </div>
                                                        <div>{article?.likeCount}</div>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        <div>
                                                            <AiOutlineFieldTime />
                                                        </div>
                                                        <div>{moment(article.createdAt).startOf('hour').fromNow()}</div>
                                                    </div>
                                                    <div>
                                                        <RiBookmarkFill />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </section>
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
};
export default ArticleByCategory;