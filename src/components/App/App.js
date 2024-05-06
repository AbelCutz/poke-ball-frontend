import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { IsLoadingContext } from "../../contexts/IsLoadingContext";
import { CurrentPokeBallContext } from "../../contexts/CurrentPokeBallContext";
import { useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import getPokemon from "../../utils/Api";

function App() {
  const [poke, setPoke] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleGetPokemon = (value) => {
    setLoading(true);
    navigate(`/card/${value}`);
    getPokemon(value)
      .then((res) => {
        setPoke(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        navigate("/error404");
      });
  };

  const handleMainPage = () => {
    navigate("/");
  };

  return (
    <IsLoadingContext.Provider value={{ loading, setLoading }}>
      <CurrentPokeBallContext.Provider value={{ poke, setPoke }}>
        <div className="App">
          <Header
            handleGetPokemon={handleGetPokemon}
            handleMainPage={handleMainPage}
          />
          <Routes>
            <Route path="*" element={<Main />} />
            <Route
              path="/card/:id"
              element={<Card handleGetPokemon={handleGetPokemon} />}
            />
            <Route path="/error404" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </CurrentPokeBallContext.Provider>
    </IsLoadingContext.Provider>
  );
}

export default App;
