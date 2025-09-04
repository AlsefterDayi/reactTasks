import axios from "axios";
import $api from "../../../api/api";

export const GetProductList = async () => {
  return axios.get($api("get_products"));
};
