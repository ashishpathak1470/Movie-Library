import React from 'react';

function Home() {
  return (
    <section className="px-2 py-32 bg-white md:px-0 h-screen">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Useful Tools to</span>
                <span className="block text-indigo-600 xl:inline">Help You Build Movie Library.</span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
              Discover the best ways to organize, manage, and expand your movie collection with ease.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img
                src="https://plus.unsplash.com/premium_vector-1682303466154-2161da750ac7?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBsaWJyYXJ5JTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Tools"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
