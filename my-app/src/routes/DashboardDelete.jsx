import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { config } from "../constants";
import axios from "axios";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";

const DashboardDelete = () => {
  const [posts, setPosts] = useState();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const url = config.url.API_URL_POSTS;

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post("/api", { withCredentials: true });
      const { status} = data;
      return !status ? (removeCookie("token"), navigate("/login")) : <></>;
    };
    verifyCookie();

    axios.get(url).then((response) => {
      setPosts(response.data);
    });
  }, [cookies, navigate, removeCookie, url]);

  const deleteArticle = (id) => {
    try {
      axios.delete("/api/delete-article/" + id).then((res) => {
        if (res.status === 200) {
          alert("successfully deleted");
          navigate("/dashboard/delete-article");
        }
      });
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="container">
        <Header />
        {posts && posts.length > 0 ? (
          <>
            {posts &&
              posts.map((post) => {
                return (
                  <article key={post._id}>
                    <img src={post.img} alt="tennis" />
                    <div className="article-body">
                      <p className="location-box">{post.location}</p>
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                      <p>{new Date(post.created_at).toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric" })}</p>
                    </div>
                    <button onClick={() => deleteArticle(post._id)}>Delete</button>
                  </article>
                );
              })}
          </>
        ) : (
          <p>nothing</p>
        )}
      </div>
    </>
  );
};

export default DashboardDelete;
