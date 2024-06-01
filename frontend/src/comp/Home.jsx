import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear', // Ensure smooth linear transition
    rtl: true, // Right-to-left direction
    pauseOnHover: false, // Maintain smoothness on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const movieImages = [
    "https://imgs.search.brave.com/U3Rqoc1F75lZOfxxsRWKbehYiTZly5_ZzJYJjXsqwHI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NDY3MTYzL3Bob3Rv/L3RoZS1maXJzdC1h/dmVuZ2VyLW1vdmll/LXBvc3Rlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NUNt/c1hzcXhMbkhTdVBJ/NDJFWmRabFRJU3U5/aUw2U0pCRkotQVFE/QUdSRT0",
    "https://imgs.search.brave.com/INJZ9VGvX7DrCCrWon9v627IMp1Vl1NPxv7lMwdkFBE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9UVXdPRE01/TVRjdFpqY3pNaTAw/T1RrNExUZzNOV1V0/Tm1WaE1UQXpOVE5q/WWpjeVhrRXlYa0Zx/Y0dkZVFYVnlOalUw/T1RRME9UWUAuanBn",
    "https://imgs.search.brave.com/pMYxqtKhI1Si34MtukJzPoRVQxE1jCHfYlcUDjMx35A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpXWXpPR0V3/TlRndE5XVTNOUzAw/WlRRMExXSmtPRFV0/TW1WaE1qSXdNakEx/Wm1Rd1hrRXlYa0Zx/Y0dkZVFYVnlNamt3/T1RBeU1EVUAuanBn",
    "https://imgs.search.brave.com/qTS_EeNBrTfZKkyedUQ4WBtATFtJIRrfgMQlGWRDfMU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wZW5q/aS5jby93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wMS9VbnRp/dGxlZC1kZXNpZ24t/NTkuanBn",
    "https://imgs.search.brave.com/qYzvt8lbvwCiEFi5VuxaBHgpABF_4vUy0xeTxAfiRfs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wZW5q/aS5jby93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wOS9UaGVf/TWF0cml4LWljb25p/Yy1tb3ZpZS1wb3N0/ZXJzLmpwZw",
    "https://imgs.search.brave.com/cKpWf_Bpn7mpRGKNjvMJWk7ZIWlU59Z4SuIZJ6hYbm0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/YnV6emZlZWQuY29t/L2J1enpmZWVkLXN0/YXRpYy9zdGF0aWMv/MjAyMi0wNC80LzIw/L2Fzc2V0L2VlMzFj/MGZiYzFlNi9zdWIt/YnV6ei00MDYtMTY0/OTEwNDk5MC00Lmpw/Zw",
    "https://imgs.search.brave.com/kuOHgP7lZrCHVM-mjKzhGa_DadUj3JpPCp2m0b4BjE0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/am9ibG8uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEw/L2pva2VyLTItcG9z/dGVyLTQwMHg2MDAu/anBn",
    "https://cdn.mos.cms.futurecdn.net/5A85dLNZhwJUvSSHjHNsBk-1200-80.jpg.webp",
    "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2022/10/1-48.jpg",
    "https://imgs.search.brave.com/LqMIYVyT1U-V4tbCBo1V7-5Kp95_3bFGsi6UT1APdCU/rs:fit:500:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/LzE5OTQvcG9zdGVy/cy9mb3JyZXN0X2d1/bXAuanBn",
    "https://imgs.search.brave.com/KOz4c1Kz1AzZOaHE-Qrs6t0Sf65FVaJwivzs_aTdxss/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4L2F2/ZW5nZXJzZW5kZ2Ft/ZV9sb2JfY3JkXzA1/LmpwZw"
  ];

  return (
    <section className="px-2 py-24 bg-white md:px-0 h-auto pb-16"> {/* Adjusted padding */}
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
                className='shadow-2xl'
                src="https://plus.unsplash.com/premium_vector-1682303466154-2161da750ac7?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBsaWJyYXJ5JTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Movie"
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Featured Movies</h2>
          <Slider {...settings}>
            {movieImages.map((image, index) => (
              <div key={index} className="p-2">
                <div className="w-full h-96 overflow-hidden shadow-md rounded-md flex items-center justify-center"> {/* Fixed size container */}
                  <img src={image} alt={`Movie ${index + 1}`} className="object-cover w-full h-full" /> {/* Ensures image covers the container */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Home;
