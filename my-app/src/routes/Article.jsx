import React from "react";
import { config } from "../constants";
import axios from "axios";
import { useParams } from "react-router-dom";
import Weather from "../components/Weather";
import Programming from "../components/Programming";
import Header from "../components/Header";
import SocialShare from "../components/SocialShare";
import NewsWidget from "../components/NewsWidget";

const Article = () => {
  // Get ID from URL
  const params = useParams();
  const baseURL = `${config.url.API_URL_ARTICLE + params.slug}`;
  const [article, setArticle] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data[0]);
        setArticle(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.slug, baseURL]);

  return (
    <>
      <div className="container">
        <Header />
        <div className="main">
          <div style={{ width: "68%" }}>
            <div className="sponsor-block">
              <img src="/global-images/banner.jpeg" alt="bank" />
            </div>
            <div className="news-article">
              <h2 className="title" style={{ marginBottom: "2rem" }}>
                {article.title}
              </h2>
              <img src={article.img} />
              <p style={{ color: "#a7a7a7" }}>
                {new Date(article.created_at).toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <p>{article.body}</p>
              <div className="social-share-container">
              <SocialShare url={`https://www.facebook.com/sharer/sharer.php?u=${baseURL}`} img="/icons/facebook.svg" />
              <SocialShare url={`https://twitter.com/intent/tweet?url=&text=&via=${baseURL}`} img="/icons/twitter.svg" />
              <SocialShare url={`https://www.linkedin.com/shareArticle?url=&title=${baseURL}`} img="/icons/linkedin.svg" />
              </div>
            </div>
          </div>
          <div className="right-column">
            <Weather />
            <h2 className="title" style={{ marginTop: "1rem" }}>
              Other Articles
            </h2>
            <NewsWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
