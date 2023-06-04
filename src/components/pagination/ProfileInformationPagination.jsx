import React from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types';
import { AiOutlineFieldTime, AiOutlineLike } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ImageTemplate from '../ImageTemplate';
import defaultImage from '../../assets/image/embed-video.png'

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

//   const getLikesCount = (articleId) => {
//     const storedLikesCount = localStorage.getItem(`likesCount_${articleId}`);
//     if (storedLikesCount) {
//         const likesCount = parseInt(storedLikesCount);
//         if (likesCount < 1000) {
//             return likesCount.toString();
//         } else {
//             const formattedCount = (likesCount / 1000).toFixed(1);
//             return formattedCount.toString() + 'k';
//         }
//     } else {
//         return '0';
//     }
// };
  return (
    <div className='w-full'>
      <div className="gap-7 flex flex-wrap justify-center items-center ">
                {
                  article.map((item) => {
                      return(
                        <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-cat-${item.id}`}>
                          {<ImageTemplate className='absolute top-0 w-[320px]  object-cover' src={item?.picture || null} defaultImg={defaultImage} />}
                          <div className="w-full h-[55%] absolute bottom-0 bg-white">
                            <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                <Link to={`/article-view/${item.id}`}>
                                  <div className="text-primary text-xl font-bold">{(item.title).slice(0, 15) + `...`}</div>
                                </Link>
                                <div className="text-black text-center text-sm" dangerouslySetInnerHTML={{__html:(item.content).slice(0, 50) + `...`}} />
                                <div className="flex justify-between w-full text-sm text-black">
                                  <div className="flex gap-2 items-center">
                                    <div>
                                      <AiOutlineLike />
                                    </div>
                                    <div>{item?.likeCount}</div>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                    <div>
                                      <AiOutlineFieldTime />
                                    </div>
                                    <div>{moment(item.createdAt).add(7, 'hour').startOf('hour').fromNow()}</div>
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
      <div className="flex justify-center items-center gap-9 my-16">
            <div className="flex justify-start lg:justify-center items-center w-[98%]">
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