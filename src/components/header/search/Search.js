import React, { useState, useEffect } from "react";
import "../../../styles/header/Search.scss";
import SearchIcon from "@material-ui/icons/Search";
import SearchList from "./SearchList";
import Axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [recentSuggestions, setRecentSuggestions] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  const searchResults = async query => {
    try {
      const response = await Axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/multi",
        headers: {
          accept: "application/json"
        },
        params: {
          api_key: "65f8943b44d045a719f281899f2568ec",
          query,
          page: 1
        }
      });

      const { results = [] } = response.data;

      setSuggestions(results);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    if (query) {
      searchResults(query);
    }

    // clear the effect done by previous effect call on every render.
    return () => setSuggestions([]);
  }, [query]); // when query changes, effect function will run

  return (
    <div className="search">
      <form onSubmit={() => handleSubmit}>
        <SearchIcon
          style={{
            position: "absolute",
            left: "7px",
            top: "29px"
          }}
        />
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setRecentSuggestions([]);
          }}
          onFocus={() => setSuggestions(recentSuggestions)}
          onBlur={() => {
            setRecentSuggestions([...suggestions]);
            setSuggestions([]);
          }}
        />
      </form>
      {suggestions.length > 0 && <SearchList suggestions={suggestions} />}
    </div>
  );
};

export default Search;
