import React, { useState } from "react";
import "../Styles/Login.css";
import { server } from "../config";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // Add state to handle form switch

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Getting you signed up...");

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
        toast.success(`Welcome to travel, ${formData.name}!`, { id: toastId });
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
    const toastId = toast.loading("Logging you in...");

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
        toast.success(`Welcome back, ${formData.name}!`, { id: toastId });
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

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({ name: "", email: "", password: "" }); // Clear form data on toggle
  };

  return (
    <div className="login-container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className={isSignup ? "signup" : "signup hidden"}>
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
              required
            />
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Signing up..." : "Sign up"}
            </button>
            <p onClick={toggleForm} className="toggle-form">
              Already have an account? Login
            </p>
          </form>
        </div>

        <div className={isSignup ? "login hidden" : "login"}>
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
              required
            />
            <input
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <p onClick={toggleForm} className="toggle-form">
              Don't have an account? Sign up
            </p>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
