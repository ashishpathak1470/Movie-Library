import React, { useState } from "react";

const AddFavourite = () => {
  return (
    <>
      <span className="text-red-500 cursor-pointer transition-transform transform ${clicked ? hover:scale-110">
        Add to Favorites ❤️
      </span>
    </>
  );
};

export default AddFavourite;
