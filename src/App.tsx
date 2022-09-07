import { useContext, useEffect } from "react";
import { HomeLayout } from "./components/layouts";
import { ProductsGrid } from "./components/products";
import { ProductsList } from "./components/products";
import { ProductsContext } from "./context";
import { Display } from "./interfaces";

const App = () => {
  const { display, filteredResults, fetchProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <HomeLayout title="Welcome to the Mum's Deals Page!">
      {display === Display.Grid ? (
        <ProductsGrid products={filteredResults} />
      ) : (
        <ProductsList products={filteredResults} />
      )}
    </HomeLayout>
  );
};

export default App;
