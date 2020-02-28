import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import AutoComplete from "./components/AutoComplete/AutoComplete";
import PokemonDisplay from "./components/PokemonDisplay/PokemonDisplay";

function App() {
  const [input, setInput] = useState("");
  const [poke, setPoke] = useState([]);

  return (
    <div className="App">
      <SearchBar setInput={setInput} input={input} />
      <AutoComplete input={input} setPoke={setPoke} poke={poke} />
      <PokemonDisplay
        pokeName={poke.name}
        pokeId={poke.id}
        pokeImg={poke.img_url}
      />
    </div>
  );
}

export default App;
