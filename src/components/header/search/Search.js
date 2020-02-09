import React, { useState, useEffect } from "react";
import getSuggestions from "./samplelist";
import "../../../styles/header/Search.scss";
import SearchIcon from '@material-ui/icons/Search';
import SearchList from "./SearchList";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log("Hi");
    // API CALL
    if (query) {
      setTimeout(() => {
        setSuggestions(getSuggestions(query));
      }, 3000);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="search">
      <form onSubmit={() => handleSubmit}>
      <SearchIcon/>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query && setQuery(query)}
          onBlur={() => {
            setQuery(query);
            setSuggestions([]);
          }}
        />
      </form>
      {suggestions.length > 0 && <SearchList suggestions={suggestions} />}
    </div>
  );
};

export default Search;
