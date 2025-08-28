import React from "react";
import { useParams, Link } from "react-router-dom";
import cars from "../../data/cars";

const Shopdetail = () => {
  const { itemid } = useParams();
  const car = cars.find((c) => c.id === Number(itemid));

  if (!car) {
    return (
      <div className="container mt-5">
        <h2>Car not found!!! </h2>
        <Link to="/shop" className="btn btn-secondary mt-3">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>{car.name}</h1>
      <img src={car.img} alt={car.name} className="img-fluid mb-3" />
      <p>
        <strong>Price:</strong> ${car.price}
      </p>
      <p>
        <strong>Year:</strong> {car.year}
      </p>
      <p>
        <strong>Engine Volume:</strong> {car.vol} L
      </p>
      <p>
        <strong>Run:</strong> {car.run} km
      </p>
      <Link to="/shop" className="btn btn-secondary mt-3">
        Back to Shop
      </Link>
    </div>
  );
};

export default Shopdetail;
