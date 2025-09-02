import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { id, title, image, price } = data;
  return (
    <div className="group relative card" key={id}>
      <img
        src={image}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price: ${price}</p>
        <Link to={`/shopdetail/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
