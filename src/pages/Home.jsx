import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import categoryPict from '../assets/image/category-pict.png';
// import homeBanner from '../assets/image/home-banner.png';
const Home = () => {
    return (
        <div className="className='bg-white md:bg-[#F4F7FF]'">
            <div className="header">
                <Header />
            </div>
            <section>
                <div className="relative p-28 h-screen bg-home-banner bg-no-repeat bg-cover text-black">
                    <div className="absolute flex flex-col gap-7 w-full max-w-[670px]">
                        <div className="font-serif text-6xl font-bold">Share Information and Educate People</div>
                        <div className="w-full max-w-[500px] text-xl">Everyone has their point of view of something, but just don’t be afraid to express the facts. Be an author and share you prespective of something to the world.</div>
                        <div>
                            <Link to="/" className="btn btn-primary text-white capitalize w-[170px] text-md">
                                Start Exploring
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full bg-white py-16 px-28 flex flex-col gap-5">
                    <div className="text-2xl text-black font-bold">Popular Tags</div>
                    <div className="flex items-center gap-5">
                        <div className="bg-primary h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                            <Link className="text-black opacity-100" to="">
                                #ladygaga
                            </Link>
                        </div>
                        <div className="bg-primary h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                            <Link className="text-black opacity-100" to="">
                                #jokowidodo
                            </Link>
                        </div>
                        <div className="bg-primary h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                            <Link className="text-black opacity-100" to="">
                                #dayniki
                            </Link>
                        </div>
                        <div className="bg-primary h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                            <Link className="text-black opacity-100" to="">
                                #ladygaga
                            </Link>
                        </div>
                        <div className="bg-primary h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                            <Link className="text-black opacity-100" to="">
                                #jokowidodo
                            </Link>
                        </div>
                        <div className="bg-primary h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                            <Link className="text-black opacity-100" to="">
                                #dayniki
                            </Link>
                        </div>
                        <div className="bg-primary h-[33px] p-2 flex items-center justify-center rounded-md" to="">
                            <Link className="text-black opacity-100" to="">
                                #ladygaga
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full bg-white px-28 pb-16 flex flex-col gap-5">
                    <div className="text-2xl text-black font-bold">Category</div>
                    <div className="flex items-center gap-9">
                        <div className="w-[180px] flex flex-col items-center gap-5" to="">
                            <img src={categoryPict} className="hover:h-[200px]" alt="" />
                            <div className="text-black font-bold text-xl">Goverment</div>
                        </div>
                        <div className="w-[180px] flex flex-col items-center gap-5" to="">
                            <img src={categoryPict} className="hover:h-[200px]" alt="" />
                            <div className="text-black font-bold text-xl">Goverment</div>
                        </div>
                        <div className="w-[180px] flex flex-col items-center gap-5" to="">
                            <img src={categoryPict} className="hover:h-[200px]" alt="" />
                            <div className="text-black font-bold text-xl">Goverment</div>
                        </div>
                        <div className="w-[180px] flex flex-col items-center gap-5" to="">
                            <img src={categoryPict} className="hover:h-[200px]" alt="" />
                            <div className="text-black font-bold text-xl">Goverment</div>
                        </div>
                        <div className="w-[180px] flex flex-col items-center gap-5" to="">
                            <img src={categoryPict} className="hover:h-[200px]" alt="" />
                            <div className="text-black font-bold text-xl">Goverment</div>
                        </div>
                        <div className="w-[180px] flex flex-col items-center gap-5" to="">
                            <img src={categoryPict} className="hover:h-[200px]" alt="" />
                            <div className="text-black font-bold text-xl">Goverment</div>
                        </div>
                        <div className="w-[180px] flex flex-col items-center gap-5" to="">
                            <img src={categoryPict} className="hover:h-[200px]" alt="" />
                            <div className="text-black font-bold text-xl">Goverment</div>
                        </div>
                        <div className="w-[180px] flex flex-col items-center gap-5" to="">
                            <img src={categoryPict} className="hover:h-[200px]" alt="" />
                            <div className="text-black font-bold text-xl">Goverment</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};
export default Home;
