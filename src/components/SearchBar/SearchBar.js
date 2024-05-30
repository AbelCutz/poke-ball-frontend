import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearchSubmit }) => {
  const [pokeId, setPokeId] = useState("");

  const handleInputChange = (e) => {
    setPokeId(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!pokeId) {
      alert("Please enter a Pokemon Name or ID.");
      return;
    }
    handleSearchSubmit(pokeId);
    setPokeId("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-bar__input"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter Name or ID"
        value={pokeId}
        required
      ></input>
      <button className="search-bar__btn" type="submit">
        Search!
      </button>
    </form>
  );
};

export default SearchBar;
