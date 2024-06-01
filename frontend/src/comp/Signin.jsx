import React from "react";
import { Link } from "react-router-dom";
function Signin() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-2xl py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center shadow-2xl">
          Sign In to your account
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Username</label>
            <input
              type="email"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 shadow-2xl`}
              id="email"
              placeholder="Enter Your Username"
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 shadow-2xl`}
              id="password"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-indigo-600 py-2 px-4 text-sm  rounded-lg border border-green hover:bg-indigo-700 shadow-2xl text-white`}
            >
              <Link to="/app">Sign In</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
