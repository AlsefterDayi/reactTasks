import React from "react";
import cars from "./data/cars";
import Card from "./components/Card";

function App() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cars.map((car) => (
        <Card data={car} />
      ))}
    </div>
  );
}

export default App;
