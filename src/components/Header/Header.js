import pokemonIcon from "../../images/pokemonIcon.svg";
import "./Header.css";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ handleGetPokemon, handleMainPage }) => {
  const handleSearchSubmit = (value) => {
    const id = value.toLowerCase();
    handleGetPokemon(id);
  };

  const handleRandom = () => {
    const randomBall = Math.random();
    const randomNum = Math.floor(randomBall * 1009) + 1;
    handleGetPokemon(randomNum);
  };

  return (
    <header className="header">
      <img
        className="header__logo"
        src={pokemonIcon}
        alt="pokemon logo"
        onClick={handleMainPage}
      />
      <div className="header__container">
        <Nav handleRandom={handleRandom} handleMainPage={handleMainPage} />
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </div>
    </header>
  );
};

export default Header;
