import React, { useEffect } from "react";

function AutoComplete({ input, setPoke, poke }) {
  useEffect(() => {
    fetch(`http://localhost:5001/pokemon?name=${input}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPoke(data);
      });
  }, [input]);
  console.log(poke);
  return <p></p>;
}

export default AutoComplete;
