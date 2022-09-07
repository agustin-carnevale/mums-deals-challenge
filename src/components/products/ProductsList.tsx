import { List } from "@mui/material";
import { FC } from "react";
import { Product } from "../../interfaces";
import { ProductTile } from "./";

interface ProductsListProps {
  products: Product[];
}

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}>
      {products.map((product, index) => (
        <ProductTile
          product={product}
          key={`list-item-${product.id}-${index}`}
        />
      ))}
    </List>
  );
};
