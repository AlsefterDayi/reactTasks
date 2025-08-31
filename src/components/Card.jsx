import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    console.log(data),
    <div
      className="card"
      style={{ width: "18rem", margin: "10px" }}
      key={data.id}
    >
      <img src={data.img} className="card-img-top" alt={data.name} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">
          Year: {data.year} <br />
          Engine: {data.vol} L <br />
          Run: {data.run} km <br />
          Price: ${data.price}
        </p>
        <Link to={`/shopdetail/${data.id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
