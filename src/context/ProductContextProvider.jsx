import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../api/ProductRequests";
export let ProductsContext = createContext();

function ProductsContextProvider({ children }) {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res);
        });
    }, []);

    let data = {
        products
    }

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;
