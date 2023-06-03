import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai';
import { RiBookmarkFill } from 'react-icons/ri';

const YourComponent = () => {
  const [selectedArticle, setSelectedArticle] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalAction, setModalAction] = React.useState('');

  const handleAccept = () => {
    // Perform actions when "Accept" button is clicked
    console.log('Accepted:', selectedArticle);
    setModalVisible(false);
  };

  const handleDecline = () => {
    // Perform actions when "Decline" button is clicked
    console.log('Declined:', selectedArticle);
    setModalVisible(false);
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

  const articleWait = [
    // Array of articles in the waiting list
    // Each article should have properties like id, title, content, picture, likeCount, createdAt, etc.
    // Example:
    {
      id: 1,
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet...',
      picture: 'https://example.com/image.jpg',
      likeCount: 10,
      createdAt: '2023-05-15',
      // Other properties...
    },
    {
        id: 2,
        title: 'Article 2',
        content: 'Lorem ipsum dolor sit amet...',
        picture: 'https://example.com/image.jpg',
        likeCount: 10,
        createdAt: '2023-05-15',
        // Other properties...
      },
    //...
  ];

  return (
    <section>
      <div className="w-full bg-white pb-16 flex flex-col gap-5">
        <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 pr-7 md:pr-16 lg:pr-24 flex justify-between">
          <div className="text-2xl text-black font-bold">Waiting list</div>
          <Link to="/waiting-list">
            <div className="text-base text-primary font-semibold">More</div>
          </Link>
        </div>
        <div className="pl-7 md:pl-16 lg:pl-24 xl:pl-28 2xl:pl-40 h-[380px]">
          <div className="flex items-start gap-9 scrollbar-hide overflow-scroll h-full">
            {articleWait.map((article) => (
              <div key={`article-wait-home-${article.id}`} className="flex flex-col gap-5">
                <div className="relative overflow-hidden min-w-[260px] h-[293px] rounded-xl shadow-xl">
                  {article.picture && (
                    <img
                      src={article.picture.startsWith('https') ? article.picture : `http://localhost:8888/uploads/${article.picture}`}
                      className="absolute top-0 w-[320px] object-cover"
                      alt=""
                    />
                  )}
                  <div className="w-full h-[50%] absolute bottom-0 bg-white py-3">
                    <div key={`article-${article.id}`} className="px-6 flex flex-col gap-2 items-center justify-between h-full">
                      <Link to={`/admin/article-view/${article.id}`}>
                        <div className="text-primary text-xl font-bold">{article.title.slice(0, 20) + `...`}</div>
                      </Link>
                      <div className="text-black text-center text-sm" dangerouslySetInnerHTML={{ __html: article.content.slice(0, 40) + `...` }} />
                      <div className="flex justify-between w-full text-sm text-black">
                        <div className="flex gap-2 justify-center items-center">
                          <div>
                            <AiOutlineLike />
                          </div>
                          <div> {article.likeCount}</div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div>
                            <AiOutlineFieldTime />
                          </div>
                          <div> {article.createdAt}</div>
                        </div>
                        <div>
                          <RiBookmarkFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between px-10 gap-7">
                  <button className="btn btn-primary rounded-xl text-white capitalize" onClick={() => openModal(article, 'accept')}>
                    Accept
                  </button>
                  <button htmlFor="modalReject" className="btn btn-secondary rounded-xl text-white capitalize" onClick={() => openModal(article, 'decline')}>
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {modalVisible && (
        <div>
            <input type="checkbox" id="loading" className="modal-toggle" checked={modalVisible} />
          <div className="modal">
            <div className="modal-box">
              <p className="py-4 text-black">
                Are you sure {modalAction === 'accept' ? 'to publish' : modalAction === 'decline' ? 'to decline' : ''} this article!
              </p>
              <div className="modal-action">
                <button type="button" className="btn btn-warning w-20 capitalize text-black" onClick={modalAction === 'accept' ? handleAccept : handleDecline}>
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
        {articleWait.length < 1 && (
          <div className="flex flex-col items-center justify-center gap-7">
            <div className="font-semibold text-2xl text-secondary">No Waiting List Found</div>
            <div className="font-medium text base max-w-[300px] text-center">
              Waiting List arrived when author request to publish the articles
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YourComponent;
