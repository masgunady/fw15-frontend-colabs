import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import articleImage from '../assets/image/article-image.png';
import { IoChevronBackOutline } from 'react-icons/io5';

const ArticleView = () => {
    return (
        <>

            {/* helmet */}
            <div>
                <Helmet>
                    <title>Article View</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="className='bg-white md:bg-[#F4F7FF]'">
                <div className="header">
                    <Header />
                </div>
                <section>
                    <div className="w-full py-16  flex flex-col gap-5 bg-white">
                        <div className="flex items-center justify-between gap-5 px-7 md:px-16 lg:px-24 xl:px-28 w-full">
                            <div className="flex-1  flex items-center gap-5">
                                <button className="btn btn-ghost border-none">
                                    <IoChevronBackOutline className="text-black" size={30} />
                                </button>
                                <div className="text-black hidden md:block text-lg font-semibold">Back</div>
                            </div>
                            <div className="flex-1 flex justify-end lg:justify-start text-black text-lg font-semibold">Article Viewer</div>
                        </div>
                    </div>
                </section>
                <main>
                    <section>
                        <div className="w-full min-h-[370px] flex flex-col gap-5 ">
                            <div className="flex flex-col lg:flex-row items-start justify-center gap-5 px-7 md:px-16 lg:px-24 xl:px-28 w-full">
                                <div className="flex-1 min-h-[370px]  flex items-start overflow-hidden object-cover gap-5">
                                    <img className="min-h-[370px] object-cover" src={articleImage} alt="" />
                                </div>
                                <div className="flex-1  h-full min-h-[370px]  text-black text-lg font-semibold">
                                    <div className="px-6  h-full min-h-[370px] flex flex-col gap-7 items-start justify-between">
                                        <Link>
                                            <div className="text-black text-4xl font-bold">Thailand at the 2019 Southeast Asian Games</div>
                                        </Link>
                                        <div className="text-black text-center text-lg">Richard Gervain - Author</div>
                                        <div className="text-black text-center text-sm">Wed, March 3rd 2021</div>
                                        <div className="flex justify-start gap-5 w-full text-sm text-black">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineLike size={40} />
                                                </div>
                                                <div className="text-lg">2.1K</div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <AiOutlineFieldTime size={40} />
                                                </div>
                                                <div className="text-lg">3m ago</div>
                                            </div>
                                            <div>
                                                <RiBookmarkFill size={40} />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <button className="btn btn-primary w-full">Share Article Link</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="w-full bg-white py-16 flex flex-col gap-5">
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28">
                                <div className="flex flex-wrap items-center justify-center gap-7 h-full ">
                                    During the 2019 Southeast Asian Games, governor the Sports Authority of Thailand (SAT) Kongsak Yodmanee criticised the organization of the games, as the Philippines held the games in many cities and
                                    municipalities, causing to the various concerns and controversies. He will propose to hold the next Thailands Southeast Asian Games in one city or province. He also suggested Bangkok and Chonburi Province are
                                    the best choice for hosting the Thailands games. He mentioned Bangkok traffic is less congested than Manila and the city has many existing venues for the games but water sports venues. Bangkok hosted the
                                    inaugural games in 1959 and 1967 as Southeast Asian Peninsular Games, which were the precursor to the modern Southeast Asian Games, and 1985 as Southeast Asian Games. Bangkok hosted many global and
                                    continental events such as four-time Asian Games and Summer Universiade in 2007. Bangkok will host the 2021 Asian Indoor and Martial Arts Games with Chonburi Province It acted as the test event and a prelude
                                    for the future multi-sport event, a proposed Youth Olympic Games in 2026. During the 2019 Southeast Asian Games, governor the Sports Authority of Thailand (SAT) Kongsak Yodmanee criticised the organization of
                                    the games, as the Philippines held the games in many cities and municipalities, causing to the various concerns and controversies. He will propose to hold the next Thailands Southeast Asian Games in one city
                                    or province. He also suggested Bangkok and Chonburi Province are the best choice for hosting the Thailands games. He mentioned Bangkok traffic is less congested than Manila and the city has many existing
                                    venues for the games but water sports venues. Bangkok hosted the inaugural games in 1959 and 1967 as Southeast Asian Peninsular Games, which were the precursor to the modern Southeast Asian Games, and 1985 as
                                    Southeast Asian Games. Bangkok hosted many global and continental events such as four-time Asian Games and Summer Universiade in 2007. Bangkok will host the 2021 Asian Indoor and Martial Arts Games with
                                    Chonburi Province It acted as the test event and a prelude for the future multi-sport event, a proposed Youth Olympic Games in 2026.
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="w-full py-16 flex flex-col gap-5 bg-white">
                            <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Comments</div>

                            <div className=" pl-7 md:pl-16 lg:pl-24 xl:pl-28 w-full flex flex-col gap-7">
                                <div className="flex gap-5 items-center w-full lg:w-[50%]">
                                    <div className="overflow-hidden w-[55px] rounded-md">
                                        <img src="https://i.pravatar.cc/55" alt="" />
                                    </div>
                                    <div className="w-full ">
                                        <form className="flex gap-3 items-center ">
                                            <div className="w-full">
                                                <input type="text" className="input input-bordered input-primary w-full" />
                                            </div>
                                            <div>
                                                <button type="submit" className="btn btn-ghost text-primary font-semibold capitalize">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <div className="flex gap-5 items-center">
                                        <div className="overflow-hidden w-[55px] rounded-md">
                                            <img src="https://i.pravatar.cc/55" alt="" />
                                        </div>
                                        <div>
                                            <div className="text-primary text-md font-semibold">Regina - 1M ago</div>
                                            <div className="text-frey-800 text-md">Could agree morel</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="overflow-hidden w-[55px] rounded-md">
                                            <img src="https://i.pravatar.cc/55" alt="" />
                                        </div>
                                        <div>
                                            <div className="text-primary text-md font-semibold">Regina - 1M ago</div>
                                            <div className="text-frey-800 text-md">Could agree morel</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="overflow-hidden w-[55px] rounded-md">
                                            <img src="https://i.pravatar.cc/55" alt="" />
                                        </div>
                                        <div>
                                            <div className="text-primary text-md font-semibold">Regina - 1M ago</div>
                                            <div className="text-frey-800 text-md">Could agree morel</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="overflow-hidden w-[55px] rounded-md">
                                            <img src="https://i.pravatar.cc/55" alt="" />
                                        </div>
                                        <div>
                                            <div className="text-primary text-md font-semibold">Regina - 1M ago</div>
                                            <div className="text-frey-800 text-md">Could agree morel</div>
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
        </>
    );
};
export default ArticleView;
