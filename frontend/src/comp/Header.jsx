import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="bg-white border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <Link to="">
            <img
              src="https://www.svgrepo.com/show/62033/movie.svg"
              class="h-8 size-13"
            />
          </Link>
          <span class="self-center text-2xl font-semibold whitespace-nowrap">
            <Link to="">Movie Mania</Link>
          </span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/signup">
            <button
              type="button"
              class="bg-indigo-600 py-2 px-4 text-sm  rounded-lg border border-green hover:bg-indigo-700 shadow-2xl text-white"
            >
              Sign Up
            </button>
          </Link>
          <a className=" px-4 py-2 text-center hover:text-indigo-700">
            <span>
              <Link to="/signin">Sign in</Link>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
