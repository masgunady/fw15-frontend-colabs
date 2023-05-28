import logo from '../assets/image/logo-white.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-primary w-[100%] min-h-[500px] flex flex-col items-start md:items-center justify-start md:justify-center px-9 md:px-11 xl:px-60 2xl:px-60">
                <div className="w-[100%] flex flex-col md:flex-row justify-center md:justify-between gap-8 lg:gap-32 pt-11 mb-7">
                    <div className="flex flex-col gap-5 mt-2">
                        <div>
                            <ul className="flex flex-col gap-7 text-xl text-white capitalize font-medium tracking-[1px]">
                                <li>
                                    <Link className="hover:text-[#373a42]">Why news today</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-[#373a42]">be an author</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-[#373a42]">community</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-[#373a42]">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-2">
                        <div className="w-full flex justify-start md:justify-end">
                            <Link to="/" className="w-40">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-4 text-xl text-white font-medium tracking-[1px] w-[250px]  md:text-end">
                                <li>
                                    <Link className="hover:text-[#373a42]" href="#">
                                        Jendral Sudirman Street No. 23 Jakarta, Indonesia
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-[#373a42]" href="#">
                                        (621)989898934
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-[#373a42]" href="#">
                                        newstoday@mail.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
