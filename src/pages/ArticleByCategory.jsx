import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import { IoChevronBackOutline } from 'react-icons/io5';
import { FaFilter } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import defaultImage from '../assets/image/default.png'
import moment from "moment";
import React from "react";
import http from "../helper/http";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import ImageTemplate from "../components/ImageTemplate";

const ArticleByCategory = () => {
    const location = useLocation()
    const reqCategory = location.state
    const [articleCategory, setArticleCategory] = React.useState([])
    const [activeTabCategory, setActiveTabCategory] = React.useState(reqCategory)
    const [categories, setCategories] = React.useState([])
    const [tabArticle, setTabArticle] = React.useState(1)
    const [totalPage, setTotalPage] = React.useState()
    const [sort, setSort] = React.useState('ASC')
    const [sortBy, setSortBy] = React.useState('title')
    const [message, setMessage] = React.useState('Name (A/Z)')
    const [categorySort, setCategorySort] = React.useState('DESC')


    React.useEffect(() => {
        async function getCategory() {
            try {
                const { data } = await http().get(`/categories?page=1&limit=100&sort=${categorySort}&sortBy=name`)
                setCategories(data.results)
            } catch (error) {
                console.error(error);
            }
        }
        getCategory();
    }, [categorySort]);


    React.useEffect(() => {
        async function getArticleCategory() {
            try {
                const { data } = await http().get(`/article?category=${encodeURIComponent(activeTabCategory)}&sortBy=${sortBy}&sort=${sort}&page=${tabArticle}&limit=5`)
                setTotalPage(data.pageInfo?.totalPage)
                setArticleCategory(data.results)
                console.log(activeTabCategory)
            } catch (error) {
                console.error(error);
            }
        }
        getArticleCategory();
    }, [activeTabCategory, tabArticle, sort, sortBy]);

    const handleSort = (sortBy, sort, message) => {
        setSortBy(sortBy)
        setSort(sort)
        setMessage(message)

        const elem = document.activeElement;
        elem?.blur();
    }
    const handleSortCategory = (message) => {
        setMessage(message)
        if(categorySort === 'DESC'){
            setCategorySort('ASC')
        }else(
            setCategorySort('DESC')
        )
        const elem = document.activeElement;
        elem?.blur();
    }


    const handlePrevPage = () => {
        if (tabArticle >= 1) {
            setTabArticle(tabArticle - 1);
        }
    }

    const handleNextPage = () => {
        if (tabArticle < totalPage) {
            setTabArticle(tabArticle + 1);
        }
    };

    const handleTabClick = (category) => {
        setActiveTabCategory(category)
        setTabArticle(1)
    };

    return (
        <div className="bg-white">
            <div className="header pb-24">
                <Header />
            </div>
            <main className="px-7 md:px-16 lg:px-24 xl:px-28 2xl:px-56 gap-5 flex flex-col mt-10">
                <section className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to='/category' className="btn btn-ghost border-none">
                            <IoChevronBackOutline className="text-black" size={35} />
                        </Link>
                        <div className="text-black hidden md:block text-lg font-semibold mr-[410px]">Category</div>
                    </div>
                    <div className="dropdown">
                        <div className="flex gap-5 items-center">
                        <div className='capitalize'>Sort By {message}</div>
                        <label tabIndex={0} className="btn btn-ghost">
                            <FaFilter className="text-black" size={30} />
                        </label>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={()=>{handleSort('title', 'ASC', 'Name (A/Z)')}}><a>Name (A-Z)</a></li>
                            <li onClick={()=>{handleSort('title', 'DESC', 'Name (Z/A)')}}><a>Name (Z-A)</a></li>
                            <li onClick={()=>{handleSortCategory('Category')}}><a>Category</a></li>
                            <li onClick={()=>{handleSort('createdAt', 'ASC', 'First Added')}}><a>First Added</a></li>
                            <li onClick={()=>{handleSort('createdAt', 'DESC', 'Last Added')}}><a>Last Added</a></li>
                        </ul>
                    </div>
                </section>
                <>
                    <div className="w-full text-black">
                        <div className=" flex items-center gap-7 overflow-scroll scrollbar-hide">
                            {categories.map(category => {
                                return (
                                    <>
                                        <div className="flex justify-center items-center">
                                            <button
                                                key={`category-list-${category.id}`}
                                                className={`font-semibold px-4 py-2 hover:bg-[#03999e5f] capitalize rounded-lg  hover:text-[#03989e] ${activeTabCategory === category.name ? 'flex gap-10 activ  bg-[#03989e]/50 text-[#03989e]' : 'opacity-80'} px-4 py-2`}
                                                onClick={() => handleTabClick(category.name)}
                                            >
                                                {category.name}
                                            </button>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </>
                <section className="py-16">
                    <div className="gap-7 flex flex-wrap justify-center items-center ">
                            {
                                articleCategory.map((article) => {
                                    return(
                                        <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-cat-${article.id}`}>
                                            {<ImageTemplate className='absolute top-0 w-[320px]  object-cover' src={article?.picture || null} defaultImg={defaultImage} />}
                                            <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                    <Link to={`/article-view/${article.id}`}>
                                                        <div className="text-primary text-xl font-bold">{(article.title).slice(0, 15) + `...`}</div>
                                                    </Link>
                                                    <div className="text-black text-center text-sm" dangerouslySetInnerHTML={{__html:(article.content).slice(0, 50) + `...`}} />
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
                                    )
                                })
                            }
                    </div>
                </section>
                <div className="flex justify-center items-center gap-9 mb-10">
                    <div className="flex justify-center items-center">
                        <div>
                            <button className="btn btn-base-100 shadow-lg shadow-black-500/70" disabled={tabArticle === 1} onClick={handlePrevPage}><AiOutlineArrowLeft size={20} color="white" /></button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <button className="btn btn-primary shadow-lg shadow-black-500/70" disabled={tabArticle > totalPage} onClick={handleNextPage}><AiOutlineArrowRight size={20} color="white" /></button>
                        </div>
                    </div>
                </div>
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
};
export default ArticleByCategory;