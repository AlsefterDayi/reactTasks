import React from "react";
import cars from "../data/cars";
import Card from "../components/Card";

const Shop = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cars.map((car) => (
        <Card data={car} />
      ))}
    </div>
  );
};

export default Shop;
