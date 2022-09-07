import { Display, Product } from "../interfaces";
import { ProductsState } from "./";

type ProductsActionType =
  | { type: "[Products]: Initial Fetch"; payload: Product[] }
  | { type: "[Products]: Set Display"; payload: Display }
  | { type: "[Products]: Filter Categories"; payload: string[] };

export const productsReducer = (
  state: ProductsState,
  action: ProductsActionType
): ProductsState => {
  switch (action.type) {
    case "[Products]: Initial Fetch":
      const fetchedProducts = action.payload;

      //Get unique products (remove duplicates)
      const arrayUniqueById = new Map(
        fetchedProducts.map((item) => [item["id"], item])
      ).values();
      const products = Array.from(arrayUniqueById);

      //Get categories list
      const categoriesSet = new Set<string>();
      products.forEach((p) => categoriesSet.add(p.product_type));
      const categories = Array.from(categoriesSet);

      return {
        ...state,
        categories,
        products,
        filteredResults: products,
      };
    case "[Products]: Set Display":
      return {
        ...state,
        display: action.payload,
      };

    case "[Products]: Filter Categories":
      const filterTypes = action.payload;
      return {
        ...state,
        filteredResults:
          filterTypes.length === 0
            ? [...state.products]
            : state.products.filter((p) =>
                filterTypes.includes(p.product_type)
              ),
      };
    default:
      return state;
  }
};
