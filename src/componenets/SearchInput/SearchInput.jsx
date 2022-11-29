import React from "react";
import { useEmoji } from "../../context/EmojiContext";

function SearchEmoji() {
  const { filter, setFilter, setFilterLength, filterLength } = useEmoji();
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const lengthChange = (e) => {
    setFilterLength(e.target.value);
  };
  return (
    <div className="component-search-input">
      <div>
        <input
          value={filter}
          onChange={handleChange}
          placeholder="Search Emoji"
        />
        <select
          id="filterlength"
          defaultValue={filterLength}
          onChange={(e) => lengthChange(e)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}

export default SearchEmoji;
