import { React, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router'
import axios from "axios";
import { config } from "../constants";
import { Loader } from "./Loader";

const News = () => {
  const [spinner, setSpinner] = useState(false);
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const url = config.url.API_URL;

  const fetchDataMemoized = useCallback(
    async (page) => {
      setSpinner(true);
      await axios.get(`${url}/api/posts?page=${page}&pageSize=5`).then((result) => {
        setPosts(result.data.posts);
        setTotalPages(result.data.totalPages);
        setSpinner(false);
      });
    },
    [url]
  );

  useEffect(() => {
    fetchDataMemoized(currentPage);
  }, [fetchDataMemoized, currentPage]);

  // useEffect(() => {
  //   const fetchPosts = async (page) => {
  //     setSpinner(true);
  //     try {
  //       const response = await axios.get(`${url}/api/posts?page=${page}&pageSize=7`);
  //       const { posts, totalPages } = response.data;
  //       setPosts(posts);
  //       setTotalPages(totalPages);
  //       setSpinner(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchPosts(currentPage);
  // }, [currentPage, url]);

  const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="news-block">
        {spinner ? (
          <Loader />
        ) : posts && posts.length > 0 ? (
          <>
            <div style={{ paddingBottom: "40px", borderBottom: "1px solid #e4e4e4" }}>
              {posts &&
                currentPage === 1 &&
                posts.slice(0, 1).map((post) => {
                  return (
                    <Link to={`/article/${post.slug}`} className="article-link" key={post._id}>
                      <div className="single-article">
                        <div className="article-body">
                          <p className="location-box">{post.location}</p>
                          <h2 style={{ textTransform: "capitalize", fontSize: "36px", margin: "0", letterSpacing: "-0.96px", fontWeight: "800" }}>
                            {post.title}
                          </h2>
                          <p dangerouslySetInnerHTML={{ __html: removeTags(post.body) }} style={{ color: "#838383" }} />
                          <p style={{ color: "#c2c2c2" }}>
                            {new Date(post.created_at).toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric" })}
                          </p>
                        </div>
                        <img src={post.img} alt="tennis" className="single-article-img" />
                      </div>
                    </Link>
                  );
                })}
            </div>
            <div className="grid-article">
              {posts &&
                posts.slice(1).map((post) => {
                  return (
                    <Link to={`/article/${post.slug}`} className="article-link" key={post._id}>
                      <article>
                        <img src={post.img} alt="tennis" className="article-img" />
                        <div className="article-body">
                          <p className="location-box">{post.location}</p>
                          <h2 style={{ textTransform: "uppercase" }}>{post.title}</h2>
                          <p style={{ color: "#c2c2c2" }}>
                            {new Date(post.created_at).toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric" })}
                          </p>
                        </div>
                      </article>
                    </Link>
                  );
                })}
            </div>
            {/* Pagination controls */}
            <div className="page-btns-container">
              <button onClick={handlePrevPage} disabled={currentPage === 1} className="page-btn">
                <p>Prev Page</p>
              </button>
              <p>{currentPage}</p>
              <button onClick={handleNextPage} disabled={currentPage === totalPages} className="page-btn">
                <p>Next Page</p>
              </button>
            </div>
          </>
        ) : (
          <p>No Articles could be found</p>
        )}
      </div>
    </div>
  );
};

export default News;
