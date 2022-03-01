import React, { Dispatch } from "react";

interface SearchProps {
  handleSubmitSearch(): void;
  setInputSearch: Dispatch<string>;
}

const Search = ({
  handleSubmitSearch,
  setInputSearch,
}: SearchProps): JSX.Element => {
  return (
    <div className="search">
      <form onSubmit={handleSubmitSearch}>
        <input
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Search;
