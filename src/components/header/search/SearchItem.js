import React from "react";

const SearchItem = props => {
  const { title, id } = props;

  return (
    <div>
      <a href={`/details/${id}`} className="search-item">
        <div className="image-container">
          <p>{title}</p>
        </div>
      </a>
    </div>
  );
};

export default SearchItem;
