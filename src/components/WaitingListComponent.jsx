// import PropTypes from 'prop-types';
import React from 'react';
import http from '../helper/http';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
// import { RiBookmarkFill } from 'react-icons/ri';



// import moment from 'moment';


export default function WaitingListComponent() {
    // const token = useSelector((state) => state.auth.token)
    // const [waitingAcc, setWaitingAcc] = React.useState([])
    // const [openModal, setOpenModal] = React.useState(false)
    const [waiting, setWaiting] = React.useState([]);
    // const reqData = location.state;
    // const navigate = useNavigate()

    // const arr = ['maritim', 'entertainment', 'coffee', 'studies', 'indonesians', 'economy', 'music', 'transportation', 'forest', 'journey', 'innovation', 'history', 'accident', 'maestro', 'narcotics', 'sea']

    React.useEffect(() => {
      async function getWaitingListData() {
          try {
              const { data } = await http().get(`/article/waiting-list?sort=DESC&sortBy=likeCount&page=1&limit=30`);
              setWaiting(data.results);
          } catch (err) {
              console.log(err)
          }
      }
      getWaitingListData();
  }, []);

  // const updateWaitingList = () => {
  //       const getDataWaiting = async() => {
  //           const {data} = await http(token).get('/article/waiting-list?sort=DESC&sortBy=likeCount&page=1&limit=30')
  //           setWaitingAcc(data.results)
  //       }
  //       getDataWaiting()
  //   };

  //   const accRequestArticle = async() => {
  //     const qs = new URLSearchParams(reqData).toString()
  //     await http(token).post('/request/acc-article',qs)
  //     setOpenModal(true)
  //     setTimeout(() => {
  //         setOpenModal(false)
  //         navigate('/',  { replace: true })
  //     }, 1000) 
  // }

  // const rejectRequestArticle = async() => {
  //     const qs = new URLSearchParams(reqData).toString()
  //     await http(token).post('/request/reject-article',qs)
  //     setOpenModal(true)
  //     setTimeout(() => {
  //         setOpenModal(false)
  //         navigate('/',  { replace: true })
  //     }, 1000)
  // }



    // const formatLikesCount = (count) => {
    //     if (count < 1000) {
    //         return count.toString(); 
    //     } else {
    //         const formattedCount = (count / 1000).toFixed(1); 
    //         return formattedCount.toString() + 'k'; 
    //     }
    // };


    return (
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
                                              {/* <div className="flex gap-2 items-center">
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
                                              </div> */}
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
    );

}
