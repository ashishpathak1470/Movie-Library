// App.js
import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";
import MovieList from "./comp/MovieList";
import MovieListHeading from "./comp/MovieListHeading";
import SearchBox from "./comp/SearchBox";
import AddFavourites from "./comp/AddFavourite";
import RemoveFavourites from "./comp/RemoveFavourites";
import MoviePopup from "./comp/MoviePopup"; 
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [message, setMessage] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const defaultSearchTerms = [
    "batman",
    "superman",
    "spiderman",
    "avengers",
    "star wars",
  ];
  

  const getMovieRequest = async (searchValue) => {
    try {
      const response = await axiosInstance.get(`/movies?s=${searchValue}`);
      const responseJson = response.data;
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (searchValue) {
      getMovieRequest(searchValue);
    } else {
      const randomSearchTerm =
        defaultSearchTerms[
          Math.floor(Math.random() * defaultSearchTerms.length)
        ];
      getMovieRequest(randomSearchTerm);
    }
  }, [searchValue]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await axiosInstance.get("/favourites");
        setFavourites(response.data);
      } catch (error) {
        console.error("Error fetching favourites:", error);
      }
    };

    fetchFavourites();
  }, []); 

  const addFavouriteMovie = async (movie) => {
    try {
      setSelectedMovie(movie);
      const response = await axiosInstance.post("/favourites", { movie });
      if (response.status === 201) {
        const newFavourites = [...favourites, movie];
        setFavourites(newFavourites);
        setMessage(`${movie.Title} added to favourites!`);
        setTimeout(() => setMessage(""), 3000);

        document
          .getElementById("favourites-section")
          .scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error adding favourite:", error);
    }
  };

  const removeFavouriteMovie = async (movie) => {
    try {
      const response = await axiosInstance.delete("/favourites", {
        data: { movieId: movie.imdbID },
      });
      if (response.status === 200) {
        const newFavourites = favourites.filter(
          (favMovie) => favMovie.imdbID !== movie.imdbID
        );
        setFavourites(newFavourites);
        setMessage(`${movie.Title} removed from favourites!`);
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (error) {
      console.error("Error removing favourite:", error);
    }
  };

  const scrollToFavoriteSection = () => {
    document
      .getElementById("favourites-section")
      .scrollIntoView({ behavior: "smooth" });
    setShowScrollButton(false); 
  };

  return (
    <div className="app-container py-16">
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col items-center">
          <MovieListHeading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <button
            className="scroll-to-favourites-button bg-indigo-600 py-2 px-4 text-sm rounded-lg border border-green hover:bg-indigo-700 shadow-2xl text-white"
            onClick={scrollToFavoriteSection}
          >
            Go to Favorites
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center">
          <MovieList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourites}
          />
        </div>
        <div
          className="flex flex-col items-center mt-8"
          id="favourites-section"
        >
          <MovieListHeading heading="Favorites" />
        </div>
        <div className="flex flex-wrap justify-center">
          <MovieList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
      {message && <div className="popup-message">{message}</div>}
      {selectedMovie && (
        <MoviePopup
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default App;

