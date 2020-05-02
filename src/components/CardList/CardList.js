import React from "react";

import "./CardList.css";

const CardList = props => (
  <div className="card-list">
    {props.list.map(item => (
      <h1 key={item.id}>{item.name}</h1>
    ))}
  </div>
);

export default CardList;
