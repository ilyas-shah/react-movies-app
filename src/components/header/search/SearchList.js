import React from "react";
import SearchItem from "./SearchItem";

const SearchList = ({ suggestions }) => {
  return (
    <div className="search-suggestions">
      <ol>
        {!suggestions.length
          ? console.log("No results")
          : suggestions.map(suggestion => {
              return <SearchItem key={suggestion.id} suggestion={suggestion} />;
            })}
      </ol>
    </div>
  );
};

export default SearchList;
