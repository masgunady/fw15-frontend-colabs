import moment from 'moment'
import React, { useState } from 'react'
import { AiOutlineFieldTime, AiOutlineLike } from 'react-icons/ai'
import { RiBookmarkFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ImageTemplate from '../ImageTemplate'
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate'
import defaultImage from '../../assets/image/default.png'

function ArticleByCategoryPagination(props) {
  const { data } = props;

  const [articleCategory, setArticleCategory] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3
  

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setArticleCategory(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  },[itemOffset, itemsPerPage, data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  ArticleByCategoryPagination.propTypes = {
    data: PropTypes.objectOf(PropTypes.array)
  }
  return (
    <>
      <section className="py-16">
        <div className="gap-7 flex flex-wrap justify-center items-center ">
                {
                  articleCategory.map((article) => {
                      return(
                        <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl" key={`article-cat-${article.id}`}>
                          {<ImageTemplate className='absolute top-0 w-[320px]  object-cover' src={article?.picture || null} defaultImg={defaultImage} />}
                          <div className="w-full h-[55%] absolute bottom-0 bg-white">
                            <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                <Link to={`/article-view/${article.id}`}>
                                  <div className="text-primary text-xl font-bold">{(article.title).slice(0, 15) + `...`}</div>
                                </Link>
                                <div className="text-black text-center text-sm" dangerouslySetInnerHTML={{__html:(article.content).slice(0, 50) + `...`}} />
                                <div className="flex justify-between w-full text-sm text-black">
                                  <div className="flex gap-2 items-center">
                                    <div>
                                      <AiOutlineLike />
                                    </div>
                                    <div>{article?.likeCount}</div>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                    <div>
                                      <AiOutlineFieldTime />
                                    </div>
                                    <div>{moment(article.createdAt).add(7, 'hour').startOf('hour').fromNow()}</div>
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
      </section>
      <div className="flex justify-center items-center gap-9 mb-10">
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

export default ArticleByCategoryPagination