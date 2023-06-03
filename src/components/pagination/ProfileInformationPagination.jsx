import React from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types';
import { AiOutlineFieldTime, AiOutlineLike } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import moment from 'moment';
import { Link } from 'react-router-dom';

function ProfileInformationPagination(props) {
  const { data } = props;

  const [article, setArticle] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8
  

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setArticle(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  },[itemOffset, itemsPerPage, data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  ProfileInformationPagination.propTypes = {
    data: PropTypes.objectOf(PropTypes.array)
  }

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
  // const formatLikesCount = (count) => {
  //   if (count < 1000) {
  //       return count.toString(); 
  //   } else {
  //       const formattedCount = (count / 1000).toFixed(1); 
  //       return formattedCount.toString() + 'k'; 
  //   }
  // };
  return (
    <div className='w-full'>
      <div className='grid p-10 lg:grid-cols-2 gap-5'>

        {article.map(items => {
            return (
                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-category-${items.id}`}>
                    {items.picture && <img src={items.picture.startsWith('https') ? items.picture : `http://localhost:8888/uploads/${items.picture}`} className="absolute top-0 w-[320px] object-cover" alt="" />}
                    <div className="w-full h-[55%] absolute bottom-0 bg-white">
                        <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                            <Link to={`/article-view/${items.id}`}>
                                <div className="text-primary text-xl font-bold">{(items.title).slice(0, 35) + `...`}</div>
                            </Link>
                            <div className="text-black text-center text-sm" dangerouslySetInnerHTML={{ __html: (items.content).slice(0, 60) + `...` }} />
                            
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
    </div>
  )
}

export default ProfileInformationPagination