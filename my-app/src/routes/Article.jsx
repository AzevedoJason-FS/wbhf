import { React, useState, useEffect } from "react";
import { config } from "../constants";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SocialShare from "../components/SocialShare";
import NewsWidget from "../components/NewsWidget";
import { Loader } from "../components/Loader";

const Article = () => {
  const [spinner, setSpinner] = useState(false);
  // Get ID from URL
  const params = useParams();
  const baseURL = `${config.url.API_URL + "/api/article/" + params.slug}`;
  const [article, setArticle] = useState([]);

  useEffect(() => {
    setSpinner(true);
    axios
      .get(baseURL)
      .then((res) => {
        setArticle(res.data[0]);
        setSpinner(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.slug, baseURL]);

  return (
    <>
      {spinner ? (
        <Loader />
      ) : article  ? (
        <div className="container">
          <Header />
          <div className="main">
            <div style={{ width: "68%", marginTop: "4rem" }}>
              <div className="sponsor-block">
                <img src="/global-images/banner.jpeg" alt="bank" />
              </div>
              <div className="news-article">
                <Link to={`/`} style={{ color: "#0083bf", marginBottom: "10px" }}>
                  Return Home
                </Link>
                <h2 className="title" style={{ margin: "1rem 0 1rem 0", fontWeight: "800", fontSize: "32px" }}>
                  {article.title}
                </h2>
                <p style={{ color: "#a7a7a7" }}>
                  Published{" "}
                  {new Date(article.created_at).toLocaleDateString("en-us", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                </p>
                <img src={article.img} alt={article.title} />
                <p dangerouslySetInnerHTML={{ __html: article.body }} />
                <div className="social-share-container">
                  <SocialShare url={`https://www.facebook.com/sharer/sharer.php?u=${baseURL}`} img="/icons/facebook.svg" />
                  <SocialShare url={`https://twitter.com/intent/tweet?url=&text=&via=${baseURL}`} img="/icons/twitter.svg" />
                  <SocialShare url={`https://www.linkedin.com/shareArticle?url=&title=${baseURL}`} img="/icons/linkedin.svg" />
                </div>
              </div>
            </div>
            <div className="right-column">
              <div style={{ position: "sticky", top: "1rem", paddingLeft: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    paddingLeft: "20px",
                    paddingBottom: "10px",
                    borderBottom: "1px solid #e4e4e4",
                  }}>
                  <span className="dot"></span>
                  <h2 className="title">Other Articles</h2>
                </div>
                <NewsWidget />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No article with this title could be found </p>
      )}
    </>
  );
};

export default Article;
