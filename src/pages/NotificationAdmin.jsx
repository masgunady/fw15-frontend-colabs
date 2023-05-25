import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { IoChevronBackOutline } from 'react-icons/io5';
const NotoficationAdmin = () => {
    return (
        <div className="className='bg-white md:bg-[#F4F7FF]'">
            <div className="header">
                <Header />
            </div>
            <section>
                <div className="w-full pt-9  flex flex-col gap-5 bg-white">
                    <div className="flex justify-center lg:hidden pb-5 text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Notification</div>
                    <div className="flex items-center justify-between gap-5 px-7 md:px-16 lg:px-20 xl:px-24 w-full">
                        <div className="flex-1  flex items-center gap-5">
                            <Link className="btn btn-ghost border-none">
                                <IoChevronBackOutline className="text-black" size={35} />
                            </Link>
                            <div className="text-black hidden md:block text-lg font-semibold">Home Page</div>
                        </div>
                        <div className="flex-1 hidden lg:flex justify-center text-black text-lg font-semibold">Notification</div>
                        <div className="flex-1 text-black flex justify-end text-lg font-semibold">Select</div>
                    </div>
                </div>
            </section>
            <main>
                <section>
                    <div className="w-full pb-16 flex flex-col items-start gap-5 bg-white">
                        <button className="btn btn-ghost text-2xl px-8 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                            <FaFilter />
                        </button>

                        <div className="flex flex-col gap-7 px-8 md:px-16 lg:px-24 xl:px-28  w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-4">
                                    <div className=" w-14 h-14 flex items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-[#cedaff] to-primary">
                                        <img className="w-12 h-12 border-4 border-white rounded-full" src="https://i.pravatar.cc/55" />
                                    </div>

                                    <div className="">
                                        <div className="text-black text-xl font-semibold">Ryann sent you a request to publish an article</div>
                                        <div className="text-lg text-grey-800"> 2m ago</div>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <Link className="btn btn-primary capitalize text-white">View</Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="checkbox" checked className="checkbox checkbox-primary" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-4">
                                    <div className=" w-14 h-14 flex items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-[#cedaff] to-primary">
                                        <img className="w-12 h-12 border-4 border-white rounded-full" src="https://i.pravatar.cc/55" />
                                    </div>

                                    <div className="">
                                        <div className="text-black text-xl font-semibold">Ryann sent you a request to publish an article</div>
                                        <div className="text-lg text-grey-800"> 2m ago</div>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <Link className="btn btn-primary capitalize text-white">View</Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="checkbox" checked className="checkbox checkbox-primary" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-4">
                                    <div className=" w-14 h-14 flex items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-[#cedaff] to-primary">
                                        <img className="w-12 h-12 border-4 border-white rounded-full" src="https://i.pravatar.cc/55" />
                                    </div>

                                    <div className="">
                                        <div className="text-black text-xl font-semibold">Ryann sent you a request to publish an article</div>
                                        <div className="text-lg text-grey-800"> 2m ago</div>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <Link className="btn btn-primary capitalize text-white">View</Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="checkbox" checked className="checkbox checkbox-primary" />
                                        </label>
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
export default NotoficationAdmin;
