import React, { useState } from "react";
import "../App.css";

const SearchForm = ({ handleClick, title, setTitle }) => {
  return (
    <div className="search-container">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Movie name..."
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchForm;
