const baseUrl = "https://pokeapi.co/api/v2/";

const handleServerRes = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getPokemon = (pokemon) => {
  return fetch(`${baseUrl}pokemon/${pokemon}`).then((res) =>
    handleServerRes(res)
  );
};
export default getPokemon;
