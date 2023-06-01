import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useSearchParams } from 'react-router-dom';
import http from '../helper/http';
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';

import { FaFilter } from 'react-icons/fa';

import React from 'react';
import { Formik } from 'formik';
import moment from 'moment';

const SearchResult = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchResults, setSearchResults] = React.useState([])


    React.useEffect(() => {
        const getArticleBySearch = async () => {
            const { data } = await http().get('/article?sort=DESC&sortBy=likeCount&page=1&limit=100', {
                params: searchParams,
            })

            setSearchResults(data.results)
        }
        getArticleBySearch()
    }, [searchParams])

    const handleSortByAsc = async () => {
        const {data} = await http().get('/article?sort=ASC&sortBy=title&page=1&limit=100', {  
            params: searchParams,
        })
        setSearchResults(data.results)
    }

    const handleSortByDesc = async () => {
        const {data} = await http().get('/article?sort=DESC&sortBy=title&page=1&limit=100', {  
            params: searchParams,
        })
        setSearchResults(data.results)
    }

    const handleLastAdd= async () => {
        const {data} = await http().get('/article?sort=DESC&sortBy=createdAt&page=1&limit=100', {  
            params: searchParams,
        })
        setSearchResults(data.results)
    }

    const handleLastModify= async () => {
        const {data} = await http().get('/article?sort=DESC&sortBy=updatedAt&page=1&limit=100', {  
            params: searchParams,
        })
        setSearchResults(data.results)
    }


    const onSearch = (values) => {
        setSearchParams(values, '/article/search')
    }

    const formatLikesCount = (count) => {
        if (count < 1000) {
            return count.toString(); 
        } else {
            const formattedCount = (count / 1000).toFixed(1); 
            return formattedCount.toString() + 'k'; 
        }
    };

    return (
        <div className="className='bg-white md:bg-[#F4F7FF]'">
                <div className="header pb-24">
                    <Header />
                </div>

            <main>
                <section>
                    <div className="w-full pt-7  flex flex-col gap-5 bg-white">
                        <div className=" px-7 md:px-16 lg:px-24 xl:px-28 w-full">
                            <div className="flex items-center justify-between gap-5">
                            <Formik 
                                    initialValues={{
                                    searchName: '',
                                    }}
                                    onSubmit={onSearch}
                            >
                                    {({  handleBlur, handleChange, handleSubmit }) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-control w-full max-w-[500px]">
                                                <input type='text' name='searchName' onBlur={handleBlur} onChange={handleChange} className="input input-bordered input-primary" />
                                            </div>
                                        </form>
                                    )}
                            </Formik>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost m-1">
                                        <FaFilter className="text-black" size={30} />
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li onClick={handleSortByAsc}><a>Name (A-Z)</a></li>
                                        <li onClick={handleSortByDesc}><a>Name (Z-A)</a></li>
                                        <li><a>Category</a></li>
                                        <li onClick={handleLastAdd}><a>Last Added</a></li>
                                        <li onClick={handleLastModify}><a>Last Modified</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full py-16  flex flex-col gap-5 bg-white">
                        <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Related Tags</div>
                        <div className=" pl-7 md:pl-16 lg:pl-24 xl:pl-28 w-full">
                            <div className="w-full  scrollbar-hide overflow-scroll">
                                <div className="flex items-center gap-5">
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #ladygaga
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #jokowidodo
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #dayniki
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #ladygaga
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #jokowidodo
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #dayniki
                                        </Link>
                                    </div>
                                    <div className="bg-[#03999e5f] h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                                        <Link className="text-primary" to="">
                                            #ladygaga
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                        <div className="px-7 md:px-16 lg:px-24 xl:px-28">
                            <div className="flex flex-wrap justify-center items-center gap-9 h-full ">
                                {searchResults.map((items) => {
                                    return (
                                        <div key={`article-${items.id}`}>
                                            <Link to={`/article-view/${items.id}`}>
                                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                                    <img src={items.picture.startsWith('https') ? items.picture : `${import.meta.env.VITE_BACKEND_URL}/uploads/${items.picture}`} className="absolute bottom-24 w-full h-full object-cover" alt="" />
                                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                            <div className="text-primary text-xl font-bold">{items.title}</div>
                                                            <div className="text-black text-center text-sm">{items.left}</div>
                                                            <div className="flex justify-between w-full text-sm text-black">
                                                                <div className="flex gap-2 items-center">
                                                                    <div>
                                                                        <AiOutlineLike />
                                                                    </div>
                                                                    <div>{formatLikesCount(items?.likeCount)}</div>
                                                                </div>
                                                                <div className="flex gap-2 items-center">
                                                                    <div>
                                                                        <AiOutlineFieldTime />
                                                                    </div>
                                                                    <div>{moment(items.createdAt).startOf('hour').fromNow()}</div>
                                                                </div>
                                                                <div>
                                                                    <RiBookmarkFill />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                                <div>
                                    {searchResults.length < 1 && (
                                        <div className='flex items-center justify-center font-semibold text-2xl '>
                                            Event &quot;{searchParams.get('searchName')}
                                            &quot; Not found ...
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};
export default SearchResult;
