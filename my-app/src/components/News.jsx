import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router'
import axios from "axios";
import { config } from "../constants";

const News = () => {
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const url = config.url.API_URL;

  const fetchPosts = async (page) => {
    try {
      const response = await axios.get(`${url}/api/posts?page=${page}&pageSize=5`);
      const { posts, totalPages } = response.data;
      setPosts(posts);
      setTotalPages(totalPages);
      console.log(response.data)
      console.log(posts)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage- 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <div>
      <div>
      <h2 className="title" style={{ margin: '0 0 1rem 0'}}>
        Latest Local News
      </h2>
      </div>
      <div className="news-block">
        {posts && posts.length > 0 ? (
          <>
            {posts &&
              posts.map((post) => {
                return (
                  <Link to={`/article/${post.slug}`} className="article-link" key={post._id}>
                    <article>
                      <img src={post.img} alt="tennis" className="article-img" />
                      <div className="article-body">
                        <p className="location-box">{post.location}</p>
                        <h2 style={{ textTransform: "uppercase" }}>{post.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: removeTags(post.body) }} />
                        <p>{new Date(post.created_at).toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric" })}</p>
                      </div>
                    </article>
                  </Link>
                );
              })}
          </>
        ) : (
          <p>nothing</p>
        )}
         {/* Pagination controls */}
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next Page
      </button>
      </div>
    </div>
  );
};

export default News;
