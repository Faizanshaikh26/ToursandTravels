import React, { useState } from "react";
import toast from "react-hot-toast";
import "../Styles/Login.css";
import { server } from "../config";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.password) {
      toast.error("All fields are required ");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${server}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responsedata = await response.json();

      if (responsedata.success) {
        localStorage.setItem("travel-token", responsedata.token);
        window.location.replace("/");
        toast.success(`Welcome to travel, ${formData.name}!`);
      } else {
        toast.error(responsedata.error);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.email || !formData.password) {
      toast.error("All fields are required ");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${server}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const responsedata = await response.json();

      if (responsedata.success) {
        localStorage.setItem("travel-token", responsedata.token);
        window.location.replace("/");
        toast.success(`Welcome back, ${formData.name}!`);
      } else {
        toast.error(responsedata.error);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSignup}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              
            />
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              placeholder="Name"
              
            />
            <input
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              
            />
            <button disabled={loading} type="submit">
              {loading ? (
                <ClipLoader color={"#ffffff"} loading={true} css={override} size={25} />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              
            />
            <input
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              
            />
            <button disabled={loading} type="submit">
              {loading ? (
                <ClipLoader color={"#ffffff"} loading={true} css={override} size={25} />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

const override = css`
  display: inline-block;
  vertical-align: middle;
`;
