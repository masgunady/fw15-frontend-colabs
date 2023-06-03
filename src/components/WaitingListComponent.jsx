// import PropTypes from 'prop-types';
import React from 'react';
import http from '../helper/http';
import { Link } from 'react-router-dom';

import { FaFilter } from 'react-icons/fa'
import { IoChevronBackOutline } from 'react-icons/io5';
import { AiOutlineFieldTime, AiOutlineLike, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import moment from 'moment';
import { useSelector } from 'react-redux';


export default function WaitingListComponent() {
    const token = useSelector((state) => state.auth.token)
    const [waiting, setWaiting] = React.useState([]);
    const [sort, setSort] = React. useState('ASC')
    const [sortBy, setSortBy] = React.useState('title')
    const [message, setMessage] = React.useState('Name (A-Z')
    const [loadingModal, setLoadingModal] = React.useState(false)
    const [selectedArticle, setSelectedArticle] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalAction, setModalAction] = React.useState('');


    React.useEffect(() => {
    async function getWaitingListData() {
        try {
            const { data } = await http().get(`/article/waiting-list?sortBy=${sortBy}&sort=${sort}&page=1&limit=100`);
            setWaiting(data.results);
        } catch (err) {
            console.log(err)
        }
    }
    getWaitingListData();
    }, [sortBy, sort]);

    const updateStateWaitingList = () => {
        async function getWaitingList() {
            try {
                const { data } = await http().get('/article/waiting-list?sort=DESC&sortBy=likeCount&page=1&limit=10');
                setWaiting(data.results);

            } catch (err) {
                console.log(err)
            }
        }
        getWaitingList();
    };

    const handleAccept = async() => {
    setModalVisible(false);
    const selectedId = selectedArticle
    const qs = new URLSearchParams({articleId:selectedId}).toString()
    await http(token).post('/request/acc-article', qs)
    setLoadingModal(true)
    setTimeout(() => {
        setLoadingModal(false)
        updateStateWaitingList()
    }, 1000)

    };

    const handleDecline = async() => {
    setModalVisible(false);
    const selectedId = selectedArticle
    const qs = new URLSearchParams({articleId:selectedId}).toString()
    await http(token).post('/request/reject-article', qs)
        setLoadingModal(true)
        setTimeout(() => {
            setLoadingModal(false)
        updateStateWaitingList()

        }, 1000)
    };

    const openModal = (article, action) => {
        setSelectedArticle(article);
        setModalAction(action);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedArticle(null);
        setModalAction('');
        setModalVisible(false);
    };


    const handleSort = (sortBy, sort, message ) => {
        setSortBy(sortBy)
        setSort(sort)
        setMessage(message)
        const elem = document.activeElement;
        elem?.blur();
    }

    const handleAccAll = async() => {
        setModalVisible(false);
        await http(token).post('/request/acc-all-article')
        setLoadingModal(true)
        setTimeout(() => {
            setLoadingModal(false)
        updateStateWaitingList()
        }, 2000)
    }
    const handleRejectAll = async() => {
        setModalVisible(false);
        await http(token).post('/request/reject-all-article')
        setLoadingModal(true)
        setTimeout(() => {
            setLoadingModal(false)
        updateStateWaitingList()
        }, 2000)
    }


    return (
        <>
            <section>
                <div className="w-full pt-9  flex flex-col gap-5 bg-white">
                    <div className="flex items-center gap-5 px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                        <div className="flex-1 flex items-center gap-5">
                            <Link to='/' className="btn btn-ghost">
                                <IoChevronBackOutline className="text-black" size={35} />
                            </Link>
                            <div className="text-black text-lg font-semibold">Home Page</div>
                        </div>
                        <div className="flex-1 hidden lg:flex justify-end text-black text-lg font-semibold">Waiting List</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full p flex flex-col gap-5 py-7">
                    <div className="flex items-center gap-5 px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                        <div className="dropdown">
                            <div className='flex items-center gap-2'>
                                <label tabIndex={0} className="btn btn-ghost flex items-center gap-5">
                                    <FaFilter className="text-black" size={30} />
                                </label>
                                <div className='capitalize hidden lg:block'>Sort By {message}</div>
                            </div>
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
                <div className="w-full min-h-[500px] pb-16 flex flex-col gap-5">
                    <div className="px-7 md:px-16 lg:px-24 xl:px-28">
                        <div className="w-full flex justify-center flex-wrap gap-7 xl:gap-9 ">
                            {waiting.map((items) => {
                                    return (
                                        <div key={`article-wait-home-${items.id}`} className='flex flex-col gap-5'>
                                            <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                                                {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute top-0 w-[320px] object-cover" alt="" />}
                                                <div className="w-full h-[50%] absolute bottom-0 bg-white py-3">
                                                    <div key={`article-${items.id}`} className="px-6 flex flex-col gap-2 items-center justify-between h-full">
                                                        <Link to={`/admin/article-view/${items.id}`}>
                                                            <div className="text-primary text-xl font-bold">{(items.title).slice(0, 20) + `...`}</div>
                                                        </Link>
                                                        <div className="text-black text-center text-sm" dangerouslySetInnerHTML={{__html:(items.content).slice(0, 40) + `...`}}/>
                                                        <div className="flex justify-between w-full text-sm text-black">
                                                            <div className="flex gap-2 justify-center items-center">
                                                                <div>
                                                                    <AiOutlineLike />
                                                                </div>
                                                                <div> {items.likeCount}</div>
                                                            </div>
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <AiOutlineFieldTime />
                                                                </div>
                                                                <div> {moment(items.createdAt).startOf('hour').fromNow()}</div>
                                                            </div>
                                                            <div>
                                                                <RiBookmarkFill />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between px-10 gap-7'>
                                            <button className="btn btn-primary rounded-xl text-white capitalize" onClick={() => openModal(items.id, 'accept')}>
                                                Accept
                                            </button>
                                            <button className="btn btn-secondary rounded-xl text-white capitalize" onClick={() => openModal(items.id, 'decline')}>
                                                Decline
                                            </button>
                                            </div>
                                        </div>
                                    );
                                })}

                                {modalVisible && (
                                    <div>
                                        <input type="checkbox" id="loading" className="modal-toggle" checked={modalVisible} />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <p className="py-4 text-black">
                                                    Are you sure {
                                                        modalAction === 'accept' ? 'to publish'
                                                        : modalAction === 'decline' ? 'to decline'
                                                        : modalAction === 'acceptAll' ? 'to publish all'
                                                        : modalAction === 'declineAll' ? 'to decline all'
                                                        : ''
                                                    } this article!
                                                </p>
                                                <div className="modal-action">
                                                    <button type="button" className="btn btn-warning w-20 capitalize text-black" 
                                                        onClick={
                                                        modalAction === 'accept' ? handleAccept
                                                        : modalAction === 'decline' ? handleDecline
                                                        : modalAction === 'acceptAll' ? handleAccAll
                                                        : modalAction === 'declineAll' ? handleRejectAll
                                                        : ''    
                                                    
                                                    }>
                                                    Yes
                                                    </button>
                                                    <label className="btn bg-[#03999e5f] border-0 text-black hover:text-white capitalize w-20" onClick={closeModal}>
                                                    Cancel!
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {
                                    waiting.length < 1 &&
                                    <div className='flex flex-col items-center justify-center gap-7 pt-16'>
                                        <div className='font-semibold text-2xl text-secondary'>No Waiting List Found</div>
                                        <div className='font-medium text base max-w-[300px] text-center'>Waiting List arrived when author request to poblush the articles</div>
                                    </div>
                                }  
                        </div>
                        {waiting.length >= 2 && <div className='flex flex-col lg:flex-row items-center justify-center gap-7 pt-24'>
                            <button onClick={() => openModal('', 'acceptAll')} className='btn btn-primary rounded-xl capitalize w-full max-w-[280px]'>Accept all request</button>
                            <button onClick={() => openModal('', 'declineAll')} className='btn btn-secondary rounded-xl capitalize w-full max-w-[280px]'>Decline all request</button>
                        </div>}
                    </div>
                </div>

            </section>              
            <input type="checkbox" id="loading" className="modal-toggle" checked={loadingModal} />
                <div className="modal">
                    <div className="modal-box bg-transparent shadow-none">
                        <div className='justify-center flex '>
                            <AiOutlineLoading3Quarters className='animate-spin ' color='white' size={60} />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );

}
