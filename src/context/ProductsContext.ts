import { createContext } from 'react';
import { Display, Product } from '../interfaces';

interface ProductsContextProps {
  display: Display;
  categories: string[];
  products: Product[];
  filteredResults: Product[];
  fetchProducts: () => Promise<void>;
  setDisplay: (display: Display) => void;
  filterCategories: (categories: string[]) => void;
}

export const ProductsContext = createContext({} as ProductsContextProps);
