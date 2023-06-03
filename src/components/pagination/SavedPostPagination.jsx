import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineFieldTime, AiOutlineLike } from 'react-icons/ai';
import moment from 'moment';
import { RiBookmarkFill } from 'react-icons/ri';

function SavedPostPagination(props) {
  const { data } = props;

  const [bookmarks, setBookmarks] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3
  

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setBookmarks(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  },[itemOffset, itemsPerPage, data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  SavedPostPagination.propTypes = {
    data: PropTypes.objectOf(PropTypes.array)
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
      <div className='w-full px-2 xl:px-11'>
        <div className='w-full pt-7 flex justify-center flex-wrap gap-5 xl:gap-9'>
            {bookmarks.map((items) => {
                return (
                    <>
                        <div key={`bookmarks-${items.id}`} className="relative overflow-hidden w-full md:max-w-[220px] h-[250px] rounded-xl shadow-xl">
                            {/* <img src={Image.covid} className="absolute bottom-24 w-full" alt="" /> */}
                            {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute top-0 w-[320px]  object-cover" alt="" />}
                            <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                    <Link to={`/article-view/${items?.id}`}>
                                        <div className="text-primary text-xl font-bold">{(items.title).slice(0, 15) + `...`}</div>
                                    </Link>
                                    <div className="text-black text-center text-sm">{(items.content).slice(0, 50) + `...`}</div>
                                    <div className="flex justify-between w-full text-sm text-black">
                                        <div className="flex gap-2 items-center">
                                            <div>
                                                <AiOutlineLike className='text-blue-600' />
                                            </div>
                                            <div>{formatLikesCount(items?.likeCount)}</div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div>
                                                <AiOutlineFieldTime className='text-blue-600' />
                                            </div>
                                            <div>{moment(items.createdAt).add(7, 'hour').startOf('hour').fromNow()}</div>
                                        </div>
                                        <div>
                                            <RiBookmarkFill className='text-blue-600' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            <span className='hidden md:flex absolute top-0 right-[50%] cursor-pointer hover:text-primary'>Saved Post</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-9 mb-10">
            <div className="flex justify-center items-center">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="previous"
                  renderOnZeroPageCount={null}
                  containerClassName="pagination"
                  pageLinkClassName="page-num"
                  previousLinkClassName="page-num"
                  nextLinkClassName="page-num"
                  activeLinkClassName="active"
                />
            </div>
      </div>
    
    </>
  )
}

export default SavedPostPagination