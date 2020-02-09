import React from "react";

const SearchItem = ({ suggestion }) => {
  const { title, id } = suggestion;
  return (
    <>
      <li style={{ listStyle: "none" }}>
        <a href={`/details/${id}`} className="search-item">
          {title}
        </a>
      </li>
    </>
  );
};

export default SearchItem;
