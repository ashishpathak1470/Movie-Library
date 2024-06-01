import React from "react";

function Footer() {
  return (
    <footer class="bg-white rounded-lg m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="flex items-center justify-between text-center">
          <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
              src="https://www.svgrepo.com/show/62033/movie.svg"
              class="h-8 size-13"
            />
            <span class="self-center text-2xl whitespace-nowrap text-center">
              Movie Mania made by Ashish Pathak
            </span>
          </a>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 text-center ">
          © 2024 Movie Mania . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
