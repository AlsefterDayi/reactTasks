import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { ShopService } from "../Services/ShopService";
import Category from "./Category";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const GetData = async () => {
    try {
      const { products, categories } = await ShopService.ProductList();
      setProducts(products);
      setCategory(categories);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);
    console.log(category);

  return (
    <div className="container">
      <div className="row categories">
        <Category />
      </div>
      <div className="row shopList">
        {products.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
