import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { config } from "../constants";

const Login = () => {
  const navigate = useNavigate();
  const url = config.url.API_URL;
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
  });
  const { name, password } = inputValue;
  // const { error, setError } = useState('')

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.interceptors.response.use(
        response => response,
        error => {
          const status = error.response ? error.response.status : null;
          
          if (status === 401) {
            // Handle unauthorized access
            console.log("Unauthorized access");
          } else if (status === 404) {
            // Handle not found errors
            console.log("Post not found");
          } else {
            // Handle other errors
            console.error("An error occurred:", error.response.data);
          }
          return Promise.reject(error);
        }
      );

      await axios.post(
        url + "/api/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      ).then((res) => {
        if(res.data === true) navigate('/dashboard')
      })
    .catch((err) => {
      toast.error(err.response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
    } catch (err) {
      toast.error(err.response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    setInputValue({
      ...inputValue,
      name: "",
      password: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="name" name="name" value={name} placeholder="Enter your name" onChange={handleOnChange} required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} placeholder="Enter your password" onChange={handleOnChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
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
  );
};

export default Login;
