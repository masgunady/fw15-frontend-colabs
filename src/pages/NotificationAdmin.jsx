import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/image/default.png'

import { IoChevronBackOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import React from 'react';
import http from '../helper/http';
import moment from 'moment';
import ImageTemplate from '../components/ImageTemplate';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Helmet } from 'react-helmet';

const NotoficationAdmin = () => {
    const token = useSelector((state) => state.auth.token)
    const [requestAcc, setRequestAcc] = React.useState([])
    const [openModal, setOpenModal] = React.useState(false)
    const [sortBy, setSortBy] = React.useState('createdAt')
    const [sort, setSort] = React.useState('DESC')
    const [itemSort, setItemSort] = React.useState('Last Added')
    
    React.useEffect(()=>{
        const getDataRequest = async() => {
            const {data} = await http(token).get(`/request?sortBy=${sortBy}&sort=${sort}`)
            setRequestAcc(data.results)
        }
        getDataRequest()
    },[token, sort, sortBy])

    const updateNotifications = () => {
        const getDataRequest = async() => {
            const {data} = await http(token).get(`/request?sortBy=${sortBy}&sort=${sort}`)
            setRequestAcc(data.results)
        }
        getDataRequest()
    };

    const handleSortName = (message, sort, sortItem) => {
        setSortBy(message)
        setSort(sort)
        setItemSort(sortItem)
        const elem = document.activeElement;
        elem?.blur();
    }

    const accRequestAuthor = async(reqData)=>{
        const qs = new URLSearchParams(reqData).toString()
        await http(token).post('/request/acc-author', qs)
        setOpenModal(true)
            setTimeout(() => {
                setOpenModal(false)
                updateNotifications()
            }, 1000)
    }
    const rejectRequestAuthor = async(reqData)=>{
        const qs = new URLSearchParams(reqData).toString()
        await http(token).post('/request/reject-author', qs)
        setOpenModal(true)
        setTimeout(() => {
            setOpenModal(false)
            updateNotifications()
        }, 1000)
    }
    return (
        <>
        <div>
            <Helmet>
                <title>Notification | Admin</title>
                <meta name="description" content="Ini adalah deskripsi halaman saya" />
            </Helmet>
        </div>
        <div className="bg-white">
                <div className="header pb-24">
                    <Header />
                </div>
            <section>
                <div className="w-full py-9  flex flex-col gap-5 bg-white">
                    <div className="flex justify-center lg:hidden pb-5 text-2xl px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56 text-black font-bold">Notification</div>
                    <div className="flex items-center justify-between gap-5 px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                        <div className="flex-1  flex items-center gap-5">
                            <Link to='/' className="border-none">
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
                            <div className="dropdown px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56 text-black capitalize">
                                <label tabIndex={0} className="btn btn-ghost flex items-center gap-4">
                                    <FaFilter className="text-black" size={30} />
                                    <div className='capitalize'>Filter By : {itemSort}</div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li onClick={()=> handleSortName('message', 'ASC','Name (A-Z)')}><p>Name (A-Z)</p></li>
                                    <li onClick={()=> handleSortName('message', 'DESC','Name (Z-A)')}><p>Name (Z-A)</p></li>
                                    <li onClick={()=> handleSortName('typeRequest', 'ASC','Category')}><p>Category</p></li>
                                    <li  onClick={()=> handleSortName('createdAt', 'DESC','Last Added')} ><p>Last Added</p></li>
                                    <li  onClick={()=> handleSortName('createdAt', 'ASC','First Added')} ><p>First Added</p></li>
                                </ul>
                            </div>


                        <div className="overflow-auto min-h-screen flex flex-col gap-7 px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56  w-full">
                            {
                                    requestAcc.map(item => {
                                        return(
                                            <div className="flex items-center justify-between" key={`request-acc-${item.id}`}>
                                                <div className="flex gap-4">
                                                    <Link to={`/profile-information/${item.senderId}`} className=" w-14 h-14 flex items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-[#cedaff] to-primary">
                                                        {<ImageTemplate className='w-12 h-12 border-4 border-white rounded-full' src={item?.picture || null} defaultImg={defaultImage} />}
                                                    </Link>
                                                    <div className="">
                                                        <div className="text-black text-xl font-semibold">{item?.fullName === null ? "Anonimous user" : item.fullName} {item.message}</div>
                                                        <div className="text-lg text-grey-800">{moment(item.createdAt).add(7, 'hour').startOf('hour').fromNow()}</div>
                                                    </div>
                                                </div>

                                                <div className='flex items-center gap-9'>
                                                    {
                                                        item?.typeRequest === "author" ? 
                                                        (
                                                            <div className='flex items-center gap-7'>
                                                                <button onClick={() => accRequestAuthor({senderId: item.senderId, requestId: item.id})} className="btn btn-primary capitalize text-white">Accept</button>
                                                                <button onClick={() => rejectRequestAuthor({senderId: item.senderId, requestId: item.id})} className="btn bg-[#03999e5f] border-0 capitalize text-white">Ignore</button>
                                                            </div>
                                                        )
                                                        :
                                                        item?.typeRequest === "article" ? 
                                                        (
                                                            <div>
                                                                <Link to={`/admin/article-view/${item.articleId}`} state={{ requestId:item.id, articleId: item.articleId }} className="btn btn-primary capitalize text-white">View</Link>
                                                            </div>
                                                        )
                                                        :
                                                        <div>
                                                        
                                                        </div>
                                                    }
                                                    <div>
                                                        <div className="form-control">
                                                            <label className="label cursor-pointer">
                                                                <input type="checkbox" className="checkbox checkbox-primary" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                            }
                            
                            {requestAcc.length<1 && (
                                    <div className=' h-full flex flex-col items-center justify-center gap-7 '>
                                        <div className='font-semibold text-2xl text-secondary'>No Notification Found</div>
                                        <div className='font-medium text base max-w-[300px] text-center'>Notification arrived if you have inteacrted with anyone</div>
                                    </div>
                                )}
                        </div>

                        
                    </div>
                </section>
            </main>
                <input type="checkbox" id="loading" className="modal-toggle" checked={openModal} />
                <div className="modal">
                    <div className="modal-box bg-transparent shadow-none">
                        <div className='justify-center flex '>
                            <AiOutlineLoading3Quarters className='animate-spin ' color='white' size={60} />
                        </div>
                    </div>
                </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
        </>
    );
};
export default NotoficationAdmin;
