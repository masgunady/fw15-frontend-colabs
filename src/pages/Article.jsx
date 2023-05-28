import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
// import categoryPict from '../assets/image/category-pict.png';
import { AiOutlineLike, AiOutlineFieldTime, AiOutlinePlus } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import { FaFilter } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import React from 'react';
import moment from 'moment';

const Article = () => {
    const [articleMaritim, setArticleMaritim] = React.useState([]);
    const [articleEntertainment, setArticleEntertainment] = React.useState([]);
    const [articleCoffee, setArticleCoffee] = React.useState([]);
    const [articleStudies, setArticleStudies] = React.useState([]);
    const [articlePokemons, setArticlePokemons] = React.useState([]);
    const [articleIndonesians, setArticleIndonesians] = React.useState([]);
    const [articleEconomy, setArticleEconomy] = React.useState([]);
    const [articleSports, setArticleSports] = React.useState([]);
    const [articleFestivals, setArticleFestivals] = React.useState([]);
    const [articleMusic, setArticleMusic] = React.useState([]);
    const [articleTransportation, setArticleTransportation] = React.useState([]);
    const [articleForest, setArticleForest] = React.useState([]);
    const [articleJourney, setArticleJourney] = React.useState([]);
    const [articleInnovation, setArticleInnovation] = React.useState([]);
    const [articleHistory, setArticleHistory] = React.useState([]);
    const [articleAccident, setArticleAccident] = React.useState([]);
    const [articleMaestro, setArticleMaestro] = React.useState([]);
    const [articleAnimals, setArticleAnimals] = React.useState([]);
    const [articleNarcotics, setArticleNarcotics] = React.useState([]);
    const [articleSea, setArticleSea] = React.useState([]);

    React.useEffect(() => {
        async function getDataMaritim() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=maritim');
            console.log(data);
            setArticleMaritim(data.results);
        }
        getDataMaritim();
    }, []);
    React.useEffect(() => {
        async function getDataEntertainment() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=entertainment');
            console.log(data);
            setArticleEntertainment(data.results);
        }
        getDataEntertainment();
    }, []);
    React.useEffect(() => {
        async function getDataCoffee() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=coffee');
            console.log(data);
            setArticleCoffee(data.results);
        }
        getDataCoffee();
    }, []);
    React.useEffect(() => {
        async function getDataStudies() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=studies');
            console.log(data);
            setArticleStudies(data.results);
        }
        getDataStudies();
    }, []);
    React.useEffect(() => {
        async function getDataPokemons() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=Pokémon');
            console.log(data);
            setArticlePokemons(data.results);
        }
        getDataPokemons();
    }, []);
    React.useEffect(() => {
        async function getDataIndonesians() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=indonesians');
            console.log(data);
            setArticleIndonesians(data.results);
        }
        getDataIndonesians();
    }, []);
    React.useEffect(() => {
        async function getDataEconomy() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=economy');
            console.log(data);
            setArticleEconomy(data.results);
        }
        getDataEconomy();
    }, []);
    React.useEffect(() => {
        async function getDataSports() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=sports');
            console.log(data);
            setArticleSports(data.results);
        }
        getDataSports();
    }, []);
    React.useEffect(() => {
        async function getDataFestivals() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=festival');
            console.log(data);
            setArticleFestivals(data.results);
        }
        getDataFestivals();
    }, []);
    React.useEffect(() => {
        async function getDataMusic() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=music');
            console.log(data);
            setArticleMusic(data.results);
        }
        getDataMusic();
    }, []);
    React.useEffect(() => {
        async function getDataTransportation() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=transportation');
            console.log(data);
            setArticleTransportation(data.results);
        }
        getDataTransportation();
    }, []);
    React.useEffect(() => {
        async function getDataForest() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=forest');
            console.log(data);
            setArticleForest(data.results);
        }
        getDataForest();
    }, []);
    React.useEffect(() => {
        async function getDataJourney() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=journey');
            console.log(data);
            setArticleJourney(data.results);
        }
        getDataJourney();
    }, []);
    React.useEffect(() => {
        async function getDataInnovation() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=innovation');
            console.log(data);
            setArticleInnovation(data.results);
        }
        getDataInnovation();
    }, []);
    React.useEffect(() => {
        async function getDataHistory() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=history');
            console.log(data);
            setArticleHistory(data.results);
        }
        getDataHistory();
    }, []);
    React.useEffect(() => {
        async function getDataAccident() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=accident');
            console.log(data);
            setArticleAccident(data.results);
        }
        getDataAccident();
    }, []);
    React.useEffect(() => {
        async function getDataMaestro() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=maestro');
            console.log(data);
            setArticleMaestro(data.results);
        }
        getDataMaestro();
    }, []);
    React.useEffect(() => {
        async function getDataAnimals() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=animal');
            console.log(data);
            setArticleAnimals(data.results);
        }
        getDataAnimals();
    }, []);
    React.useEffect(() => {
        async function getDataNarcotics() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=narcotics');
            console.log(data);
            setArticleNarcotics(data.results);
        }
        getDataNarcotics();
    }, []);
    React.useEffect(() => {
        async function getDataSea() {
            const { data } = await axios.get('http://localhost:8888/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=sea');
            console.log(data);
            setArticleSea(data.results);
        }
        getDataSea();
    }, []);


    const getLikesCount = (articleId) => {
        const storedLikesCount = localStorage.getItem(`likesCount_${articleId}`);
        if (storedLikesCount) {
            const likesCount = parseInt(storedLikesCount);
            if (likesCount < 1000) {
                return likesCount.toString();
            } else {
                const formattedCount = (likesCount / 1000).toFixed(1);
                return formattedCount.toString() + 'k';
            }
        } else {
            return '0';
        }
    };

    return (
        <>
            {/* helmet */}
            <div>
                <Helmet>
                    <title>Article</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>

            <div className="className='bg-white md:bg-[#F4F7FF]'">
                <div className="header pb-24">
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
                                <button className="btn bg-[#03999e5f] border-none text-black capitalize text-base font-semibold">
                                    <Link className='flex gap-1 justify-center items-center' to='/write-article'>
                                        <AiOutlinePlus className="text-black" size={15} /> Write an article
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Maritime</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleMaritim.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Entertainment</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleEntertainment.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Coffee</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleCoffee.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Studies</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleStudies.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Pokémon</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articlePokemons.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Indonesians</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleIndonesians.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Economy</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleEconomy.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Sports</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleSports.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Festivals</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleFestivals.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Music</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleMusic.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Transportations</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleTransportation.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Forest</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleForest.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Journey</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleJourney.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Innovations</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleInnovation.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>History</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleHistory.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Accident</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleAccident.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Maestro</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleMaestro.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Animals</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleAnimals.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Narcotics</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleNarcotics.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>Sea</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {articleSea.map(items => {
                                        return (
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm">{(items.content).slice(0, 60) + `...`}</div>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {getLikesCount(items.id)}</div>
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

export default Article;
