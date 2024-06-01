import React from "react";

const SearchBox = (props) => {
  return (
    <div className="w-full max-w-sm my-4">
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Hunting for great films? Start typing..."
      ></input>
    </div>
  );
};

export default SearchBox;
