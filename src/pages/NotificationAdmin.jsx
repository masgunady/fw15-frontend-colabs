import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/image/default.png'

import { IoChevronBackOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import React from 'react';
import http from '../helper/http';
import { formatDistanceToNow } from 'date-fns';
import ImageTemplate from '../components/ImageTemplate';
const NotoficationAdmin = () => {
    const token = useSelector((state) => state.auth.token)
    const [requestAcc, setRequestAcc] = React.useState([])
    const [createdAt, setCreatedAt] = React.useState(null);
    

    React.useEffect(()=>{
        const getDataRequest = async() => {
            const {data} = await http(token).get('/request')
            setRequestAcc(data.results)
            setCreatedAt(data.results[0].createdAt);
        }
        getDataRequest()
    },[])

    const updateNotifications = () => {
        const getDataRequest = async() => {
            const {data} = await http(token).get('/request')
            setRequestAcc(data.results)
            setCreatedAt(data.results[0].createdAt);
        }
        getDataRequest()
    };

    const accRequestAuthor = async(reqData)=>{
        const qs = new URLSearchParams(reqData).toString()
        await http(token).post('/request/acc-author', qs)
        updateNotifications()
    }
    const rejectRequestAuthor = async(reqData)=>{
        const qs = new URLSearchParams(reqData).toString()
        await http(token).post('/request/reject-author', qs)
        updateNotifications()
    }

    const formatUpdatedAt = (createdAt) => {
        return formatDistanceToNow(new Date(createdAt), { addSuffix: true, includeSeconds: false }).replace('about', '');
        
    };

    return (
        <div className="bg-white">
                <div className="header pb-24">
                    <Header />
                </div>
            <section>
                <div className="w-full py-9  flex flex-col gap-5 bg-white">
                    <div className="flex justify-center lg:hidden pb-5 text-2xl px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56 text-black font-bold">Notification</div>
                    <div className="flex items-center justify-between gap-5 px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56 w-full">
                        <div className="flex-1  flex items-center gap-5">
                            <Link className="border-none">
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
                        <button className="btn btn-ghost text-2xl px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56 text-black font-bold">
                            <FaFilter />
                        </button>

                        <div className="min-h-[400px] flex flex-col gap-7 px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-56  w-full">
                            {
                                    requestAcc.map(item => {
                                        return(
                                            <div className="flex items-center justify-between" key={`request-acc-${item.id}`}>
                                                <div className="flex gap-4">
                                                    <div className=" w-14 h-14 flex items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-[#cedaff] to-primary">
                                                        {<ImageTemplate className='w-12 h-12 border-4 border-white rounded-full' src={item?.picture || null} defaultImg={defaultImage} />}
                                                    </div>

                                                    <div className="">
                                                        <div className="text-black text-xl font-semibold">{item?.fullName === null ? "New user" : item.fullName} sent you a {item.message}</div>
                                                        <div className="text-lg text-grey-800">{createdAt && formatUpdatedAt(createdAt)}</div>
                                                    </div>
                                                </div>

                                                <div className='flex items-center gap-9'>
                                                    {item?.typeRequest === "author" ?
                                                        <div className='flex items-center gap-7'>
                                                        <button onClick={() => accRequestAuthor({userId: item.userId, requestId: item.id})} className="btn btn-primary capitalize text-white">Accept</button>
                                                        <button onClick={() => rejectRequestAuthor({userId: item.userId, requestId: item.id})} className="btn bg-[#03999e5f] border-0 capitalize text-white">Ignore</button>
                                                        </div>
                                                        :    
                                                        <div>
                                                        <Link to={`/admin/article-view/${item.articleId}`} state={{ requestId:item.id, articleId: item.articleId }} className="btn btn-primary capitalize text-white">View</Link>
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
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};
export default NotoficationAdmin;
