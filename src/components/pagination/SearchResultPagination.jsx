import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineFieldTime, AiOutlineLike } from 'react-icons/ai';
import moment from 'moment';
import { RiBookmarkFill } from 'react-icons/ri';

function SearchResultPagination(props) {
  const { data } = props;

  const [searchResults, setSearchResults] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10
  

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setSearchResults(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  },[itemOffset, itemsPerPage, data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  SearchResultPagination.propTypes = {
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
    <div className='flex flex-col gap-10'>
      <div className="flex flex-wrap justify-center items-center gap-9 h-full">
        {searchResults.map((items) => {
            return (
                <div key={`article-${items.id}`}>
                    <Link to={`/article-view/${items.id}`}>
                        <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                            <img src={items.picture.startsWith('https') ? items.picture : `${import.meta.env.VITE_BACKEND_URL}/uploads/${items.picture}`} className="absolute top-0 w-[320px] object-cover" alt="" />
                            <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                    <div className="text-primary text-xl font-bold">{items.title}</div>
                                    <div className="text-black text-center text-sm">{items.left}</div>
                                    <div className="flex justify-between w-full text-sm text-black">
                                        <div className="flex gap-2 items-center">
                                            <div>
                                                <AiOutlineLike />
                                            </div>
                                            <div>{formatLikesCount(items?.likeCount)}</div>
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
                    </Link>
                </div>
            )
        })}

      </div>
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
        
    
    </>
  )
}

export default SearchResultPagination