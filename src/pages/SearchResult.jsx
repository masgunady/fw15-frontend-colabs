import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useSearchParams } from 'react-router-dom';
import http from '../helper/http';
import SearchResultPagination from '../components/pagination/SearchResultPagination'

import { FaFilter, FaSearch } from 'react-icons/fa';

import React from 'react';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { RxCross1 } from 'react-icons/rx';

const SearchResult = () => {
    const [searchParams, setSearchParams] = useSearchParams('')
    const [searchResults, setSearchResults] = React.useState([])

    const [sort, setSort] = React.useState('ASC')
    const [sortBy, setSortBy] = React.useState('title')
    const [message, setMessage] = React.useState('Name (A-Z)')


    React.useEffect(() => {
        const getDataArticle = async () => {
            const { data } = await http().get(`/article?${searchParams}&sortBy=${sortBy}&sort=${sort}&page=1&limit=100`)
            setSearchResults(data.results)
        }
        getDataArticle()
    }, [searchParams, sortBy, sort])

    const handleSort = (sortBy, sort, message) => {
        setSortBy(sortBy)
        setSort(sort)
        setMessage(message)

        const elem = document.activeElement;
        elem?.blur();
    }



    const onSearch = (values) => {
        setSearchParams(values, '/article/search')
    }

    return (
        <>
            <div>
                <Helmet>
                    <title>HOME | Search</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>
            <div className="className='bg-white md:bg-[#F4F7FF]'">
                <div className="header pb-24">
                    <Header />
                </div>

                <main>
                    <section>
                        <div className="w-full pt-7  flex flex-col gap-5 bg-white">
                            <div className=" px-7 md:px-16 lg:px-24 xl:px-28 w-full">
                                <div className="md:flex md:items-center justify-between gap-4 ">
                                    <Formik
                                        initialValues={{
                                            searchName: '',
                                        }}
                                        onSubmit={onSearch}
                                    >
                                        {({ handleBlur, handleChange, handleSubmit }) => (
                                            <div className='w-full flex items-center justify-start px-4 sm:px-0'>
                                                <form onSubmit={handleSubmit} className='w-full'>
                                                    <div className='h-14 w-full md:max-w-[450px]  flex items-center gap-2 border-2 border-primary rounded-xl'>
                                                        <i className='pl-5'>
                                                            <FaSearch />
                                                        </i>
                                                        <div className='form-control w-full h-full text-black'>
                                                            <input type='text' name='searchName' onBlur={handleBlur} onChange={handleChange} placeholder='Search' className="outline-none w-full h-full" />
                                                        </div>
                                                        <div>
                                                        <button type='reset' className='btn btn-ghost'><RxCross1/></button>
                                                            <button type='submit' className='hidden'></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </Formik>
                                    <div className='flex items-center gap-2'>
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="btn btn-ghost m-1">
                                                <FaFilter className="text-black" size={30} />
                                                <div className='capitalize'>Sort By: {message}</div>
                                            </label>
                                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li onClick={() => { handleSort('title', 'ASC', 'Name (A-Z)') }}><p>Name (A-Z)</p></li>
                                                <li onClick={() => { handleSort('title', 'DESC', 'Name (Z-A)') }}><p>Name (Z-A)</p></li>
                                                <li onClick={() => { handleSort('category', 'ASC', 'Category') }}><p>Category</p></li>
                                                <li onClick={() => { handleSort('createdAt', 'ASC', 'First Added') }}><p>First Added</p></li>
                                                <li onClick={() => { handleSort('createdAt', 'DESC', 'First Added') }}><p>Last Added</p></li>
                                            </ul>
                                        </div>
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
                                <div>
                                    <SearchResultPagination data={ searchResults }/>
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
        </>
    );
};
export default SearchResult;
