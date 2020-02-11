import React from "react";

const SearchItem = ({ suggestion }) => {
  const { title, id, name } = suggestion;
  return (
    <>
      <li style={{ listStyle: "none" }}>
        <a href={`/details/${id}`} className="search-item">
          {title || name}
        </a>
      </li>
    </>
  );
};

export default SearchItem;
