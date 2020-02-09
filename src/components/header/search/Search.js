import React, { useState, useEffect } from "react";
import getSuggestions from "./samplelist";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  useEffect(() => {
    // API CALL
    if (query) {
      setTimeout(() => {
        setSuggestions(getSuggestions(query));
        console.log(suggestions);
      }, 3000);
    }
  }, [query]);

  return (
    <div className="search">
      <form onSubmit={() => handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
