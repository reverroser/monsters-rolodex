import React from "react";

import "./Card.css";

const Card = props => (
  <div className="card">
    <img
      alt="monster"
      src={`https://robohash.org/${props.item.id}?set=set2&size=180x180`}
    />
    <h1>{props.item.name}</h1>
    <p>{props.item.email}</p>
  </div>
);

export default Card;
