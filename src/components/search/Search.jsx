import React, { useState } from "react";
import "./search.scss";

const Search = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div className="search-container">
      <div className="search">
        <input
          placeholder="Find your favourite Pokemon..."
          onChange={onChange}
        />
      </div>
      <div className="search-btn">
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default Search;
