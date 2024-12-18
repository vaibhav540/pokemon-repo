import React, { useState } from "react";

const usePokemonNavigator = (pokemonList) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < pokemonList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const selectPokemon = (index) => {
    setCurrentIndex(index);
  };

  return {
    currentPokemon: pokemonList[currentIndex],
    currentIndex,
    next,
    previous,
    selectPokemon,
    isFirst: currentIndex === 0,
    isLast: currentIndex === pokemonList.length - 1,
  };
};
const PokemonNavigator = ({ pokemonList }) => {
  const {
    currentPokemon,
    currentIndex,
    next,
    previous,
    selectPokemon,
    isFirst,
    isLast,
  } = usePokemonNavigator(pokemonList);

  const handleDropdownChange = (event) => {
    const index = parseInt(event.target.value, 10);
    selectPokemon(index);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Pokemon Navigator</h1>
      <div>
        <label>
          Select Pokemon:
          <select
            value={currentIndex}
            onChange={handleDropdownChange}
            style={{ margin: "0 10px" }}
          >
            {pokemonList.map((pokemon, index) => (
              <option key={index} value={index}>
                {pokemon.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div style={{ margin: "20px" }}>
        <button onClick={previous} disabled={isFirst}>
          Previous
        </button>
        <button onClick={next} disabled={isLast} style={{ marginLeft: "10px" }}>
          Next
        </button>
      </div>
      <div
        style={{
          margin: "20px auto",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <img
        
          src={currentPokemon.image}
          alt={currentPokemon.name}
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h2>{currentPokemon.name}</h2>
        <p>{currentPokemon.description}</p>
      </div>
    </div>
  );
};
export default PokemonNavigator



