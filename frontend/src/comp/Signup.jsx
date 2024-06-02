import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.elements.email?.value;
    const password = e.target.elements.password?.value;

    try {
      const registerResponse = await axios.post(
        "https://movie-library-delta-lime.vercel.app/register",
        { email, password }
      );
      setMessage(registerResponse.data);
      const loginResponse = await axios.post("https://movie-library-delta-lime.vercel.app/login", {
        email,
        password,
      });
      localStorage.setItem("token", loginResponse.data.token);
      navigate("/app");
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.response && error.response.status === 409) {
        setMessage("User already exists. Please log in.");
      } else {
        setMessage("An error occurred during registration");
      }
    }
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-2xl py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center shadow-2xl">
          Sign Up to your account
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 shadow-2xl"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 shadow-2xl"
              id="password"
              placeholder="Your Password"
              required
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button className="bg-indigo-600 py-2 px-4 text-sm rounded-lg border border-green hover:bg-indigo-700 shadow-2xl text-white hover:scale-95">
              Sign Up
            </button>
          </div>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
