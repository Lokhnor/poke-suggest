import React from "react";

function SearchBar({ setInput, input }) {
  function handleText(event) {
    setInput(event.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handleText} value={input}></input>
      <button>I Choose You!</button>
    </div>
  );
}

export default SearchBar;
