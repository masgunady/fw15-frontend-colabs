import { useState } from "react";

const YourComponent = ({ articles }) => {
    const [likedArticles, setLikedArticles] = useState([]);

    const toggleLike = (id) => {
        setLikedArticles(prevLikedArticles => {
            if (prevLikedArticles.includes(id)) {
                return prevLikedArticles.filter(articleId => articleId !== id);
            } else {
                return [...prevLikedArticles, id];
            }
        });
    };

    return (
        <div>
            {articles ? (
                articles.map((article) => {
                    const { id, picture, title, likeCount, createdAt } = article;
                    const isLiked = likedArticles.includes(id);

                    return (
                        <div key={id} className="relative overflow-hidden min-w-[220px] h-[250px] rounded-xl shadow-xl">
                            <img src={picture} className="absolute bottom-24 w-full" alt="" />
                            <div className="w-full h-[55%] absolute bottom-0 bg-white">
                                <div className="px-6 flex flex-col gap-2 items-center justify-center pt-3">
                                    <Link to={`/articles/${id}`}>
                                        <div className="text-primary text-center text-xl font-bold">{title}</div>
                                    </Link>
                                    <div className="flex justify-between w-full text-sm text-black">
                                        <div
                                            onClick={() => toggleLike(id)}
                                            className="flex gap-2 items-center"
                                        >
                                            <div className='cursor-pointer'>
                                                {isLiked ? (
                                                    <AiOutlineLike id={id} className='text-blue-600' />
                                                ) : (
                                                    <AiFillLike id={id} className='text-blue-600' />
                                                )}
                                            </div>
                                            <div>{isLiked ? likeCount + 1 : likeCount}</div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div>
                                                <AiOutlineFieldTime className='text-blue-600' />
                                            </div>
                                            <div>{moment(createdAt).startOf('hour').fromNow()}</div>
                                        </div>
                                        <div>
                                            <RiBookmarkFill className='text-blue-600' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
};
