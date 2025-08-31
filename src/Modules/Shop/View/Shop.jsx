import React from "react";
import cars from "../../../db/cars";
import Card from "../../../components/Card";

const Shop = () => {
  console.log(cars);
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cars.map((car) => (
        <Card data={car} />
      ))}
    </div>
  );
};

export default Shop;
