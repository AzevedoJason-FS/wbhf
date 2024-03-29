import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router'
import axios from "axios";
import { config } from "../constants";

const NewsWidget = () => {
  const [posts, setPosts] = useState();
  const url = config.url.API_URL;

  useEffect(() => {
    const fetchPosts = async (page) => {
      try {
        const response = await axios.get(`${url}/api/posts?page=${page}&pageSize=4`);
        const { posts } = response.data;
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts(1)
  }, [url]);

  return (
    <div className="news-block-widget">
      {posts && posts.length > 0 ? (
<>
          {posts &&
            posts.slice(0, 6).map((post) => {
              return (
                <Link to={`/article/${post.slug}`} className="article-link-widget" key={post._id}>
                <div className="article-widget">
                  <div className="article-body">
                  <p className="location-box">{post.location}</p>
                  <h2 style={{textTransform: 'uppercase'}}>{post.title}</h2>
                  <p style={{color: '#6b6b6b'}}>{new Date(post.created_at).toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric" })}</p>
                  </div>
                </div>
                </Link>
              );
            })}
      </>
      ) : (
        <p>nothing</p>
      )}
      <Link to={`/`} className="nav-link" style={{color: '#0083bf', textDecoration: 'underline'}}>More</Link>
    </div>
  );
};

export default NewsWidget;
