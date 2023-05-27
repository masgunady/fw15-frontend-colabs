import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { IoChevronBackOutline, IoAdd } from 'react-icons/io5';
const WriteArticle = () => {
    return (
        <div className="bg-white md:bg-[#F4F7FF]">
            <div>
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
                            <div className="text-black hidden md:block text-lg font-semibold">Back</div>
                        </div>
                        <div className="flex-1 hidden lg:flex justify-center text-black text-lg font-semibold">Write Article</div>
                    </div>
                </div>
            </section>
            <main className="pl-[112px] pr-[134px] py-[75px]">
                <div className="flex gap-[24px]">
                    <div className="flex flex-col">
                        <div className="w-[342px]">
                            <div className="flex justify-center items-center border border-2 rounded-lg w-full h-[535px]">
                                <div className="flex justify-center items-center border-dashed border-2 rounded-lg w-[299px] h-[469px]">
                                    <IoAdd className="w-[64px] h-[100px]" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-[60px]">
                            <label className="btn btn-secondary w-full text-white">
                                <span>Choose Cover Photo</span>
                                <input name='picture' className='hidden' type='file' />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[12px] ">
                            <div>
                                <form>
                                    <div className="form-control w-full max-w[408px]">
                                        <input type="text" className="input input-bordered input-primary" placeholder="Article Tittle" />
                                    </div>
                                </form>
                            </div>
                            <div>
                                <form>
                                    <div className="form-control w-full max-w[408px]">
                                        <select name="category" className="select select-primary">
                                            <option disabled selected>Article Category</option>
                                            <option>Economy</option>
                                            <option>Politic</option>
                                            <option>Country</option>
                                            <option>Healt</option>
                                            <option>Beauty</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="text-primary mt-[43px]">Attachment :</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="border border-2 rounded-lg w-[828px] h-[375px] mt-[43px]">
                            <form>
                                <div className="form-control ">
                                    <textarea className="textarea resize-none h-[370px] overflow-hidden" placeholder="Type the article"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="mt-[60px]">
                            <label className="btn btn-primary w-[828px] text-white">
                                <span>Request Publish Article</span>
                                <input name='picture' className='hidden' type='file' />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
};
export default WriteArticle;