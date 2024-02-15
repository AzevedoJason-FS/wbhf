import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router'
import axios from "axios";
import { config } from "../constants";

const NewsWidget = () => {
  const [posts, setPosts] = useState();
  const url = config.url.API_URL_POSTS;

  useEffect(() => {
    axios.get(url).then((response) => {
      setPosts(response.data);
    });
  }, [url]);

  return (
    <div className="news-block-widget">
      {posts && posts.length > 0 ? (
<>
          {posts &&
            posts.map((post) => {
              return (
                <Link to={`/article/${post.slug}`} className="article-link">
                <article className="article-widget">
                  <div className="article-body">
                  <p className="location-box">{post.location}</p>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <p style={{color: '#6b6b6b'}}>{new Date(post.created_at).toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric" })}</p>
                  </div>
                </article>
                </Link>
              );
            })}
      </>
      ) : (
        <p>nothing</p>
      )}
    </div>
  );
};

export default NewsWidget;
