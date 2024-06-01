import React from "react";

const MovieAlertModal = ({ movie, onClose }) => {
  return (
    <div className="modal">
        <div className="text-white text-center font-bold">INFORMATION !!</div>
      <div className="modal-content text-white">
        <h2 className="font-bold text-indigo-600">Movie Name: {movie.Title}</h2>
        <p className="font-bold text-indigo-600">Year of Release: {movie.Year}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MovieAlertModal;
