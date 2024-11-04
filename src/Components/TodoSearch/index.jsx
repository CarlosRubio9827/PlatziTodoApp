import React from "react";
import "./index.css";
import { TodoContext } from "../../TodoContext";

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  return (
    <input
      placeholder={"Cortar cebolla"}
      type="text"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      className="searchInput"
    />
  );
}

export { TodoSearch };
