import React, { useEffect } from "react";
import SearchItem from "./SearchItem";

const SearchList = ({ results }) => {
  return (
    <div className="search-suggestions">
      {!results.length
        ? console.log("respond")
        : // <h1>No Results Found</h1>
          results.map(result => {
            return <SearchItem key={result.id} result={result} />;
          })}
    </div>
  );
};

export default SearchList;
