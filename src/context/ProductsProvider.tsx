import { FC, useReducer } from "react";
import { yallababyAPI } from "../apis";
import { Display, Product } from "../interfaces";
import { ProductsContext } from "./ProductsContext";
import { productsReducer } from "./productsReducer";

export interface ProductsState {
  display: Display;
  categories: string[]
  products: Product[];
  filteredResults: Product[];
}

const Products_INITIAL_STATE: ProductsState = {
  display: Display.Grid,
  categories: [],
  products: [],
  filteredResults: [],
};

interface ProductsProviderProps {
  children?: React.ReactNode;
}

export const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, Products_INITIAL_STATE);

  const fetchProducts = async () => {
    try {
      const { data } = await yallababyAPI.get<Product[]>(
        "/products/best-selling-products-by-subcategory"
      );
      dispatch({ type: "[Products]: Initial Fetch", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const setDisplay = (display: Display) => {
    dispatch({ type: "[Products]: Set Display", payload: display });
  };

  const filterCategories = (categories: string[]) => {
    dispatch({ type: "[Products]: Filter Categories", payload: categories });
  }

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchProducts,
        setDisplay,
        filterCategories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
