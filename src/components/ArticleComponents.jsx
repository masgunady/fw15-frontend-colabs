import React from 'react';
import http from '../helper/http';
import { Link } from 'react-router-dom';
import { AiOutlineLike, AiOutlineFieldTime, AiOutlinePlus } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import defaultImage from '../assets/image/default.png'
import { FaFilter } from 'react-icons/fa';
import moment from 'moment';
import ImageTemplate from './ImageTemplate';


export default function ArticleComponent() {
    const [articles, setArticles] = React.useState([]);
    const [categories, setCategories] = React.useState([])
    const [sort, setSort] = React.useState('ASC')
    const [sortBy, setSortBy] = React.useState('title')
    const [message, setMessage] = React.useState('Name (A-Z)')
    const [categorySort, setCategorySort] = React.useState('DESC')

    React.useEffect(() => {
        const getDataCategories = async() => {
            const {data} = await http().get(`/categories?page=1&limit=100&sort=${categorySort}&sortBy=name`)
            setCategories(data.results)
        }
        getDataCategories()
    },[categorySort])

    React.useEffect(() => {
        const getDataArticle = async() => {
            const {data} = await http().get(`/article?sortBy=${sortBy}&sort=${sort}&page=1&limit=100`)
            setArticles(data.results)
        }
        getDataArticle()
    },[sortBy, sort])

    const handleSort = (sortBy, sort, message) => {
        setSortBy(sortBy)
        setSort(sort)
        setMessage(message)

        const elem = document.activeElement;
        elem?.blur();
    }
    const handleSortCategory = (message) => {
        setMessage(message)
        if(categorySort === 'DESC'){
            setCategorySort('ASC')
        }else(
            setCategorySort('DESC')
        )
        const elem = document.activeElement;
        elem?.blur();
    }

    const formatLikesCount = (count) => {
        if (count < 1000) {
            return count.toString(); 
        } else {
            const formattedCount = (count / 1000).toFixed(1); 
            return formattedCount.toString() + 'k'; 
        }
    };

    return (

    <>
        <section>
            <div className="w-full py-16  flex flex-col gap-5 bg-white">
                <div className="text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">Search Article</div>
                <div className="flex items-center gap-5 pl-7 md:pl-16 lg:pl-24 xl:pl-28 w-full">
                    <div className="dropdown">
                        <div className='flex items-center gap-2'>
                            <label tabIndex={0} className="btn btn-ghost flex items-center gap-5">
                                <FaFilter className="text-black" size={30} />
                            </label>
                            <div className='capitalize'>Sort By: {message}</div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={()=>{handleSort('title', 'ASC', 'Name (A/Z)')}}><p>Name (A-Z)</p></li>
                            <li onClick={()=>{handleSort('title', 'DESC', 'Name (Z/A)')}}><p>Name (Z-A)</p></li>
                            <li onClick={()=>{handleSortCategory('Category')}}><p>Category</p></li>
                            <li onClick={()=>{handleSort('createdAt', 'ASC', 'First Added')}}><p>First Added</p></li>
                            <li onClick={()=>{handleSort('createdAt', 'DESC', 'Last Added')}}><p>Last Added</p></li>
                        </ul>
                    </div>
                    <button className="btn bg-[#03999e5f] hover:bg-primary border-none text-black capitalize text-base font-semibold">
                        <Link className='flex gap-1 justify-center items-center hover:text-white' to='/write-article'>
                            <AiOutlinePlus className="text-black hover:text-white" size={15} /> Write an article
                        </Link>
                    </button>
                </div>
            </div>
        </section>
        <section>
            {categories.map(category => {
                return(
                    <div className="w-full bg-white  pb-16 flex flex-col gap-5" key={`category-article-${category.id}`}>
                        <div className="flex justify-between items-center text-2xl px-7 md:px-16 lg:px-24 xl:px-28 text-black font-bold">
                            <div className='capitalize'>{category.name}</div>
                            <div className="text-primary font-normal text-lg">
                                <Link to='/article-by-category' state={category.name}>View More</Link>
                            </div>
                        </div>
                        <div className="px-7 md:px-16 lg:px-24 xl:px-28 h-[310px]">
                            <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full ">
                                {
                                    articles.filter((article)=> article.category === category.name).map((article)=> {
                                        return(
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-item-${article.id}`}>
                                                {/* <img src={categoryPict} className="absolute bottom-24 w-full" alt="" /> */}
                                                {<ImageTemplate className='absolute top-0 w-[320px]  object-cover' src={article?.picture || null} defaultImg={defaultImage} />}
                                                <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                                    <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                                        <Link to={`/article-view/${article.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(article.title).slice(0, 25) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm" dangerouslySetInnerHTML={{__html:(article.content).slice(0, 60) + `...`}} />
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div>{formatLikesCount(article?.likeCount)}</div>
                                                            </div>
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineFieldTime />
                                                                </div>
                                                                <div>{moment(article.createdAt).startOf('hour').fromNow()}</div>
                                                            </div>
                                                            <div>
                                                                <RiBookmarkFill />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>

                )
            })}
        </section>
</>
    );

}
