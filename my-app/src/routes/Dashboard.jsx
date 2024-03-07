import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { config } from "../constants";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Dashboard = () => {
  const navigate = useNavigate();
  const url = config.url.API_URL;
  const [cookies, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(url + "/api", {}, { withCredentials: true });
      const { status } = data;
      return !status ? (removeCookie("token"), navigate("/login")) : <></>;
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie, url]);
  const Logout = () => {
    removeCookie("token");
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="main">
          <div style={{ width: "68%" }}>
            <h2 className="title">Dashboard</h2>
            <div className="dashboard-links">
            <Link to={`/dashboard/create-article`} className="dashboard-link"><img src="/icons/create.svg" alt="Create Document" className="dashboard-icon"/>Create Article</Link>
            <Link to={`/dashboard/create-article`} className="dashboard-link"><img src="/icons/update.svg" alt="Update Document" className="dashboard-icon"/>Update Article</Link>
            <Link to={`/dashboard/delete-article`} className="dashboard-link"><img src="/icons/delete.svg" alt="Delete Document" className="dashboard-icon"/>Delete Article</Link>
            </div>
          </div>
          <div className="right-column">
            <button onClick={Logout} style={{padding: '20px 40px', width: '100%'}}>LOGOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
