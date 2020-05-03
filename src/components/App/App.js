import React, { useState, useEffect } from "react";

import CardList from "../CardList/CardList";
import SearchBox from "../SearchBox/SearchBox";

import "./App.css";

const App = () => {
  const [error, setError] = useState();
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMonsters = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      res = await res.json();
      setMonsters(res);
      setFilteredMonsters(res);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      // filters the results according to what is been written in the search input
      setFilteredMonsters(
        monsters.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredMonsters(monsters);
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  useEffect(() => {
    fetchMonsters();
  }, []);

  if (error) {
    return <div className="app">{error.message}</div>;
  }

  return (
    <div className="app">
      <SearchBox onChange={setSearchTerm} />
      <CardList list={filteredMonsters} />
    </div>
  );
};

export default App;
