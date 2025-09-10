import axios from "axios";
import $api from "./api";

export async function getAllProducts() {
  let res = await axios($api("get_products"));

  return res.data;
}
