import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { ShopService } from "../Services/ShopService";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const GetData = async () => {
    try {
      const res = await ShopService.ProductList();
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="container">
      <div className="row shopList">
        {products.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
