import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearchSubmit }) => {
  const [pokeId, setPokeId] = useState("");

  const handleInputChange = (e) => {
    setPokeId(e.target.value);
  };

  const handleSearch = (e) => {
    if (pokeId === "") {
      return;
    }
    e.preventDefault();
    handleSearchSubmit(pokeId);
    setPokeId("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-bar__input"
        onChange={handleInputChange}
        type="text"
        placeholder="Search"
        value={pokeId}
      ></input>
      <button className="search-bar__btn" type="submit">
        Search!
      </button>
    </form>
  );
};

export default SearchBar;
