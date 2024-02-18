import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
const _ = require("lodash");

const DashboardCreate = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [inputValue, setInputValue] = useState({
    location: "",
    title: "",
    body: "",
    slug: "",
    img: ""
  });
  const [file, setFile] = useState();
  const { location, title, body, img } = inputValue;
  const slug = _.kebabCase(title);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post("/api", { withCredentials: true });
      const { status, user } = data;
      return !status ? (removeCookie("token"), navigate("/login")) : <></>;
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/new-article",
        {
         location, title, body, slug, img
        },
        { withCredentials: true }
      ).then((res) => {
        console.log(res)

      })
    } catch (err) {
      console.log(err);
    }
    setInputValue({
      ...inputValue,
      location: "",
      title: "",
      body: "",
      slug: "",
      img: ""
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };


  function handleChangeFile(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="container">
      <Header />
      <div className="form-container">
      <h2 className="title">Create Article</h2>
      <form onSubmit={handleSubmit}>
      <div className="input-box">
          <label htmlFor="name" className="label-title">Location</label>
          <input type="location" name="location" value={location} placeholder="location where article takes place" onChange={handleOnChange} required/>
        </div>
        <div className="input-box" >
          <label htmlFor="title" className="label-title">Title</label>
          <input type="title" name="title" value={title} placeholder="article title" onChange={handleOnChange} required/>
        </div>
        <div className="input-box">
          <label htmlFor="body" className="label-title">Body</label>
          <textarea type="body" name="body" value={body} placeholder="article body" onChange={handleOnChange} required rows="8"/>
        </div>
        <div className="input-box">
        <label htmlFor="img" className="label-title">Image</label>
          <input type="file" onChange={handleChangeFile} />
          <img src={file} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default DashboardCreate;