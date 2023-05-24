import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import categoryPict from '../assets/image/category-pict.png';
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';

import { FaFilter } from 'react-icons/fa';
const SearchResult = () => {
    return (
        <div className="className='bg-white md:bg-[#F4F7FF]'">
            <div className="header">
                <Header />
            </div>

            <main>
                <section>
                    <div className="w-full pt-7  flex flex-col gap-5 bg-white">
                        <div className=" px-7 md:px-16 lg:px-24 xl:px-28 w-full">
                            <div className="flex items-center justify-between gap-5">
                                <form>
                                    <div className="form-control w-full max-w-[500px]">
                                        <input type="text" className="input input-bordered input-primary" />
                                    </div>
                                </form>
                                <button className="btn btn-ghost border-none">
                                    <FaFilter className="text-black" size={30} />
                                </button>
                            </div>
                        </div>
                        <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Search result for Covid-19</div>
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
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Lets see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    <img src={categoryPict} className="absolute bottom-24 w-full" alt="" />
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link>
                                                <div className="text-primary text-xl font-bold">COVID-19</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">Why corona never ends? Let’s see how its facts</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineLike />
                                                    </div>
                                                    <div>2.1K</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div>
                                                        <AiOutlineFieldTime />
                                                    </div>
                                                    <div>3m ago</div>
                                                </div>
                                                <div>
                                                    <RiBookmarkFill />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
