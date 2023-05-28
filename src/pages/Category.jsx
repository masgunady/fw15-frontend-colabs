import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import { FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Category = () => {
    const [category, setCategory] = React.useState([]);

    React.useEffect(() => {
        async function getDatacategory() {
            const { data } = await axios.get('http://localhost:8888/categories?page=1&limit=20')
            console.log(data)
            setCategory(data.results)
        }
        getDatacategory()
    }, [])

    return (
        <>

            {/* helmet */}
            <div>
                <Helmet>
                    <title>Category</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="className='bg-white md:bg-[#F4F7FF]'">
            <div className="header pb-24">
                    <Header />
                </div>
                <section>
                    <div className="relative p-7 md:p-11 lg:p-28 h-[750px] bg-category-banner bg-no-repeat bg-cover text-black">
                        <div className="absolute flex flex-col gap-7 w-[90%] max-w-[670px]">
                            <div className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold">Choose Article by Category</div>
                            <div className="w-[90%] max-w-[500px] text-base md:text-xl">Category helps you to read another article that you haven’t thought before. You able to read all articles for free. Enjoy the reading!</div>
                        </div>
                    </div>
                </section>
                <main>
                    <section>
                        <div className="w-full py-16  flex flex-col gap-5 bg-white">
                            <div className="flex items-center justify-between gap-5 px-7 md:px-16 lg:px-24 xl:px-28 w-full">
                                <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost m-1">
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
                                <div className=" text-grey-400 capitalize text-base font-semibold">20 Category</div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="w-full bg-white pb-7 flex flex-col gap-5">
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28">
                                <div className="flex flex-wrap items-center justify-center gap-7 h-full ">
                                    {category.map(category => {
                                        return (
                                            <>
                                                <Link to="" key={category.id}>
                                                    <div className="flex flex-col gap-7 justify-center items-center">
                                                        <div className="relative w-[165px] h-[215px] object-cover overflow-hidden rounded-3xl shadow-xl">
                                                            <div className="absolute flex justify-center items-center w-full h-full bg-black opacity-30">
                                                            </div>
                                                            <div className="absolute flex justify-center items-center w-full h-full text-xl">
                                                                <div className="w-[60%] font-semibold text-center text-white">+200 artticle</div>
                                                            </div>
                                                            
                                                            {category.picture && <img src={category.picture.startsWith('https') ? category.picture :
                                                                `http://localhost:8888/uploads/${category.picture}`} className="object-cover w-full h-full " alt="" />}
                                                        </div>
                                                        <div className="text-black text-xl font-semibold hover:border-red-500  hover:text-red-500">{category.name}</div>
                                                    </div>
                                                </Link>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="w-full pb-16 flex items-center justify-center">
                        <div className="text-black text-xl font-semibold underline">Load another 30+ category</div>
                    </div>
                </main>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Category;
