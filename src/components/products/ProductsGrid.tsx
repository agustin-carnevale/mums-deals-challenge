import { Grid } from "@mui/material";
import { FC } from "react";
import { Product } from "../../interfaces";
import { ProductCard } from "./";

interface ProductsGridProps {
  products: Product[];
}

export const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((product, index) => (
        <ProductCard
          product={product}
          key={`grid-item-${product.id}-${index}`}
        />
      ))}
    </Grid>
  );
};
