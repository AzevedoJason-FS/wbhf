import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { config } from "../constants";
import axios from "axios";
import { Link } from "react-router-dom";
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
      const { status } = data;
      return !status ? (removeCookie("token"), navigate("/login")) : <></>;
    };
    verifyCookie();

    axios.get(url).then((response) => {
      setPosts(response.data);
    });
  }, [cookies, navigate, removeCookie, url]);

  const deleteArticle = (id) => {
    try {
      const shouldRemove = window.confirm("are you sure you want to delete this article?");
      if (shouldRemove) {
        axios.delete("/api/delete-article/" + id).then((res) => {
            if (res.status === 200) {
                toast.success("Article Successfuly Deleted", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
              } else Promise.reject();
        });
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="form-container">
          <Link to={`/dashboard`} style={{ color: "#0083bf", marginBottom: "2rem" }}>
            Return to dashboard
          </Link>
          <h2 className="title" style={{ marginBottom: "2rem" }}>
            Delete Article
          </h2>
          {posts && posts.length > 0 ? (
            <>
              {posts &&
                posts.map((post) => {
                  return (
                    <article key={post._id} style={{ width: "100%" }}>
                      <img src={post.img} alt="tennis" className="article-img" />
                      <div className="article-body">
                        <p className="location-box">{post.location}</p>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <p>{new Date(post.created_at).toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric" })}</p>
                      </div>
                      <button onClick={() => deleteArticle(post._id)}>
                        <img src="/icons/delete.svg" alt="Delete Icon" style={{ width: "32px" }} />
                      </button>
                    </article>
                  );
                })}
            </>
          ) : (
            <p>nothing</p>
          )}
        </div>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      </div>
    </>
  );
};

export default DashboardDelete;
