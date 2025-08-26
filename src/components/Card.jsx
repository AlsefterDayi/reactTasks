import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img src={data.img} className="card-img-top" alt={data.name} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">
          Year: {data.year} <br />
          Engine: {data.vol} L <br />
          Run: {data.run} km <br />
          Price: ${data.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
