import * as ShopProvider from "../Provider/ShopProvider";

export class ShopService {
  static async ProductList() {
    return await ShopProvider.GetProductList().then((res) => {
      {
        const products = res.data;
        const categories = [...new Set(products.map((p) => p.category))];
        return { products, categories };
      }
    });
  }
  static async CategoryList() {
    return await ShopProvider.GetProductList().then((res) => res.data.category);
  }
}
