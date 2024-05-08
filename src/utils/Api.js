import { BASE_URL } from "./Constant";

const handleServerRes = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getPokemon = (pokemon) => {
  return fetch(`${BASE_URL}pokemon/${pokemon}`).then((res) =>
    handleServerRes(res)
  );
};
export default getPokemon;
