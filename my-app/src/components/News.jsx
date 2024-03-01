import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router'
import axios from "axios";
import { config } from "../constants";

const News = () => {
  const [posts, setPosts] = useState();
  const url = config.url.API_URL;

  useEffect(() => {
    axios.get(url + "/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, [url]);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <div>
      <div style={{padding: '10px 20px', background: "#0083bf"}}>
      <h2 className="title" style={{ color: "white", margin: '0'}}>
        Latest Local News
      </h2>
      </div>
      <div className="news-block">
        {posts && posts.length > 0 ? (
          <>
            {posts &&
              posts.map((post) => {
                return (
                  <Link to={`/article/${post.slug}`} className="article-link" key={post.slug}>
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
      </div>
    </div>
  );
};

export default News;
