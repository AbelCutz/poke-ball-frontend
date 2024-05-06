import "./Nav.css";
import { GiCardRandom } from "react-icons/gi";
import { GrHome } from "react-icons/gr";

const Nav = ({ handleRandom, handleMainPage }) => {
  return (
    <nav className="nav">
      <button onClick={handleMainPage} className="nav__link" type="button">
        <GrHome className="nav__btn" />
      </button>
      <button onClick={handleRandom} className="nav__link" type="button">
        <GiCardRandom className="nav__btn" />
      </button>
    </nav>
  );
};

export default Nav;
