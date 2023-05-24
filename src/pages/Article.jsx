import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import categoryPict from '../assets/image/category-pict.png';
import { AiOutlineLike, AiOutlineFieldTime, AiOutlinePlus } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import { FaFilter } from 'react-icons/fa';
import latestNews from '../assets/image/latest-news.png';
import embedVideo from '../assets/image/embed-video.png';
const Article = () => {
    return (
        <div className="className='bg-white md:bg-[#F4F7FF]'">
            <div className="header">
                <Header />
            </div>
            <section>
                <div className="relative p-7 md:p-11 lg:p-28 h-[750px] bg-article-banner bg-no-repeat bg-cover text-black">
                    <div className="absolute flex flex-col gap-7 w-[90%] max-w-[670px]">
                        <div className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold">Start Writing an Article</div>
                        <div className="w-[90%] max-w-[500px] text-base md:text-xl">You can be an author by being active in reading artciles in a month or you can request to be an author if you have been a member for three months.</div>
                    </div>
                </div>
            </section>
            <main>
                <section>
                    <div className="w-full py-16  flex flex-col gap-5 bg-white">
                        <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Search Article</div>
                        <div className="flex items-center gap-5 pl-7 md:pl-16 lg:pl-24 xl:pl-28 w-full">
                            <button className="btn bg-[#03999e5f] border-none">
                                <FaFilter className="text-black" size={30} />
                            </button>
                            <button className="btn bg-[#03999e5f] border-none text-black capitalize text-base font-semibold">
                                <AiOutlinePlus className="text-black" size={15} /> Write an article
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                        <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                            <div>Goverment</div>
                            <div className="text-primary font-normal text-lg">
                                <Link>View More</Link>
                            </div>
                        </div>
                        <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                            <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
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

                <section>
                    <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                        <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                            <div>Goverment</div>
                            <div className="text-primary font-normal text-lg">
                                <Link>View More</Link>
                            </div>
                        </div>
                        <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                            <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
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

                <section>
                    <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                        <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                            <div>Goverment</div>
                            <div className="text-primary font-normal text-lg">
                                <Link>View More</Link>
                            </div>
                        </div>
                        <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                            <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
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

                <section>
                    <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                        <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                            <div>Goverment</div>
                            <div className="text-primary font-normal text-lg">
                                <Link>View More</Link>
                            </div>
                        </div>
                        <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                            <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
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

                <section>
                    <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                        <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                            <div>Goverment</div>
                            <div className="text-primary font-normal text-lg">
                                <Link>View More</Link>
                            </div>
                        </div>
                        <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                            <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
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

                <div className="w-full pb-16 flex items-center justify-center">
                    <div className="text-black text-xl font-semibold underline">Load another 30+ category</div>
                </div>
            </main>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Article;
