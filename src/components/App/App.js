import React, { useState, useEffect } from "react";

import CardList from "../CardList/CardList";

import "./App.css";

const App = () => {
  const [error, setError] = useState();
  const [monsters, setMonsters] = useState([]);

  const fetchMonsters = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      res = await res.json();
      setMonsters(res);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchMonsters();
  }, []);

  if (error) {
    return <div className="app">{error.message}</div>;
  }

  return (
    <div className="app">
      <CardList list={monsters} />
    </div>
  );
};

export default App;
