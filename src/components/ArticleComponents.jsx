// import PropTypes from 'prop-types';
import React from 'react';
import http from '../helper/http';
import { Link } from 'react-router-dom';
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';

import moment from 'moment';


export default function ArticleComponent() {
    const [article, setArticle] = React.useState([]);



    const arr = ['maritim', 'entertainment', 'coffee', 'studies', 'indonesians', 'economy', 'music', 'transportation', 'forest', 'journey', 'innovation', 'history', 'accident', 'maestro', 'narcotics', 'sea']



    React.useEffect(() => {
        const fetchData = async () => {
            const fetchRequests = arr.map(async (cat) => {
                const { data } = await http().get(`/article?sort=DESC&sortBy=likeCount&page=1&limit=5&category=${cat}`);
                // console.log(data.results)
                return data.results;
            });

            const results = await Promise.all(fetchRequests);
            setArticle(results);
        };


        fetchData();
    }, []);



    const formatLikesCount = (count) => {
        if (count < 1000) {
            return count.toString(); 
        } else {
            const formattedCount = (count / 1000).toFixed(1); 
            return formattedCount.toString() + 'k'; 
        }
    };


    return (
        <div className="text-black">
            {article ? 
            article.map((categoryData, index) => (
                <div key={index}>
                    <section>
                        <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                            <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                                {/* category article */}
                                <div>{arr[index].charAt(0).toLocaleUpperCase() + arr[index].slice(1)}</div>
                                <div className="text-primary font-normal text-lg">
                                    <Link to='/article-by-category'>View More</Link>
                                </div>
                            </div>
                            <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                                <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                    {categoryData.map((result) => (
                                        
                                        <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${result.id}`}>
                                            {result.picture && <img src={result.picture.startsWith('https') ? result.picture : `http://localhost:8888/uploads/${result.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                            <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                    <Link to={`/article-view/${result.id}`}>
                                                        <div className="text-primary text-xl font-bold">{(result.title).slice(0, 35) + `...`}</div>
                                                    </Link>
                                                    <div className="text-black text-center text-sm">{(result.content).slice(0, 60) + `...`}</div>
                                                    <div className="flex justify-between w-full text-sm text-black">
                                                        <div className="flex gap-2 items-center">
                                                            <div>
                                                                <AiOutlineLike />
                                                            </div>
                                                            <div>{formatLikesCount(result?.likeCount)}</div>
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                            <div>
                                                                <AiOutlineFieldTime />
                                                            </div>
                                                            <div>{moment(result.createdAt).startOf('hour').fromNow()}</div>
                                                        </div>
                                                        <div>
                                                            <RiBookmarkFill />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ))
        : <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                </div>
            </div>
        </div>
    </div>
            }
        </div> 
    );

}
