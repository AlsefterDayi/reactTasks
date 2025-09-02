import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data } ) => {
  const { id, name, img, year, vol, run, price } = data;
  return (
    <div
      key={id}
      className="card"
      style={{ width: "18rem", margin: "10px" }}
    >
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Year: {year} <br />
          Engine: {vol} L <br />
          Run: {run} km <br />
          Price: ${price}
        </p>
        <Link to={`/shopdetail/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
