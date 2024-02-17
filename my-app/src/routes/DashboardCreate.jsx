import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";

const DashboardCreate = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post("/api", { withCredentials: true });
      const { status, user } = data;
      setName(user);
      return !status ? (removeCookie("token"), navigate("/login")) : <></>;
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <div>
      <p>create</p>
    </div>
  );
};

export default DashboardCreate;
