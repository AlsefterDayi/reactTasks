import React from "react";
import cars from "../../../db/cars";
import Card from "../../../components/Card";

const Shop = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {cars.map((car) => (
        <Card data={car} />
      ))}
    </div>
  );
};

export default Shop;
