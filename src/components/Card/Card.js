import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrentPokeBallContext } from "../../contexts/CurrentPokeBallContext";
import { IsLoadingContext } from "../../contexts/IsLoadingContext";
import Preloader from "../Preloader/Preloader";
import leftPokemon from "../../images/leftPokemon.svg";
import rightPokemon from "../../images/rightPokemon.svg";

import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import "./Card.css";

const Card = ({ handleGetPokemon }) => {
  const { loading } = useContext(IsLoadingContext);
  const { poke } = useContext(CurrentPokeBallContext);
  const [isFlipped, setIsFlipped] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    handleGetPokemon(id);
  }, []);

  const goToPrevious = () => {
    handleGetPokemon(poke.id - 1);
  };

  const goToNext = () => {
    handleGetPokemon(poke.id + 1);
  };

  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card">
      <img
        className="card__right-image"
        src={rightPokemon}
        atl={`${rightPokemon} image`}
      ></img>
      <img
        className="card__left-image"
        src={leftPokemon}
        atl={`${leftPokemon} image`}
      ></img>
      {loading ? (
        <Preloader />
      ) : (
        <div
          className={`card__block ${isFlipped ? "flipped" : ""}`}
          onClick={handleCardClick}
        >
          <div className="card__face card__face--front">
            <img
              className="card__front-image"
              src={poke.sprites.front_default}
              alt={poke.name}
            />
          </div>
          <div className="card__face card__face--back">
            <div className="card__container">
              <div className="card__info">
                <img
                  className="card__image"
                  src={poke.sprites.front_default}
                  alt={poke.name}
                />
                <h1 className="card__title">
                  {capitalizeWord(poke.name)} #{poke.id}
                </h1>
              </div>
              <div className="card__poke-weight">
                <p>H: {poke.height} decimeters</p>
                <p>W: {poke.weight} hectograms</p>
              </div>
              <div className="card__abilities">
                <h2 className="card__abilities-title">Abilities:</h2>
                <ul className="card__abilities-list">
                  {poke.stats.map((stat) => (
                    <li key={stat.stat.name}>
                      <strong>{capitalizeWord(stat.stat.name)}: </strong>
                      {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card__buttons">
                <button className="card__button" onClick={goToPrevious}>
                  <label>#{poke.id - 1}</label>
                  <IoMdArrowDropleftCircle
                    className="pagination__btn"
                    alt="previous card"
                  />
                </button>
                <button className="card__button" onClick={goToNext}>
                  <label>#{poke.id + 1}</label>
                  <IoMdArrowDroprightCircle
                    className="pagination__btn"
                    alt="next card"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
