import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  useEffect(() => {
    setSearchList([]);
    console.log(query);
  }, [query]);

  return (
    <div className="search">
      <form onSubmit={() => handleSubmit}>
        <input
          className="search-button"
          type="button"
          value="Go"
          disabled={true}
        />
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
