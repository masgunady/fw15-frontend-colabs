// import PropTypes from 'prop-types';
import React from 'react';
import http from '../helper/http';
import { Link } from 'react-router-dom';

import { FaFilter } from 'react-icons/fa'
import { IoChevronBackOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet';


export default function WaitingListComponent() {
    const [waiting, setWaiting] = React.useState([]);
    const [sort, setSort] = React. useState('ASC')
    const [sortBy, setSortBy] = React.useState('title')
    const [message, setMessage] = React.useState('Name (A-Z')


    React.useEffect(() => {
      async function getWaitingListData() {
          try {
              const { data } = await http().get(`/article/waiting-list?sort=${sort}&sortBy=${sortBy}&page=1&limit=30`);
              console.log(data.results)
              setWaiting(data.results);
          } catch (err) {
              console.log(err)
          }
      }
      getWaitingListData();
  }, [sortBy, sort]);

  const handleSort = (sort, sortBy, message ) => {
    setSortBy(sortBy)
    setSort(sort)
    setMessage(message)

    const elem = document.activeElement;
    elem?.blur();
  }


    return (
        <>
            <div>
                <Helmet>
                    <title>Waiting List | Admin</title>
                    <meta name="description" content="Ini adalah deskripsi halaman saya" />
                </Helmet>
            </div>
            <section>
                <div className="w-full py-9  flex flex-col gap-5 bg-white">
                    <div className="flex justify-center lg:hidden pb-5 text-2xl px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56 text-black font-bold">Notification</div>
                    <div className="flex items-center gap-5 px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                        <div className="flex-1 flex items-center gap-5">
                            <Link to='/' className="border-none">
                                <IoChevronBackOutline className="text-black" size={35} />
                            </Link>
                            <div className="text-black hidden md:block text-lg font-semibold">Home Page</div>
                        </div>
                        <div className="flex-1 hidden lg:flex justify-center text-black text-lg font-semibold">Waiting List</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full py-16  flex flex-col gap-5 bg-white">
                    <div className="flex items-center gap-5 pl-7 md:pl-16 lg:pl-24 xl:pl-28 w-full">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost flex items-center gap-5">
                                <FaFilter className="text-black" size={30} />
                                <div className='capitalize'>Sort By {message}</div>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li onClick={()=>{handleSort('title', 'ASC', 'Name (A-Z)')}}><p>Name (A-Z)</p></li>
                                <li onClick={()=>{handleSort('title', 'DESC', 'Name (Z-A)')}}><p>Name (Z-A)</p></li>
                                <li onClick={()=>{handleSort('category', 'ASC', 'Category')}}><p>Category</p></li>
                                <li onClick={()=>{handleSort('createdAt', 'ASC', 'First Added')}}><p>First Added</p></li>
                                <li onClick={()=>{handleSort('createdAt', 'DESC', 'Last Added')}}><p>Last Added</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-black">
            <section>
                <div className="w-full bg-white  pb-16 flex flex-col gap-5">
                    <div className="px-7 md:px-16 lg:px-24 xl:px-28">
                        <div className="w-full pt-7 flex justify-center flex-wrap gap-5 xl:gap-9 ">
                            {waiting.map((item) => (
                                <div className='flex flex-col gap-5' key={`article-category-${item.id}`}>
                                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                    {item.picture && <img src={item.picture.startsWith('https') ? item.picture : `http://localhost:8888/uploads/${item.picture}`} className="absolute bottom-24 h-full object-cover w-full" alt="" />}
                                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                            <Link to={`/article-view/${item.id}`}>
                                                <div className="text-primary text-xl font-bold">{(item.title).slice(0, 35) + `...`}</div>
                                            </Link>
                                            <div className="text-black text-center text-sm">{(item.content).slice(0, 60) + `...`}</div>
                                            <div className="flex justify-between w-full text-sm text-black">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between mx-10'>
                                    <div className='text-center btn-primary rounded px-4'>Accept</div>
                                    <div className='text-center btn-secondary rounded px-4'>Decline</div>
                                </div>
                                </div>      
                            ))}
                            {/* {waitingAcc.length<1 && (
                                <div className=' h-full flex flex-col items-center justify-center gap-7 '>
                                    <button onClick={accRequestArticle} className='font-semibold text-2xl text-secondary'>No Article in Waiting List</button>
                                    <button onClick={rejectRequestArticle} className='font-medium text base max-w-[300px] text-center'>All Articles requested has been approved by Admin</button>
                                </div>
                            )} */}
                        </div>
                        <div className='flex justify-center gap-[45px] mt-[85px]'>
                            <button className='btn btn-primary rounded-xl capitalize w-[450px] h-[75px]'>Accept all request</button>
                            <button className='btn btn-secondary rounded-xl capitalize w-[450px] h-[75px]'>Decline all request</button>
                        </div>
                    </div>
                </div>
            </section>
                {/* : <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
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
            </div> */}
                
            </div> 
        </>
    );

}
