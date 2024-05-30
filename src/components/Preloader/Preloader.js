import { CgPokemon } from "react-icons/cg";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <CgPokemon className="preloader__loading" />
    </div>
  );
};

export default Preloader;
