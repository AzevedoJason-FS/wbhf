import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router'
import axios from "axios";
import { config } from "../constants";

const NewsWidget = () => {
  const [posts, setPosts] = useState();
  const url = config.url.API_URL;

  useEffect(() => {
    axios.get(url + '/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, [url]);

  function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
 
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
}

  return (
    <div className="news-block-widget">
      {posts && posts.length > 0 ? (
<>
          {posts &&
            posts.slice(0, 6).map((post) => {
              return (
                <Link to={`/article/${post.slug}`} className="article-link" key={post.slug}>
                <article className="article-widget">
                  <div className="article-body">
                  <p className="location-box">{post.location}</p>
                  <h2>{post.title}</h2>
                  <p dangerouslySetInnerHTML={{__html: removeTags(post.body)}} />
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
