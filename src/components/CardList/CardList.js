import React from "react";

import Card from "../Card/Card";

import "./CardList.css";

const CardList = props => (
  <div className="card-list">
    {props.list.map((item, i) => (
      <Card key={i} item={item} />
    ))}
  </div>
);

export default CardList;
