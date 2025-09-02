const endpoints = {
  get_products: "/products",
};

const $api = (key) => {
  return import.meta.env.VITE_BASE_URL + endpoints[key];
};

export default $api;
