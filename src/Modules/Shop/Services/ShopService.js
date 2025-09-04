import * as ShopProvider from "../Provider/ShopProvider";

export class ShopService {
  static async ProductList() {
    return await ShopProvider.GetProductList().then((res) => res.data);
  }
}
